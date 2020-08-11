// scroll to animation

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const linkShows = document.getElementById('link-show');
const linkNews = document.getElementById('link-news');
const linkTicket = document.getElementById('link-ticket');
const heroBtn = document.getElementById('hero-btn');

linkShows.addEventListener('click', () => {
  gsap.to(window, { duration: 2, scrollTo: '#shows' });
});
linkNews.addEventListener('click', () => {
  gsap.to(window, { duration: 2, scrollTo: '#news' });
});
linkTicket.addEventListener('click', () => {
  gsap.to(window, { duration: 2, scrollTo: '#ticket' });
});
heroBtn.addEventListener('click', () => {
  gsap.to(window, { duration: 2, scrollTo: '#ticket' });
});

// scroll trigger animations
gsap.fromTo(
  '#shows',
  {
    scrollTrigger: '#shows',
    x: 500,
    opacity: 0,
  },
  { scrollTrigger: '#shows', x: 0, opacity: 1, duration: 1.5 }
);
gsap.fromTo(
  '#ticket',
  {
    scrollTrigger: '#ticket',
    x: -500,
    opacity: 0,
  },
  { scrollTrigger: '#ticket', x: 0, opacity: 1, duration: 1.5 }
);
gsap.fromTo(
  '#news',
  {
    scrollTrigger: '#news',
    x: 500,
    opacity: 0,
  },
  { scrollTrigger: '#news', x: 0, opacity: 1, duration: 1.5 }
);

// hero images animation

gsap.fromTo(
  '.hero__image1',
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2.5,
  }
);
gsap.fromTo(
  '.hero__image2',
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2.5,
  }
);
gsap.fromTo(
  '.hero__image3',
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2.5,
  }
);
gsap.fromTo(
  '.hero__image4',
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 2.5,
  }
);
gsap.fromTo(
  '.hero__image5',
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 2.5,
  }
);
gsap.fromTo(
  '.hero__text',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    delay: 2,
  }
);
// header animation
gsap.fromTo(
  '#header',
  {
    y: -100,

    height: 1000,
  },
  {
    y: 0,

    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
    height: 150,
  }
);
