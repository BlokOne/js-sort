// создаем объекты и отрисовывем на страницу 
import moment from "moment";


const articlesWrapper = document.querySelector('.offers__articles'),
  listWrapper = document.querySelector(".category__authors-links");


export function pushDate(articles) {
  articlesWrapper.innerHTML = "";
  const authors = [];
  articles.forEach((article) => {
    const { author } = article;
    if (authors.indexOf(author) === -1) {
      authors.push(author);
    }
  })
  pushAuthors(authors);
  const items = document.createDocumentFragment();
  articles.forEach((__, index) => {
    const item = createArticle(articles[index]);
    items.append(item);
  })
  articlesWrapper.append(items)
}

function createArticle(article) {
  const { author, description, date, title, link } = article;
  moment.locale('ru')
  const dateFormat = moment(date).utc().format('DD MMMM YYYY')
  const item = document.createElement("div");
  item.classList.add("offers__article");
  item.classList.add("article");
  item.innerHTML = `
              <a href="${link}" target="blank"">
                <div class="article__date">${dateFormat}</div>
                <div class="article__title">${title}</div>
                <div class="article__description">
                  ${description}
                </div>
                <div class="article__author">${author}</div>
              </a>
  `
  return item
}


function createAuthors(author) {
  const item = document.createElement("li");
  item.classList.add("categories__link");
  item.textContent = author;
  return item
}

function pushAuthors(authors) {
  const items = document.createDocumentFragment();
  const item = document.createElement("li");
  item.classList.add("categories__link");
  item.textContent = "Все авторы";
  items.append(item);
  authors.forEach((__, index) => {
    const item = createAuthors(authors[index]);
    items.append(item);
  })
  listWrapper.append(items)
}

