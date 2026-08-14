(() => {
  'use strict';

  const screens = ['home', 'setup', 'pass', 'warning', 'reveal', 'next', 'finish', 'playing'];
  const state = {
    players: 5,
    names: [],
    categories: [],
    difficulty: 'media',
    assignments: [],
    index: 0,
    lastConfig: null,
    revealToken: 0
  };

  const $ = (id) => document.getElementById(id);
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function safeText(value) {
    return String(value ?? '').trim();
  }

  function escapeHtml(value) {
    return safeText(value).replace(/[&<>\"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#39;'
    }[char]));
  }

  function showScreen(id) {
    screens.forEach((screen) => {
      $(screen)?.classList.toggle('active', screen === id);
    });

    const labels = {
      home: '', setup: '1 / 3', pass: '2 / 3', warning: '2 / 3', reveal: '2 / 3',
      next: '2 / 3', finish: '3 / 3', playing: ''
    };
    $('stepBadge').textContent = labels[id] || '';
  }

  function haptic(kind = 'light') {
    if (!navigator.vibrate) return;
    const patterns = { light: 10, medium: 20, success: [15, 30, 15], warning: [35, 30, 35] };
    navigator.vibrate(patterns[kind] || 10);
  }

  function normalizeNames() {
    state.names = [...document.querySelectorAll('#namesBox input')].map((input) => input.value.trim());
  }

  function renderNames() {
    const previous = [...state.names];
    $('namesBox').innerHTML = '';

    for (let index = 0; index < state.players; index += 1) {
      const input = document.createElement('input');
      input.className = 'input';
      input.maxLength = 30;
      input.autocomplete = 'off';
      input.placeholder = `Nombre ${index + 1}`;
      input.value = previous[index] || '';
      input.addEventListener('input', normalizeNames);
      $('namesBox').appendChild(input);
    }

    normalizeNames();
  }

  function renderCategories() {
    const categories = [...new Set(baseDeDatos.map((character) => character.categoria))];
    $('categoryBox').innerHTML = '';

    categories.forEach((category) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chip';
      button.dataset.category = category;
      button.textContent = category;
      button.addEventListener('click', () => {
        button.classList.toggle('selected');
        state.categories = [...document.querySelectorAll('.chip.selected')].map((item) => item.dataset.category);
        haptic('light');
      });
      $('categoryBox').appendChild(button);
    });
  }

  function setDifficulty(value) {
    state.difficulty = value;
    document.querySelectorAll('.diff').forEach((button) => {
      button.classList.toggle('selected', button.dataset.diff === value);
    });
  }

  function shuffle(array) {
    const result = [...array];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function getRecentIds() {
    try {
      return JSON.parse(localStorage.getItem('adivinaQuien_recentIds') || '[]');
    } catch {
      return [];
    }
  }

  function saveRecentIds(ids) {
    try {
      localStorage.setItem('adivinaQuien_recentIds', JSON.stringify(ids.slice(-50)));
    } catch {
      // La app sigue funcionando aunque el almacenamiento local no esté disponible.
    }
  }

  function difficultyPool(selectedDifficulty, pool) {
    const exact = pool.filter((character) => character.dificultad === selectedDifficulty);
    if (exact.length >= state.players) return exact;

    const fallbackOrder = selectedDifficulty === 'dificil'
      ? ['media', 'facil']
      : selectedDifficulty === 'media'
        ? ['facil']
        : [];

    const fallback = [...exact];
    fallbackOrder.forEach((level) => {
      fallback.push(...pool.filter((character) => character.dificultad === level));
    });

    return fallback.length ? fallback : pool;
  }

  function generateAssignments() {
    normalizeNames();

    if (state.names.some((name) => !name)) {
      alert('Completa el nombre de todos los jugadores.');
      return;
    }

    if (new Set(state.names.map((name) => name.toLocaleLowerCase('es'))).size !== state.names.length) {
      alert('Usa nombres diferentes para cada jugador.');
      return;
    }

    if (!state.categories.length) {
      alert('Selecciona al menos una temática.');
      return;
    }

    let pool = baseDeDatos.filter((character) => state.categories.includes(character.categoria));
    pool = difficultyPool(state.difficulty, pool);

    if (pool.length < state.players) {
      alert(`No hay suficientes personajes únicos con estas temáticas. Hay ${pool.length} disponibles y necesitas ${state.players}.`);
      return;
    }

    const recentIds = new Set(getRecentIds());
    const fresh = shuffle(pool.filter((character) => !recentIds.has(character.id)));
    const old = shuffle(pool.filter((character) => recentIds.has(character.id)));
    const candidatePool = [...fresh, ...old];
    const selected = candidatePool.slice(0, state.players);

    state.assignments = selected.map((character, index) => ({
      player: state.names[index],
      character
    }));
    state.index = 0;
    state.lastConfig = {
      players: state.players,
      names: [...state.names],
      categories: [...state.categories],
      difficulty: state.difficulty
    };

    saveRecentIds([...getRecentIds(), ...selected.map((character) => character.id)]);
    clearReveal();
    renderPass();
    showScreen('pass');
    haptic('success');
  }

  function renderPass() {
    const assignment = state.assignments[state.index];
    if (!assignment) return;
    $('turnName').textContent = assignment.player;
    $('roundText').textContent = `Jugador ${state.index + 1} de ${state.players}`;
    $('progressBar').style.width = `${(state.index / state.players) * 100}%`;
  }

  function renderWarning() {
    const assignment = state.assignments[state.index];
    if (!assignment) return;
    $('warningName').textContent = `${assignment.player} NO DEBE MIRAR LA PANTALLA.`;
  }

  async function renderReveal() {
    const assignment = state.assignments[state.index];
    if (!assignment) return;

    state.revealToken += 1;
    const token = state.revealToken;
    const character = assignment.character;

    $('revealPlayer').textContent = assignment.player;
    $('characterName').textContent = character.nombre;
    $('characterCategory').textContent = character.categoria;
    $('doNotTell').textContent = assignment.player;
    $('characterDifficulty').textContent = labelDifficulty(character.dificultad);
    $('characterImage').classList.add('loading');
    $('characterImage').removeAttribute('src');
    $('characterImage').alt = '';
    $('characterImageFallback').textContent = initials(character.nombre);
    $('characterImageFallback').hidden = false;

    showScreen('reveal');
    haptic('warning');

    const imageUrl = await resolveCharacterImage(character);
    if (token !== state.revealToken || !document.getElementById('reveal').classList.contains('active')) return;

    if (imageUrl) {
      $('characterImage').onload = () => {
        $('characterImage').classList.remove('loading');
        $('characterImageFallback').hidden = true;
      };
      $('characterImage').onerror = () => {
        $('characterImage').classList.remove('loading');
        $('characterImage').removeAttribute('src');
        $('characterImageFallback').hidden = false;
      };
      $('characterImage').src = imageUrl;
      $('characterImage').alt = `Imagen de ${character.nombre}`;
    } else {
      $('characterImage').classList.remove('loading');
    }
  }

  function clearReveal() {
    state.revealToken += 1;
    const image = $('characterImage');
    if (image) {
      image.onload = null;
      image.onerror = null;
      image.removeAttribute('src');
      image.alt = '';
      image.classList.remove('loading');
    }
    if ($('characterName')) $('characterName').textContent = '';
    if ($('characterCategory')) $('characterCategory').textContent = '';
    if ($('characterDifficulty')) $('characterDifficulty').textContent = '';
    if ($('revealPlayer')) $('revealPlayer').textContent = '';
    if ($('doNotTell')) $('doNotTell').textContent = '';
    if ($('characterImageFallback')) $('characterImageFallback').hidden = false;
  }

  function renderNext() {
    clearReveal();
    if (state.index + 1 >= state.players) {
      $('summaryBox').innerHTML = state.assignments.map((assignment) => `
        <div class="summary-row">
          <span>${escapeHtml(assignment.player)}</span>
          <span class="small">personaje repartido</span>
        </div>
      `).join('');
      showScreen('finish');
      haptic('success');
      return;
    }

    state.index += 1;
    $('nextName').textContent = state.assignments[state.index].player;
    showScreen('next');
  }

  function resetToHome() {
    clearReveal();
    state.assignments = [];
    state.index = 0;
    state.names = [];
    state.categories = [];
    state.lastConfig = null;
    showScreen('home');
  }

  function loadLastConfig() {
    const config = state.lastConfig;
    if (!config) {
      showScreen('setup');
      return;
    }

    state.players = config.players;
    state.names = [...config.names];
    state.categories = [...config.categories];
    state.difficulty = config.difficulty;
    $('playerCount').textContent = state.players;
    renderNames();
    renderCategories();
    state.categories.forEach((category) => {
      document.querySelector(`.chip[data-category="${CSS.escape(category)}"]`)?.classList.add('selected');
    });
    setDifficulty(state.difficulty);
    showScreen('setup');
  }

  function startAgainWithSameConfig() {
    if (!state.lastConfig) {
      resetToHome();
      return;
    }
    loadLastConfig();
    haptic('light');
  }

  function labelDifficulty(value) {
    return ({ facil: 'Fácil', media: 'Media', dificil: 'Difícil' })[value] || value;
  }

  function initials(name) {
    const words = safeText(name).split(/\s+/).filter(Boolean);
    if (!words.length) return '?';
    return words.slice(0, 2).map((word) => word[0]).join('').toUpperCase();
  }

  async function fetchWikipediaImage(query) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=640&format=json&origin=*`;
    try {
      const response = await fetch(endpoint, { cache: 'force-cache' });
      if (!response.ok) return '';
      const data = await response.json();
      const pages = Object.values(data?.query?.pages || {});
      return pages[0]?.thumbnail?.source || '';
    } catch {
      return '';
    }
  }

  async function resolveCharacterImage(character) {
    if (safeText(character.imagen)) return character.imagen;

    // Buscamos una imagen representativa sin obligar a almacenar 131 archivos dentro del repositorio.
    const queries = [
      `"${character.nombre}" ${character.categoria}`,
      `${character.nombre} ${character.categoria}`,
      character.nombre
    ];

    for (const query of queries) {
      const image = await fetchWikipediaImage(query);
      if (image) return image;
    }
    return '';
  }

  $('newGameBtn').addEventListener('click', () => {
    state.names = [];
    state.categories = [];
    state.difficulty = 'media';
    state.lastConfig = null;
    state.players = clamp(state.players || 5, 2, 20);
    $('playerCount').textContent = state.players;
    renderNames();
    renderCategories();
    setDifficulty('media');
    showScreen('setup');
    haptic('light');
  });

  $('backHomeBtn').addEventListener('click', resetToHome);

  $('minusPlayers').addEventListener('click', () => {
    if (state.players > 2) {
      state.players -= 1;
      $('playerCount').textContent = state.players;
      renderNames();
      haptic('light');
    }
  });

  $('plusPlayers').addEventListener('click', () => {
    if (state.players < 20) {
      state.players += 1;
      $('playerCount').textContent = state.players;
      renderNames();
      haptic('light');
    }
  });

  document.querySelectorAll('.diff').forEach((button) => {
    button.addEventListener('click', () => {
      setDifficulty(button.dataset.diff);
      haptic('light');
    });
  });

  $('startGameBtn').addEventListener('click', generateAssignments);
  $('readyBtn').addEventListener('click', () => {
    renderWarning();
    showScreen('warning');
    haptic('warning');
  });
  $('showBtn').addEventListener('click', () => renderReveal());
  $('hideBtn').addEventListener('click', renderNext);
  $('continueBtn').addEventListener('click', () => {
    clearReveal();
    renderPass();
    showScreen('pass');
    haptic('light');
  });

  $('playBtn').addEventListener('click', () => {
    showScreen('playing');
    haptic('success');
  });

  $('playAgainBtn').addEventListener('click', startAgainWithSameConfig);
  $('newSetupBtn').addEventListener('click', () => {
    resetToHome();
    $('newGameBtn').click();
  });
  $('backToStartBtn').addEventListener('click', resetToHome);

  renderNames();
  renderCategories();
  setDifficulty('media');
})();
