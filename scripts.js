const CONFIG = {
  brand: {
    email: "hola@animocabrones.com",
    location: "GDL, JAL",
    handle: "@animocabrones"
  },
  links: {
    instagram: "CAMBIAR_AQUI_LINK_INSTAGRAM",
    tiktok: "CAMBIAR_AQUI_LINK_TIKTOK",
    youtube: "CAMBIAR_AQUI_LINK_YOUTUBE",
    email: "mailto:hola@animocabrones.com"
  },
  images: {
    faceMain: "assets/faces/rostro-principal.png",
    faceGlasses: "assets/faces/rostro-lentes.png",
    heroMain: "assets/hero/imagen-principal.jpg",
    finalPhoto: "assets/final/foto-final.jpg"
  },
  reels: [
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

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function bindBrandData() {
  $$("[data-brand]").forEach((node) => {
    const key = node.dataset.brand;
    if (CONFIG.brand[key]) node.textContent = CONFIG.brand[key];
  });
}

function bindLinks() {
  const map = [
    ["#instagram-link", CONFIG.links.instagram],
    ["#instagram-link-2", CONFIG.links.instagram],
    ["#instagram-btn", CONFIG.links.instagram],
    ["#tiktok-link", CONFIG.links.tiktok],
    ["#tiktok-link-2", CONFIG.links.tiktok],
    ["#tiktok-btn", CONFIG.links.tiktok],
    ["#youtube-link", CONFIG.links.youtube],
    ["#youtube-link-2", CONFIG.links.youtube],
    ["#youtube-btn", CONFIG.links.youtube],
    ["#email-link", CONFIG.links.email]
  ];

  map.forEach(([selector, value]) => {
    const element = $(selector);
    if (element) element.href = value;
  });
}

function bindImages() {
  const handleMissingImage = (img) => {
    img.addEventListener("error", () => img.classList.add("is-missing"), { once: true });
  };

  $$("[data-config-image]").forEach((img) => {
    const key = img.dataset.configImage;
    if (CONFIG.images[key]) img.src = CONFIG.images[key];
    handleMissingImage(img);
  });

  $$("[data-reel-image]").forEach((img) => {
    const index = Number(img.dataset.reelImage);
    const reel = CONFIG.reels[index];
    if (!reel) return;
    img.src = reel.image;
    img.alt = reel.title;
    handleMissingImage(img);
    const card = img.closest(".reel-card");
    const footer = $("footer", card);
    if (footer) footer.innerHTML = `<strong>${reel.views} views</strong><span>${reel.interactions} interacciones</span>`;
  });

  $$("[data-community-thumb]").forEach((img) => {
    const index = Number(img.dataset.communityThumb);
    const item = CONFIG.communityVideos[index];
    if (!item) return;
    img.src = item.thumbnail;
    img.alt = item.title;
    handleMissingImage(img);
  });

  $$(".photo-card img").forEach((img) => handleMissingImage(img));
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.2 }
  );

  $$(".reveal").forEach((section) => observer.observe(section));
}

function setupLightbox() {
  const lightbox = $("#lightbox");
  const mediaContainer = $("#lightbox-media");
  const closeBtn = $("#lightbox-close");
  const actionLink = $("#lightbox-link");
  let lastFocus = null;

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    mediaContainer.innerHTML = "";
    if (lastFocus) lastFocus.focus();
  };

  const openLightbox = (payload) => {
    lastFocus = document.activeElement;
    mediaContainer.innerHTML = "";
    actionLink.href = payload.url || "#";

    if (payload.type === "video") {
      const video = document.createElement("video");
      video.src = payload.video;
      video.controls = true;
      video.playsInline = true;
      mediaContainer.appendChild(video);
    } else {
      const image = document.createElement("img");
      image.src = payload.image;
      image.alt = payload.title || "Contenido";
      mediaContainer.appendChild(image);
    }

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    closeBtn.focus();
  };

  $$(".reel-card").forEach((card) => {
    card.addEventListener("click", () => {
      const reel = CONFIG.reels[Number(card.dataset.reelIndex)];
      if (!reel) return;
      openLightbox({ type: "image", image: reel.image, url: reel.url, title: reel.title });
    });
  });

  $$(".photo-card").forEach((card) => {
    card.addEventListener("click", () => {
      const image = $("img", card);
      if (!image || image.classList.contains("is-missing")) return;
      openLightbox({
        type: "image",
        image: image.currentSrc || image.src,
        url: image.currentSrc || image.src,
        title: image.alt || "Foto"
      });
    });
  });

  $$("[data-modal-type='video']").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".play-button") || !event.target.closest("a")) {
        const item = CONFIG.communityVideos[Number(card.dataset.communityIndex)];
        if (!item) return;
        openLightbox({
          type: "video",
          video: item.video,
          url: item.url,
          title: item.title
        });
      }
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-lightbox='true']")) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindBrandData();
  bindLinks();
  bindImages();
  setupRevealAnimations();
  setupLightbox();
});
