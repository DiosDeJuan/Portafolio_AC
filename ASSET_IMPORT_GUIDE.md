# ASSET_IMPORT_GUIDE

Guía rápida para importar fotos y videos reales sin subir basura de navegador.

## 1) Estructura oficial (destino)
Copia tus archivos reales dentro de:

- `assets/faces/`
  - `rostro-principal.png`
  - `rostro-lentes.png`
- `assets/hero/`
  - `imagen-principal.jpg`
- `assets/reels/`
  - `reel-01.jpg`
  - `reel-02.jpg`
  - `reel-03.jpg`
  - `reel-04.jpg`
  - (opcional) `reel-01.mp4` ... `reel-04.mp4`
- `assets/stats/`
  - `stats-01.jpg`
- `assets/photos/`
  - `foto-01.jpg`
  - `foto-02.jpg`
  - `foto-03.jpg`
  - `foto-04.jpg`
- `assets/community/`
  - `community-01.jpg` ... `community-06.jpg`
  - `community-01.mp4` ... `community-06.mp4`
- `assets/final/`
  - `foto-final.jpg`

> Puedes usar `.jpeg`, `.png`, `.webp`, `.mp4`, `.mov`, pero mantén nombres consistentes para facilitar el mapeo en `scripts.js`.

## 2) Qué archivos NO copiar
No copies ni subas al repo:

- carpetas tipo `AnimoAnuncio_files/`
- `AnimoAnuncio.html`
- archivos `*.js.descarga`
- archivos `*.enc`
- CSS/JS descargados desde navegador
- archivos temporales del sistema

## 3) Si tienes carpeta IMG/ con mezcla de archivos
1. Deja `IMG/` como zona temporal local.
2. Copia **solo** imágenes/videos reales a `assets/`.
3. No hagas `git add IMG/` completo.
4. Si algo basura quedó staged, quítalo:

```bash
git restore --staged IMG/AnimoAnuncio_files
git restore --staged IMG/AnimoAnuncio.html
```

## 4) Revisión antes de commit
Ejecuta:

```bash
git status
```

Debes ver staged solo de:

- `assets/...` (archivos reales)
- `scripts.js` (cuando se actualicen rutas)
- `index.html`/`styles.css` (solo si hubo ajustes visuales)
- documentación necesaria

## 5) Correr la landing local
Desde la raíz del proyecto:

```bash
python -m http.server 4173
```

Abre:

- `http://127.0.0.1:4173/index.html`

## 6) Validación visual mínima
Revisar:

- hero sin imágenes rotas
- reels con thumbnails/video correcto
- fotos del grid cargando bien
- comunidad con video/thumbnail o fallback
- CTA final con imagen real
- lightbox abre/cierra sin errores
- sin overflow horizontal en mobile
- consola sin errores críticos

## 7) Validación técnica rápida

```bash
node --check scripts.js
git status
```
