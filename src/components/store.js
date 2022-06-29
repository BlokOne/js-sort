import { createArticle, pushArticles, createAuthors, pushAuthors } from "./makeComponents"

const category = document.querySelector('.categories__authors'),
  authorsSet = document.querySelector(".categories__selected-authors");

let store = [];
let authors = [];

// Обновляем данные
const upDate = async () => {
  if (!store.length > 0) {
    await fetchData().then((value) => {
      const { store, authors } = value;
      pushArticles(store);
      pushAuthors(authors);
    });
  }
  else {

  }
}

const fetchData = async () => {

  try {
    const result = await fetch(`https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc`)
    const data = await result.json();
    const articles = data.articles;
    articles.map((article) => {
      const { author, description, publishedAt, title, url } = article;
      let writer = author;
      if (writer === null) {
        writer = "Unknown";
      }
      store.push({
        author: writer,
        description: description,
        data: publishedAt,
        title: title,
        link: url
      })
    })
    store.map((article) => {
      const { author } = article;
      if (authors.indexOf(author) == -1) {
        authors.push(author);
      }
    })
    return { store, authors }
  }
  catch (error) {
    console.log(error)
  }
}

upDate()

category.addEventListener('click', upDate)




