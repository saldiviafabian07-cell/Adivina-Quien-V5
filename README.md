# Adivina Quién

Juego web para repartir personajes secretos usando un solo celular.

## Archivos

- `index.html`: interfaz y pantallas.
- `app.js`: lógica de la partida, seguridad visual, aleatoriedad, historial local y carga de imágenes.
- `baseDeDatos.js`: banco de personajes. Cada personaje admite `imagen: "URL"`.
- `manifest.json`: configuración básica para instalarlo como PWA.

## Fotos

La base tiene el campo `imagen` en cada personaje. Si `imagen` está vacío, la app intenta encontrar automáticamente una imagen representativa mediante la API de Wikipedia. Para tener control total sobre una imagen, coloca su URL en `imagen`.

Ejemplo:

```js
{ id: 1, nombre: "Homero Simpson", categoria: "Los Simpson", dificultad: "facil", imagen: "https://..." }
```

Para una versión más robusta y sin depender de servicios externos, puedes guardar tus propias imágenes en una carpeta `imagenes/` y usar rutas como `imagenes/homero-simpson.jpg`.

## GitHub Pages

Sube todos los archivos a la raíz del repositorio y activa GitHub Pages desde Settings → Pages → Deploy from branch.

## Nota sobre imágenes de terceros

Las imágenes encontradas automáticamente son enlaces externos. Para un proyecto público/comercial, usa imágenes para las que tengas los derechos o permiso de uso.
