const Tickets = async (movies) => {
  const template = movies.slice(0, 12).map(
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
  return template;
};

export default Tickets;
