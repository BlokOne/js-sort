import { pushDate } from "./makeComponents";
import AirDatepicker from 'air-datepicker';


const authorsSet = document.querySelector('.category__authors');
const listAuthors = document.querySelector('.category__authors-links');
let store = [];
let filteredStore = [];
let sortByDateFrom = "";
let sortByDateTo = "";

// Обновляем данные
const upDate = async () => {
  if (!store.length) {
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
      if (!writer) {
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
  authorsSet.classList.toggle('active');
  document.querySelector('.category__authors-links').classList.toggle('active');
}

// Добавляем слушатель на имена 
authorsSet.addEventListener('click', pickName)
function pickName(e) {
  changeClass()
  if (e.target.classList.contains('categories__link')) {
    filterByName(e.target.innerText)
    document.getElementById("name-author").innerText = `${e.target.innerText}`
  }
}


// Фильтрация по имени 

function filterByName(name) {
  if (name === 'Все авторы') {
    filteredStore = [];
    filterByTime()
  } else {
    filteredStore = store.filter(article => article.author === name)
    filterByTime()
  }
}

// Фильтрация по времени (выполняем всегда(либо время указано, либо от 1970года до сегодня))

function filterByTime() {
  let from = sortByDateFrom;
  let to = sortByDateTo;
  if (from === "") {
    from = 1
  }
  if (to === "") {
    to = Date.parse(new Date())
  }
  if (!filteredStore.length) {
    let FilteredFrom = store.filter(article => Date.parse(new Date(article.date)) > from)
    let FilteredFromAndTo = FilteredFrom.filter(article => Date.parse(new Date(article.date)) < to)
    pushDate(FilteredFromAndTo)
  } else if (filteredStore.length) {
    let FilteredFrom = filteredStore.filter(article => Date.parse(new Date(article.date)) > from)
    let FilteredFromAndTo = FilteredFrom.filter(article => Date.parse(new Date(article.date)) < to)
    pushDate(FilteredFromAndTo)
  }
}

// Создаем два календаря, откуда и будем получать даты

new AirDatepicker('.category__date-input-from', {
  autoClose: true,
  position: 'bottom left ',
  onSelect({ date }) {
    let timeFrom = Date.parse(date)
    sortByDateFrom = timeFrom;
    filterByTime()
  }
})

new AirDatepicker('.category__date-input-to', {
  autoClose: true,
  position: 'bottom right',
  onSelect({ date }) {
    let timeTo = Date.parse(date)
    sortByDateTo = timeTo;
    filterByTime()
  }
})



