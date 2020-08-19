import fetchTrailer from '../api/fetchTrailer';

const Modal = () => {
  document.addEventListener('click', (e) => {
    const movieId = e.target.dataset.movieId;
    if (e.target.tagName.toLowerCase() === 'img') {
      fetchTrailer(movieId).then((data) => {
        const trailer = `<iframe src="https://www.youtube.com/embed/${data[0].key}" frameborder="0"></iframe>`;
        overlay.innerHTML = trailer;
        overlay.removeAttribute('hidden');
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = 'no';
      });
    }

    if (e.target.id === 'overlay') {
      overlay.setAttribute('hidden', true);
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = 'yes';
    }
  });
};

export default Modal;
