import moment from 'moment';

export const News = (news) => {
  const template = news.map(
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
          } target="_blank">Read Article</a></button>
        </div>
        `
  );

  return template;
};
