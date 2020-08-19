import genres from './genres';

const getGenres = (val) => {
  let gen = [];
  val.map((el) => {
    genres.find((e) => (e.id === el ? gen.push(e.name) : null));
  });
  return gen.slice(0, 2).toString();
};

export default getGenres;
