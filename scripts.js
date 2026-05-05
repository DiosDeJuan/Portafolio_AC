const CONFIG = {
  brand: {
    email: "hola@animocabrones.com",
    location: "GDL, JAL",
    handle: "@animocabrones"
  },
  links: {
    // CAMBIAR AQUÍ LINKS SOCIALES Y DE CONTACTO
    instagram: "CAMBIAR_AQUI_LINK_INSTAGRAM",
    tiktok: "CAMBIAR_AQUI_LINK_TIKTOK",
    youtube: "CAMBIAR_AQUI_LINK_YOUTUBE",
    email: "mailto:hola@animocabrones.com"
  },
  images: {
    // CAMBIAR AQUÍ ROSTROS, HERO Y FOTO FINAL
    faceMain: "assets/faces/rostro-principal.png",
    faceGlasses: "assets/faces/rostro-lentes.png",
    heroMain: "assets/hero/imagen-principal.jpg",
    finalPhoto: "assets/final/foto-final.jpg",
    statsMain: "assets/stats/stats-01.jpg"
  },
  photos: [
    // CAMBIAR AQUÍ FOTOS DE PORTAFOLIO
    { title: "Foto 01", image: "assets/photos/foto-01.jpg" },
    { title: "Foto 02", image: "assets/photos/foto-02.jpg" },
    { title: "Foto 03", image: "assets/photos/foto-03.jpg" },
    { title: "Foto 04", image: "assets/photos/foto-04.jpg" }
  ],
  reels: [
    // CAMBIAR AQUÍ REELS Y MÉTRICAS
    {
      title: "Reel 01",
      image: "assets/reels/reel-01.jpg",
      views: "10.5K",
      interactions: "610",
      url: "CAMBIAR_AQUI_LINK_REEL_01"
    },
    {
      title: "Reel 02",
      image: "assets/reels/reel-02.jpg",
      views: "21.7K",
      interactions: "1.4K",
      url: "CAMBIAR_AQUI_LINK_REEL_02"
    },
    {
      title: "Reel 03",
      image: "assets/reels/reel-03.jpg",
      views: "15.1K",
      interactions: "848",
      url: "CAMBIAR_AQUI_LINK_REEL_03"
    },
    {
      title: "Reel 04",
      image: "assets/reels/reel-04.jpg",
      views: "6.8K",
      interactions: "324",
      url: "CAMBIAR_AQUI_LINK_REEL_04"
    }
  ],
  communityVideos: [
    // CAMBIAR AQUÍ THUMBNAILS, VIDEOS Y LINKS DE COMUNIDAD
    {
      title: "Video Comunidad 01",
      thumbnail: "assets/community/community-01.jpg",
      video: "assets/community/community-01.mp4",
      url: "CAMBIAR_AQUI_LINK_VIDEO_COMUNIDAD_01"
    },
    {
      title: "Video Comunidad 02",
      thumbnail: "assets/community/community-02.jpg",
      video: "assets/community/community-02.mp4",
      url: "CAMBIAR_AQUI_LINK_VIDEO_COMUNIDAD_02"
    },
    {
      title: "Video Comunidad 03",
      thumbnail: "assets/community/community-03.jpg",
      video: "assets/community/community-03.mp4",
      url: "CAMBIAR_AQUI_LINK_VIDEO_COMUNIDAD_03"
    },
    {
      title: "Video Comunidad 04",
      thumbnail: "assets/community/community-04.jpg",
      video: "assets/community/community-04.mp4",
      url: "CAMBIAR_AQUI_LINK_VIDEO_COMUNIDAD_04"
    },
    {
      title: "Video Comunidad 05",
      thumbnail: "assets/community/community-05.jpg",
      video: "assets/community/community-05.mp4",
      url: "CAMBIAR_AQUI_LINK_VIDEO_COMUNIDAD_05"
    },
    {
      title: "Video Comunidad 06",
      thumbnail: "assets/community/community-06.jpg",
      video: "assets/community/community-06.mp4",
      url: "CAMBIAR_AQUI_LINK_VIDEO_COMUNIDAD_06"
    }
  ]
};

const SELECTORS = {
  root: ".page",
  reveal: ".reveal",
  stagger: ".stagger",
  dataBrand: "[data-brand]",
  configImage: "[data-config-image]",
  reelImage: "[data-reel-image]",
  reelCard: ".reel-card",
  communityThumb: "[data-community-thumb]",
  photoCard: ".photo-card",
  statsImage: "[data-stats-image]",
  socialLinks: {
    instagram: "#instagram-link, #instagram-link-2, #instagram-btn",
    tiktok: "#tiktok-link, #tiktok-link-2, #tiktok-btn",
    youtube: "#youtube-link, #youtube-link-2, #youtube-btn",
    email: "#email-link"
  },
  lightbox: {
    root: "#lightbox",
    overlay: ".lightbox__overlay",
    media: "#lightbox-media",
    close: "#lightbox-close",
    title: "#lightbox-title",
    action: "#lightbox-link"
  },
  cardTrigger: "[data-reel-index], [data-modal-type='video'], .photo-card"
};

const ARIA_LABELS = {
  instagram: "Abrir Instagram de Ánimo Cabrones",
  tiktok: "Abrir TikTok de Ánimo Cabrones",
  youtube: "Abrir YouTube de Ánimo Cabrones",
  email: "Enviar correo a Ánimo Cabrones"
};

const INTERACTIVE_CARD_SELECTORS = [".reel-card", ".phone-mockup", ".community-card", ".photo-card"];
const REDUCED_MOTION_QUERY = window.matchMedia("(prefers-reduced-motion: reduce)");
const PLACEHOLDER_LINK_PREFIX = "CAMBIAR_AQUI";

const selectOne = (selector, parent = document) => parent.querySelector(selector);
const selectAll = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

function setBrandContent() {
  selectAll(SELECTORS.dataBrand).forEach((node) => {
    const key = node.dataset.brand;
    if (CONFIG.brand[key]) node.textContent = CONFIG.brand[key];
  });
}

function setupSocialLinks() {
  const linkMap = [
    [SELECTORS.socialLinks.instagram, CONFIG.links.instagram, ARIA_LABELS.instagram],
    [SELECTORS.socialLinks.tiktok, CONFIG.links.tiktok, ARIA_LABELS.tiktok],
    [SELECTORS.socialLinks.youtube, CONFIG.links.youtube, ARIA_LABELS.youtube],
    [SELECTORS.socialLinks.email, CONFIG.links.email, ARIA_LABELS.email]
  ];

  linkMap.forEach(([selector, url, label]) => {
    selectAll(selector).forEach((anchor) => {
      anchor.href = url;
      anchor.setAttribute("aria-label", label);
    });
  });
}

function getFallbackLabel(mediaElement, defaultLabel) {
  return mediaElement.dataset.fallbackLabel || mediaElement.alt || defaultLabel;
}

function showFrameFallback(frame, labelText, type = "image") {
  frame.classList.add("frame--missing");
  const existingFallback = selectOne(".asset-fallback", frame);
  if (existingFallback) {
    const textNode = selectOne(".asset-fallback__text", existingFallback);
    if (textNode) textNode.textContent = labelText;
    return;
  }

  const fallback = createElement("div", "asset-fallback");
  fallback.setAttribute("role", "status");
  fallback.setAttribute("aria-live", "polite");
  fallback.setAttribute("aria-label", `${type === "video" ? "Video" : "Imagen"} pendiente`);

  const icon = createElement("span", "asset-fallback__icon", "✚");
  icon.setAttribute("aria-hidden", "true");
  const title = createElement(
    "p",
    "asset-fallback__title",
    type === "video" ? "VIDEO PENDIENTE" : "IMAGEN PENDIENTE"
  );
  const text = createElement("p", "asset-fallback__text", labelText);

  fallback.append(icon, title, text);
  frame.appendChild(fallback);
}

function disablePlayButton(frame) {
  const playButton = selectOne(".play-button", frame);
  if (!playButton) return;
  playButton.disabled = true;
  playButton.classList.add("is-disabled");
  playButton.setAttribute("aria-disabled", "true");
  playButton.setAttribute("aria-label", "Video pendiente");
}

function attachImageFallback(imageElement, options = {}) {
  const { type = "image", disablePlayOnError = false } = options;
  const frame = imageElement.closest(".placeholder-frame");
  if (!frame) return;

  const fallbackLabel = getFallbackLabel(imageElement, type === "video" ? "Video pendiente" : "Imagen pendiente");
  const onError = () => {
    imageElement.classList.add("is-missing");
    imageElement.removeAttribute("src");
    imageElement.alt = `${fallbackLabel}. Archivo no disponible.`;
    showFrameFallback(frame, fallbackLabel, type);
    if (disablePlayOnError) disablePlayButton(frame);
  };

  imageElement.addEventListener("error", onError, { once: true });
  const currentSource = imageElement.getAttribute("src");
  if (!currentSource || (imageElement.complete && imageElement.naturalWidth === 0)) onError();
}

function setupImageLoadingAttributes() {
  selectAll("img:not([loading])").forEach((imageElement) => {
    const shouldPrioritize = imageElement.dataset.priority === "high";
    imageElement.loading = shouldPrioritize ? "eager" : "lazy";
    imageElement.decoding = "async";
    if (shouldPrioritize) imageElement.fetchPriority = "high";
  });
}

function renderConfigImages() {
  selectAll(SELECTORS.configImage).forEach((imageElement) => {
    const key = imageElement.dataset.configImage;
    if (CONFIG.images[key]) imageElement.src = CONFIG.images[key];
    attachImageFallback(imageElement);
  });

  const statsImage = selectOne(SELECTORS.statsImage);
  if (statsImage && CONFIG.images.statsMain) {
    statsImage.src = CONFIG.images.statsMain;
    attachImageFallback(statsImage);
  }
}

function renderReels() {
  selectAll(SELECTORS.reelImage).forEach((imageElement) => {
    const index = Number(imageElement.dataset.reelImage);
    const reelItem = CONFIG.reels[index];
    if (!reelItem) return;

    imageElement.src = reelItem.image;
    imageElement.alt = reelItem.title;
    imageElement.dataset.fallbackLabel = reelItem.title;
    attachImageFallback(imageElement);

    const card = imageElement.closest(SELECTORS.reelCard);
    const footer = card ? selectOne("footer", card) : null;
    if (footer) {
      footer.innerHTML = `<strong>${reelItem.views} vistas</strong><span>${reelItem.interactions} interacciones</span>`;
    }
  });
}

function renderCommunityVideos() {
  selectAll(SELECTORS.communityThumb).forEach((imageElement) => {
    const index = Number(imageElement.dataset.communityThumb);
    const videoItem = CONFIG.communityVideos[index];
    if (!videoItem) return;

    imageElement.src = videoItem.thumbnail;
    imageElement.alt = videoItem.title;
    imageElement.dataset.fallbackLabel = videoItem.title;
    attachImageFallback(imageElement, { type: "video", disablePlayOnError: true });
  });
}

function renderPhotos() {
  selectAll(".photo-card").forEach((card, index) => {
    const photoItem = CONFIG.photos[index];
    const imageElement = selectOne("img", card);
    if (!photoItem || !imageElement) return;
    imageElement.src = photoItem.image;
    imageElement.alt = photoItem.title;
    imageElement.dataset.fallbackLabel = photoItem.title;
    attachImageFallback(imageElement);
  });
}

function setupInteractiveCards() {
  INTERACTIVE_CARD_SELECTORS.forEach((selector) => {
    selectAll(selector).forEach((card) => {
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      const label = card.dataset.a11yLabel || card.textContent.trim().slice(0, 90);
      card.setAttribute("aria-label", `Abrir contenido: ${label}`);
    });
  });
}

function setupScrollAnimations() {
  const revealElements = selectAll(SELECTORS.reveal);
  const staggerGroups = selectAll(SELECTORS.stagger);

  staggerGroups.forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      child.style.setProperty("--stagger-index", index);
    });
  });

  if (REDUCED_MOTION_QUERY.matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupLightbox() {
  const lightboxRoot = selectOne(SELECTORS.lightbox.root);
  const lightboxOverlay = selectOne(SELECTORS.lightbox.overlay, lightboxRoot);
  const lightboxMedia = selectOne(SELECTORS.lightbox.media, lightboxRoot);
  const lightboxTitle = selectOne(SELECTORS.lightbox.title, lightboxRoot);
  const lightboxAction = selectOne(SELECTORS.lightbox.action, lightboxRoot);
  const lightboxClose = selectOne(SELECTORS.lightbox.close, lightboxRoot);
  const pageRoot = selectOne(SELECTORS.root);
  let lastFocusedElement = null;

  function isConfiguredUrl(url) {
    if (!url) return false;
    if (url === "#") return false;
    return !url.startsWith(PLACEHOLDER_LINK_PREFIX);
  }

  function closeLightbox() {
    lightboxRoot.classList.remove("is-open");
    lightboxRoot.setAttribute("aria-hidden", "true");
    pageRoot.removeAttribute("inert");
    lightboxMedia.innerHTML = "";
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function createMediaFallback(titleText, type) {
    const fallback = createElement("div", "lightbox-fallback");
    const pendingText = type === "video" ? "VIDEO PENDIENTE" : "IMAGEN PENDIENTE";
    fallback.innerHTML = `<span aria-hidden="true">✚</span><p>${pendingText}</p><p>${titleText}</p>`;
    return fallback;
  }

  function openLightbox(payload, triggerElement) {
    lastFocusedElement = triggerElement || document.activeElement;
    lightboxMedia.innerHTML = "";
    lightboxTitle.textContent = payload.title || "Vista de contenido";

    if (isConfiguredUrl(payload.url)) {
      lightboxAction.href = payload.url;
      lightboxAction.hidden = false;
    } else {
      lightboxAction.href = "#";
      lightboxAction.hidden = true;
    }

    if (payload.type === "video") {
      const videoElement = createElement("video");
      videoElement.src = payload.video;
      videoElement.controls = true;
      videoElement.playsInline = true;
      videoElement.preload = "metadata";
      videoElement.setAttribute("aria-label", payload.title || "Video de contenido");
      videoElement.addEventListener(
        "error",
        () => {
          lightboxMedia.innerHTML = "";
          lightboxMedia.appendChild(createMediaFallback(payload.title || "Video", "video"));
        },
        { once: true }
      );
      lightboxMedia.appendChild(videoElement);
    } else {
      const imageElement = createElement("img");
      imageElement.src = payload.image;
      imageElement.alt = payload.title || "Contenido";
      imageElement.loading = "eager";
      imageElement.decoding = "async";
      imageElement.addEventListener(
        "error",
        () => {
          lightboxMedia.innerHTML = "";
          lightboxMedia.appendChild(createMediaFallback(payload.title || "Imagen", "image"));
        },
        { once: true }
      );
      lightboxMedia.appendChild(imageElement);
    }

    lightboxRoot.classList.add("is-open");
    lightboxRoot.setAttribute("aria-hidden", "false");
    pageRoot.setAttribute("inert", "");
    lightboxClose.focus();
  }

  function openCardFromElement(cardElement) {
    if (!cardElement) return;

    if (cardElement.matches(SELECTORS.reelCard)) {
      const reelItem = CONFIG.reels[Number(cardElement.dataset.reelIndex)];
      if (!reelItem) return;
      openLightbox(
        {
          type: "image",
          title: reelItem.title,
          image: reelItem.image,
          url: reelItem.url
        },
        cardElement
      );
      return;
    }

    if (cardElement.matches(".photo-card")) {
      const photoImage = selectOne("img", cardElement);
      if (!photoImage || photoImage.classList.contains("is-missing")) return;
      openLightbox(
        {
          type: "image",
          title: photoImage.alt || "Foto",
          image: photoImage.currentSrc || photoImage.src,
          url: photoImage.currentSrc || photoImage.src
        },
        cardElement
      );
      return;
    }

    if (cardElement.matches("[data-modal-type='video']")) {
      const index = Number(cardElement.dataset.communityIndex);
      const videoItem = CONFIG.communityVideos[index];
      if (!videoItem) return;
      const frame = selectOne(".placeholder-frame", cardElement);
      if (frame?.classList.contains("frame--missing")) return;
      openLightbox(
        {
          type: "video",
          title: videoItem.title,
          video: videoItem.video,
          url: videoItem.url
        },
        cardElement
      );
    }
  }

  document.addEventListener("click", (event) => {
    const triggerCard = event.target.closest(SELECTORS.cardTrigger);
    if (triggerCard) {
      openCardFromElement(triggerCard);
      return;
    }
    if (event.target === lightboxOverlay || event.target === lightboxClose) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    const isLightboxOpen = lightboxRoot.classList.contains("is-open");
    if (event.key === "Escape" && isLightboxOpen) {
      closeLightbox();
      return;
    }

    if (!["Enter", " "].includes(event.key)) return;
    const triggerCard = event.target.closest(SELECTORS.cardTrigger);
    if (!triggerCard) return;
    event.preventDefault();
    openCardFromElement(triggerCard);
  });
}

function initializeLandingV2() {
  setBrandContent();
  setupSocialLinks();
  setupImageLoadingAttributes();
  renderConfigImages();
  renderReels();
  renderCommunityVideos();
  renderPhotos();
  setupInteractiveCards();
  setupScrollAnimations();
  setupLightbox();
}

document.addEventListener("DOMContentLoaded", initializeLandingV2);
