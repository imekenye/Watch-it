const animation = (gsap) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /***************** Scroll trigger animation *******************/

  //   gsap.fromTo(
  //     '#shows',
  //     {
  //       scrollTrigger: '#shows',
  //       x: 500,
  //       opacity: 0,
  //     },
  //     { scrollTrigger: '#shows', x: 0, opacity: 1, duration: 1.5 }
  //   );
  //   gsap.fromTo(
  //     '#ticket',
  //     {
  //       scrollTrigger: '#ticket',
  //       x: -500,
  //       opacity: 0,
  //     },
  //     { scrollTrigger: '#ticket', x: 0, opacity: 1, duration: 1.5 }
  //   );
  //   gsap.fromTo(
  //     '#news',
  //     {
  //       scrollTrigger: '#news',
  //       x: 500,
  //       opacity: 0,
  //     },
  //     { scrollTrigger: '#news', x: 0, opacity: 1, duration: 1.5 }
  //   );

  /***************** Hero images animation *******************/

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
};

export default animation;
