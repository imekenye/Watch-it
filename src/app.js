import './utils/import-jquery';
import { getPopular, getNews } from './api';
import { Shows, Tickets, News, Modal } from './components';
import animation from './utils/animation';
import './scss/app.scss';

$(function () {
  const linkShows = $('#link-show'),
    linkNews = $('#link-news'),
    linkTicket = $('#link-ticket'),
    heroBtn = $('#hero-btn'),
    shows = $('#shows'),
    newsContent = $('#news__content'),
    ticketMovies = $('#ticket__movies');

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

    // Ticket form validation

    $('#form-ticket').submit((e) => {
      if (!$('#ticketMovie-checkbox').is(':checked')) {
        $('.error-checkbox').html(`*Choose movie please`);
        e.preventDefault();
      } else {
        $('.error-checkbox').html('');
        console.log(e.target);
      }
    });

    // Mobile Responsiveness

    $('.hamburger__menu,#link-show,#link-news,#link-ticket').click(async () => {
      if ($(window).width() <= 768) {
        await $('#nav').toggleClass('h-100');
        $('.nav-container').toggleClass('mobile');
      }
    });
  };
  // init app
  app();
});
