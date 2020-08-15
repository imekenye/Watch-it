require('dotenv').config();
import './import-jquery';
import moment from 'moment';
import { getPopular, fetchTrailer, getNews } from './api';
import genres from './genres';

const linkShows = document.getElementById('link-show');
const linkNews = document.getElementById('link-news');
const linkTicket = document.getElementById('link-ticket');
const heroBtn = document.getElementById('hero-btn');
const overlay = document.getElementById('overlay');
const newsContent = $('#news__content');

/***************** Display movies *******************/

$(document).ready(function () {
  const shows = $('#shows');

  // get movie genres
  const getGenres = (val) => {
    let gen = [];
    val.map((el) => {
      genres.find((e) => (e.id === el ? gen.push(e.name) : null));
    });
    return gen.slice(0, 2).toString();
  };

  getPopular().then((movies) => {
    const movieBlock = movies.slice(0, 12).map(
      (movie) =>
        movie.poster_path &&
        `
      <div class="shows__movie">
        <img id="movie" src=https://image.tmdb.org/t/p/w500/${
          movie.poster_path
        } data-movie-id=${movie.id} />
        <h3>${
          movie.title.length >= 10
            ? movie.title.substr(0, 15) + ' ...'
            : movie.title
        }</h3>
        <p>${getGenres(movie.genre_ids)}</p>
      </div>
      `
    );
    shows.append(movieBlock);
  });

  /***************** Append movies in ticket section *******************/

  getPopular().then((movies) => {
    const ticketMovies = movies.slice(0, 12).map(
      (movie) =>
        movie.poster_path &&
        `
      <div class="ticket__movie">
            <input type="checkbox" />
            <div class="ticket__movie-img">
             <img id="movie" src=https://image.tmdb.org/t/p/w500/${
               movie.poster_path
             } data-movie-id=${movie.id} />
            </div>
            <div class="ticket__movie-text">
              <h3>${
                movie.title.length >= 10
                  ? movie.title.substr(0, 15) + ' ...'
                  : movie.title
              }</h3>
              <p>Date: Aug 05</p>
              <p>Time: 6:00 pm</p>
            </div>
      </div>
      `
    );
    $('#ticket__movies').append(ticketMovies);
  });

  /***************** Append news *******************/

  getNews().then((news) => {
    const newsBlock = news.map(
      (news) =>
        news.urlToImage &&
        `
        <div class="card">
          
          <div class="card__image">
            <img
              src=${news.urlToImage}
              alt=""
              
            />
          </div>

          <div class="card__body">
            <p>${moment(news.publishedAt).format('MMM Do YY')} | <span>${
          news.author
        }</span></p>
            <h3>
              ${
                news.title.length >= 10
                  ? news.title.substr(0, 45) + ' ...'
                  : news.title
              }
            </h3>
            <div class="card__content">
              <p>
                ${news.description}
              </p>
            </div>
          </div>

          <button class="card__button"><a href=${
            news.url
          }>Read Article</a></button>
        </div>
        `
    );
    newsContent.append(newsBlock);
  });
});

/***************** Trailer Modal *******************/

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

/***************** Scrollto animation *******************/

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

/***************** Scroll trigger animation *******************/

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

/***************** Header animation *******************/

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
