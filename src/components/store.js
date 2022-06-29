import { pushDate } from "./makeComponents"

const categoryAuthors = document.querySelector('.categories__authors'),
  authorsSet = document.querySelector(".categories__selected-authors");

let store = [];

// Обновляем данные
const upDate = async () => {
  if (!store.length > 0) {
    await fetchData().then((value) => {
      const { store } = value;
      pushDate(store);
    });
  }
  else {
    pushDate(store);
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
        date: publishedAt,
        title: title,
        link: url
      })
    })
    return { store }
  }
  catch (error) {
    console.log(error)
  }
}

upDate()

//Добавляем функции в селект и фильтрацию по авторам

function changeClass() {
  document.querySelector('.categories__selected-authors').classList.toggle('active');
  document.querySelector('.categories__links').classList.toggle('active');
  document.querySelector('.body').classList.toggle('active');
}


categoryAuthors.addEventListener('click', (e) => {
  changeClass();

})






