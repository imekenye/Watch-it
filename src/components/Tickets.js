import { displayDates } from '../utils/displayDates';
import { displayTime } from '../utils/displayTime';
export const Tickets = async (movies) => {
  const template = movies.slice(0, 12).map(
    (movie, i) =>
      movie.poster_path &&
      `
      <div class="ticket__movie">
            <input type="checkbox" id="ticketMovie-checkbox"/>
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
              <p>Date: Aug 0${displayDates(i)}</p>
              <p>Time: ${displayTime(i)}:00 pm</p>
            </div>
      </div>
      `
  );
  return template;
};
