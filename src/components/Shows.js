import getGenres from '../utils/getGenre';

export const Shows = async (movies) => {
  const template = movies.slice(0, 12).map(
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
  return template;
};
