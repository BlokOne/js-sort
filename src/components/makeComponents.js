// создаем объекты и их передаем на страницу 

const articlesWrapper = document.querySelector('.offers__articles'),
  listWrapper = document.querySelector(".categories__links");

export function createArticle(article) {
  const { author, description, data, title, link } = article;
  const item = document.createElement("div");
  item.classList.add("offers__article");
  item.classList.add("article");
  item.innerHTML = `
              <a href="${link}" target="_ blank"">
                <div class="article__date">${data}</div>
                <div class="article__title">${title}</div>
                <div class="article__description">
                  ${description}
                </div>
                <div class="article__author">${author}</div>
              </a>
  `
  return item
}

export function pushArticles(articles, params) {
  const items = document.createDocumentFragment();
  if (params) {

  } else {
    articles.forEach((__, index) => {
      const item = createArticle(articles[index]);
      items.append(item);
    })
  }
  articlesWrapper.append(items)
}

export function createAuthors(author) {
  const item = document.createElement("li");
  item.classList.add("categories__link");
  item.textContent = author;
  return item
}

export function pushAuthors(authors) {
  const items = document.createDocumentFragment();
  authors.forEach((__, index) => {
    const item = createAuthors(authors[index]);
    items.append(item);
  })
  listWrapper.append(items)
}

