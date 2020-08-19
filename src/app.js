import './utils/import-jquery';
import getPopular from './api/getPopular';
import './scss/app.scss';
import Shows from './components/Shows';
import Tickets from './components/Tickets';
import getNews from './api/getNews';
import News from './components/News';
import Modal from './components/Modal';
import animation from './utils/animation';

$(function () {
  const linkShows = $('#link-show');
  const linkNews = $('#link-news');
  const linkTicket = $('#link-ticket');
  const heroBtn = $('#hero-btn');
  const overlay = $('#overlay');
  const shows = $('#shows');
  const newsContent = $('#news__content');
  const ticketMovies = $('#ticket__movies');

  const app = async () => {
    animation(gsap);
    /***************** Scrollto animation *******************/

    linkShows.click(() => {
      gsap.to(window, { duration: 2, scrollTo: '#shows' });
    });
    linkNews.click('click', () => {
      gsap.to(window, { duration: 2, scrollTo: '#news' });
    });
    linkTicket.click(() => {
      gsap.to(window, { duration: 2, scrollTo: '#ticket' });
    });
    heroBtn.click(() => {
      gsap.to(window, { duration: 2, scrollTo: '#ticket' });
    });

    /***************** Display movies/shows section *******************/

    const results = await getPopular();
    const showsResult = await Shows(results);
    shows.append(showsResult);

    /*********** Append movies in ticket section ***********/

    const ticketResults = await Tickets(results);
    ticketMovies.append(ticketResults);

    /*********** Append News section ***********/

    const news = await getNews();
    const newsResult = await News(news);
    newsContent.append(newsResult);

    Modal();
  };
  // init app
  app();
});
