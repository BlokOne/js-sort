import { pushDate } from "./makeComponents"

const authorsSet = document.querySelector('.category__authors');
const listAuthors = document.querySelector('.category__authors-links');
let store = [];
let filteredStore = [];
let storeFilteredDateAndName = [];
let nameInFilter = "";

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
    console.log(store)
    return { store }
  }
  catch (error) {
    console.log(error)
  }
}

upDate()

//Добавляем функции в селект и фильтрацию по авторам

function changeClass() {
  authorsSet.classList.toggle('active');
  document.querySelector('.category__authors-links').classList.toggle('active');
  // document.querySelector('.body').classList.toggle('active');
}
// changeClass();
// filterName("Unknown");


authorsSet.addEventListener('click', pickName)

function pickName(e) {
  changeClass()
  if (e.target.classList.contains('categories__link')) {
    filterName(e.target.innerText)
  }
}
// Фильтрация по имени 

function filterName(name) {
  if (name == 'Все авторы') {
    filteredStore = [];
    filteredStore = store;
    pushDate(filteredStore);
  } else {
    filteredStore = []
    filteredStore = store.filter(article => article.author === name)
    pushDate(filteredStore);
    nameInFilter = name;
  }

  // if (filteredStore.length == 0) {

  // } else {
  //   let storeFilteredDateAndName = filteredStore.filter(article => article.author === name)
  //   pushDate(storeFilteredDateAndName);
  // }

}






