# ÁNIMO CABRONES — Media Kit Landing (V3 Final)

Landing editorial/grunge para presentar el media kit digital de **Ánimo Cabrones**: comunidad local, contenido viral y resultados reales para marcas.

## 1) ¿Qué es este proyecto?

Una landing de una sola página (HTML/CSS/JS vanilla) con:
- 8 secciones (Hero, Why, Videos, Resultados, Métricas, Fotos, Comunidad, CTA)
- Estética urbano/editorial en blanco y negro con acentos rojos
- Fallbacks visuales cuando faltan imágenes/videos
- Lightbox/modal accesible
- Configuración editable desde `scripts.js`

---

## 2) Cómo abrirlo localmente

Desde la carpeta del proyecto:

```bash
cd Portafolio_AC
python3 -m http.server 4173
```

Requisito: tener **Python 3** instalado.  
Alternativas rápidas si no tienes Python:
- `npx http-server -p 4173`
- Extensión **Live Server** en VS Code

Abrir en navegador:

```text
http://127.0.0.1:4173/index.html
```

---

## 3) Estructura de carpetas recomendada

```text
/assets
  /faces
    rostro-principal.png
    rostro-lentes.png
  /hero
    imagen-principal.jpg
  /reels
    reel-01.jpg
    reel-02.jpg
    reel-03.jpg
    reel-04.jpg
  /stats
    stats-01.jpg
  /photos
    foto-01.jpg
    foto-02.jpg
    foto-03.jpg
    foto-04.jpg
  /community
    community-01.jpg
    community-01.mp4
    community-02.jpg
    community-02.mp4
    ...
  /final
    foto-final.jpg
```

---

## 4) Dónde cambiar imágenes y videos

Todo se cambia en `scripts.js` dentro de `CONFIG`:

- `CONFIG.images.faceMain` → rostro principal  
- `CONFIG.images.faceGlasses` → rostro con lentes  
- `CONFIG.images.heroMain` → imagen principal portada  
- `CONFIG.images.statsMain` → screenshot de estadísticas  
- `CONFIG.images.finalPhoto` → foto final  
- `CONFIG.reels[]` → imagen + métricas + link por reel  
- `CONFIG.photos[]` → fotos del bloque de fotos  
- `CONFIG.communityVideos[]` → thumbnails + mp4 + links comunidad  

---

## 5) Dónde cambiar links

En `scripts.js`:

- `CONFIG.links.instagram`
- `CONFIG.links.tiktok`
- `CONFIG.links.youtube`
- `CONFIG.links.email`

Y en marca:
- `CONFIG.brand.email`
- `CONFIG.brand.location`
- `CONFIG.brand.handle`

> Si dejas un link como `CAMBIAR_AQUI_*`, el sitio lo marca como no disponible (no lo toma como válido).

---

## 6) Tamaños recomendados de assets

- **Rostros**: PNG con fondo transparente (mínimo 1200 px de alto recomendado)
- **Reels/Video vertical**: 1080x1920
- **Fotos**:
  - Verticales: 1080x1350 o 1200x1800
  - Horizontales: 1600x900 o superior
- **Stats screenshot**: 1080x1920 (o captura nítida equivalente)
- **Foto final**: mínimo 1600 px lado largo

---

## 7) Publicar en GitHub Pages

1. Haz push de `index.html`, `styles.css`, `scripts.js`, `assets/`.
2. En GitHub: **Settings → Pages**.
3. Source: rama principal y carpeta `/ (root)`.
4. Guarda y espera la URL publicada.

No requiere backend ni build tool.

---

## 8) Checklist antes de publicar

- [ ] `node --check scripts.js` sin errores (valida sintaxis JS, no sustituye QA visual/manual en navegador)
- [ ] Links reales actualizados en `CONFIG.links.*`
- [ ] Correo/ubicación/usuario actualizados en `CONFIG.brand.*`
- [ ] Imágenes y videos colocados en rutas `assets/...`
- [ ] Revisar mobile (390 px y 430 px) sin overflow horizontal
- [ ] Probar modal: abrir/cerrar con botón, overlay y tecla ESC
- [ ] Verificar que no se muestre ningún `CAMBIAR_AQUI_*` en producción
