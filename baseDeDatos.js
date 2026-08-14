// baseDeDatos.js - Banco de datos de personajes y categorías para la app web

const baseDeDatos = [
  // ==========================================
  // 1. LOS SIMPSON
  // ==========================================
  { id: 1, nombre: "Homero Simpson", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 2, nombre: "Marge Simpson", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 3, nombre: "Bart Simpson", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 4, nombre: "Lisa Simpson", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 5, nombre: "Maggie Simpson", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 6, nombre: "Sr. Burns", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 7, nombre: "Ned Flanders", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 8, nombre: "Moe Szyslak", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 9, nombre: "Krusty el payaso", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 10, nombre: "Milhouse Van Houten", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 11, nombre: "Jefe Gorgory", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 12, nombre: "Apu Nahasapeemapetilon", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 13, nombre: "Nelson Muntz", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 14, nombre: "Director Skinner", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 15, nombre: "Barney Gumble", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 16, nombre: "El Abuelo (Abraham Simpson)", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 17, nombre: "Bob Patiño", categoria: "Los Simpson", dificultad: "facil", imagen: "" },
  { id: 18, nombre: "Rafa Gorgory", categoria: "Los Simpson", dificultad: "facil", imagen: "" },

  // ==========================================
  // 2. MALCOLM IN THE MIDDLE
  // ==========================================
  { id: 19, nombre: "Malcolm", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 20, nombre: "Lois", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 21, nombre: "Hal", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 22, nombre: "Reese", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 23, nombre: "Dewey", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 24, nombre: "Francis", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 25, nombre: "Stevie Kenarban", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 26, nombre: "Craig Feldspar", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 27, nombre: "La abuela Ida", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 28, nombre: "Piama", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },
  { id: 29, nombre: "Abe Kenarban", categoria: "Malcolm in the Middle", dificultad: "facil", imagen: "" },

  // ==========================================
  // 3. CANTANTES
  // ==========================================
  { id: 30, nombre: "Michael Jackson", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 31, nombre: "Bad Bunny", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 32, nombre: "Shakira", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 33, nombre: "Daddy Yankee", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 34, nombre: "Karol G", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 35, nombre: "Billie Eilish", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 36, nombre: "Chayanne", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 37, nombre: "Duki", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 38, nombre: "Quevedo", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 39, nombre: "Kidd Voodoo", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 40, nombre: "Kanye West", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 41, nombre: "Wisin y Yandel", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 42, nombre: "Marcianeke", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 43, nombre: "Pailita", categoria: "Cantantes", dificultad: "facil", imagen: "" },
  { id: 44, nombre: "Paloma Mami", categoria: "Cantantes", dificultad: "facil", imagen: "" },

  // ==========================================
  // 4. MEMES DE CHILE
  // ==========================================
  { id: 45, nombre: "El Papi Micky", categoria: "Memes de Chile", dificultad: "facil", imagen: "" },
  { id: 46, nombre: "René Puente", categoria: "Memes de Chile", dificultad: "facil", imagen: "" },
  { id: 47, nombre: "Diego González", categoria: "Memes de Chile", dificultad: "facil", imagen: "" },
  { id: 48, nombre: "Naya Fácil", categoria: "Memes de Chile", dificultad: "facil", imagen: "" },
  { id: 49, nombre: "JB The Voice", categoria: "Memes de Chile", dificultad: "facil", imagen: "" },
  { id: 50, nombre: "Carlitos Vera", categoria: "Memes de Chile", dificultad: "facil", imagen: "" },

  // ==========================================
  // 5. CARTOON NETWORK
  // ==========================================
  { id: 51, nombre: "Goku (Dragon Ball Z)", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 52, nombre: "Finn el humano", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 53, nombre: "Jake el perro", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 54, nombre: "Mordecai", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 55, nombre: "Rigby", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 56, nombre: "Gumball Watterson", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 57, nombre: "Ben 10", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 58, nombre: "Johnny Bravo", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 59, nombre: "Dexter", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 60, nombre: "Coraje el perro cobarde", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 61, nombre: "Bombón", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 62, nombre: "Burbuja", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 63, nombre: "Bellota", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 64, nombre: "Puro Hueso", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 65, nombre: "Billy", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 66, nombre: "Mandy", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 67, nombre: "Ed", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },
  { id: 68, nombre: "Steven Universe", categoria: "Cartoon Network", dificultad: "facil", imagen: "" },

  // ==========================================
  // 6. NICKELODEON
  // ==========================================
  { id: 69, nombre: "Bob Esponja", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 70, nombre: "Patricio Estrella", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 71, nombre: "Calamardo Tentáculos", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 72, nombre: "Don Cangrejo", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 73, nombre: "Timmy Turner", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 74, nombre: "Cosmo", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 75, nombre: "Wanda", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 76, nombre: "Arnold", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 77, nombre: "Helga Pataki", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 78, nombre: "Carly Shay (iCarly)", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 79, nombre: "Drake", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },
  { id: 80, nombre: "Josh", categoria: "Nickelodeon", dificultad: "facil", imagen: "" },

  // ==========================================
  // 7. FUTBOLISTAS
  // ==========================================
  { id: 81, nombre: "Cristiano Ronaldo", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 82, nombre: "Lionel Messi", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 83, nombre: "Alexis Sánchez", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 84, nombre: "Arturo Vidal", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 85, nombre: "Neymar", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 86, nombre: "Kylian Mbappé", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 87, nombre: "Claudio Bravo", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 88, nombre: "Ronaldinho", categoria: "Futbolistas", dificultad: "facil", imagen: "" },
  { id: 89, nombre: "Erling Haaland", categoria: "Futbolistas", dificultad: "facil", imagen: "" },

  // ==========================================
  // 8. PELÍCULAS
  // ==========================================
  { id: 90, nombre: "Harry Potter", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 91, nombre: "Jack Sparrow", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 92, nombre: "Joker / El Guasón", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 93, nombre: "Shrek", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 94, nombre: "Batman", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 95, nombre: "Spiderman", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 96, nombre: "Buzz Lightyear", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 97, nombre: "Woody", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 98, nombre: "El Gato con Botas", categoria: "Películas", dificultad: "facil", imagen: "" },
  { id: 99, nombre: "Burro (Shrek)", categoria: "Películas", dificultad: "facil", imagen: "" },

  // ==========================================
  // 9. FARÁNDULA Y POLÍTICA CHILENA
  // ==========================================
  { id: 100, nombre: "Felipe Camiroaga", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 101, nombre: "Pamela Díaz ('La Fiera')", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 102, nombre: "Patricia Maldonado", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 103, nombre: "Junior Playboy", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 104, nombre: "Kike Morandé", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 105, nombre: "Martín Cárcamo", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 106, nombre: "Sebastián Piñera", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 107, nombre: "José Antonio Kast", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },
  { id: 108, nombre: "Karol Dance", categoria: "Farándula Chilena", dificultad: "facil", imagen: "" },

  // ==========================================
  // 10. ANIME
  // ==========================================
  { id: 109, nombre: "Goku", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 110, nombre: "Vegeta", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 111, nombre: "Naruto Uzumaki", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 112, nombre: "Light Yagami", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 113, nombre: "L", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 114, nombre: "Eren Yeager", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 115, nombre: "Levi Ackerman", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 116, nombre: "Senku", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 117, nombre: "Saitama", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 118, nombre: "Pikachu", categoria: "Anime", dificultad: "facil", imagen: "" },
  { id: 119, nombre: "Ash Ketchum", categoria: "Anime", dificultad: "facil", imagen: "" },

  // ==========================================
  // 11. YOUTUBERS / STREAMERS
  // ==========================================
  { id: 120, nombre: "ElRubius", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 121, nombre: "Ibai Llanos", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 122, nombre: "AuronPlay", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 123, nombre: "Luisito Comunica", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 124, nombre: "Vegetta777", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 125, nombre: "Germán Garmendia (HolaSoyGerman)", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 126, nombre: "Dylantero Sin Memoria", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 127, nombre: "Fernanfloo", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 128, nombre: "TheGrefg", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 129, nombre: "El Mariana", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 130, nombre: "IShowSpeed", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" },
  { id: 131, nombre: "MrBeast", categoria: "Youtubers / Streamers", dificultad: "facil", imagen: "" }
];


window.baseDeDatos = baseDeDatos;

function obtenerPersonajesAzar(categoriaSeleccionada, cantidad) {
  const filtrados = baseDeDatos.filter((personaje) => personaje.categoria === categoriaSeleccionada);
  const mezclados = [...filtrados];
  for (let i = mezclados.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [mezclados[i], mezclados[j]] = [mezclados[j], mezclados[i]];
  }
  return mezclados.slice(0, cantidad);
}
