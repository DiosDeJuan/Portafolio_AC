# NEXT STEPS — Continuidad técnica Portafolio_AC

Este documento te permite retomar el proyecto en otra conversación sin perder contexto.

## 1) Qué se hizo hasta ahora

- **V1**: estructura base de landing/media kit en HTML/CSS/JS.
- **V2**: refactor de `scripts.js`, fallbacks de assets faltantes, mejoras de accesibilidad, responsive y lightbox/modal.
- **V3**: pulido visual final, screenshots multi-dispositivo, mejoras de configuración editable, seguridad DOM, documentación y preparación para GitHub Pages.

## 2) Archivos importantes

- `index.html`
- `styles.css`
- `scripts.js`
- `README.md`
- `screenshots/`

## 3) Qué tiene cada archivo

### `index.html`
- Estructura completa de la landing (8 secciones).
- Marcado de placeholders visuales.
- Conexión a `styles.css` y `scripts.js` con rutas relativas.

### `styles.css`
- Identidad visual editorial/grunge (blanco/negro/rojo).
- Layout responsive desktop/tablet/mobile.
- Estilos de cards, placeholders, lightbox y detalles decorativos.

### `scripts.js`
- `CONFIG` editable para marca, links, imágenes, reels, fotos, métricas y comunidad.
- Render dinámico de contenido.
- Fallbacks para assets no disponibles.
- Lightbox/modal (apertura/cierre/foco/ESC/overlay).
- Control de links placeholder (`CAMBIAR_AQUI_*`) para no tratarlos como válidos.

### `README.md`
- Guía de uso del proyecto.
- Edición de assets/links.
- Publicación en GitHub Pages.
- Checklist pre-publicación.

### `screenshots/`
- Capturas full-page de QA visual para desktop/laptop/tablet/mobile.

## 4) Dónde cambiar imágenes

En `scripts.js`, dentro de `CONFIG`:

- `CONFIG.images.faceMain`
- `CONFIG.images.faceGlasses`
- `CONFIG.images.heroMain`
- `CONFIG.images.statsMain`
- `CONFIG.images.finalPhoto`
- `CONFIG.reels[]` (imagen + métricas + URL)
- `CONFIG.photos[]`
- `CONFIG.communityVideos[]` (thumbnail + mp4 + URL)

## 5) Dónde cambiar links

En `scripts.js`, dentro de:

- `CONFIG.links.instagram`
- `CONFIG.links.tiktok`
- `CONFIG.links.youtube`
- `CONFIG.links.email`
- URLs de `CONFIG.reels[]`
- URLs de `CONFIG.communityVideos[]`

Además:
- `CONFIG.brand.email`
- `CONFIG.brand.location`
- `CONFIG.brand.handle`

## 6) Assets pendientes por reemplazar

ROSTROS:
- assets/faces/rostro-principal.png
- assets/faces/rostro-lentes.png

PORTADA:
- assets/hero/imagen-principal.jpg

RESULTADOS / REELS:
- assets/reels/reel-01.jpg
- assets/reels/reel-02.jpg
- assets/reels/reel-03.jpg
- assets/reels/reel-04.jpg

ESTADÍSTICAS:
- assets/stats/stats-01.jpg

FOTOS:
- assets/photos/foto-01.jpg
- assets/photos/foto-02.jpg
- assets/photos/foto-03.jpg
- assets/photos/foto-04.jpg

COMUNIDAD:
- assets/community/community-01.jpg
- assets/community/community-01.mp4
- assets/community/community-02.jpg
- assets/community/community-02.mp4
- assets/community/community-03.jpg
- assets/community/community-03.mp4
- assets/community/community-04.jpg
- assets/community/community-04.mp4
- assets/community/community-05.jpg
- assets/community/community-05.mp4
- assets/community/community-06.jpg
- assets/community/community-06.mp4

FOTO FINAL:
- assets/final/foto-final.jpg

LINKS:
- Instagram
- TikTok
- YouTube
- Links de reels
- Links de videos de comunidad
- Correo

## 7) Cómo correr el proyecto localmente

Desde la raíz del repo:

```powershell
python -m http.server 4173
```

Si tu entorno usa `python3`:

```powershell
python3 -m http.server 4173
```

Abrir:

```text
http://127.0.0.1:4173/index.html
```

## 8) Cómo validar antes de publicar

```powershell
node --check scripts.js
git status
```

Checklist rápido:
- Revisar que no quede ningún `CAMBIAR_AQUI_*` en producción.
- Revisar responsive (390 y 430) sin overflow horizontal.
- Verificar modal: abre/cierra por botón, ESC y click fuera.
- Confirmar que links reales estén cargados en `CONFIG`.

## 9) Cómo publicar en GitHub Pages

1. Push de cambios a la rama objetivo.
2. GitHub → **Settings** → **Pages**.
3. Source: rama principal (o la que definas para deploy) y carpeta `/ (root)`.
4. Guardar y abrir URL publicada.

## 10) Por dónde conviene empezar el siguiente trabajo

1. Traer rama actual al equipo local.
2. Reemplazar primero assets clave: rostros, portada, reels, stats y foto final.
3. Actualizar links reales de redes/reels/comunidad.
4. Hacer QA visual final con tus assets reales.
5. Publicar en GitHub Pages.

---

## Primer pull en mi computadora

**Rama actual de trabajo en este cierre:**  
`copilot/create-portfolio-page-animo-cabrones`

### ESCENARIO A — Ya tengo el repo clonado

```powershell
cd "RUTA_DE_MI_PROYECTO"
git status
git checkout RAMA_CORRECTA
git pull origin RAMA_CORRECTA
```

Para este cierre, `RAMA_CORRECTA` = `copilot/create-portfolio-page-animo-cabrones`:

```powershell
cd "RUTA_DE_MI_PROYECTO"
git status
git checkout copilot/create-portfolio-page-animo-cabrones
git pull origin copilot/create-portfolio-page-animo-cabrones
```

### ESCENARIO B — No tengo el repo clonado

```powershell
cd "C:\Users\ijuan"
git clone https://github.com/DiosDeJuan/Portafolio_AC.git
cd Portafolio_AC
git checkout RAMA_CORRECTA
```

Para este cierre:

```powershell
cd "C:\Users\ijuan"
git clone https://github.com/DiosDeJuan/Portafolio_AC.git
cd Portafolio_AC
git checkout copilot/create-portfolio-page-animo-cabrones
```

### Abrir localmente después del pull

```powershell
python -m http.server 4173
```

Alternativa:

```powershell
python3 -m http.server 4173
```

Abrir:

```text
http://127.0.0.1:4173/index.html
```
