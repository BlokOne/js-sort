
let store = [];


const fetchData = async () => {
  try {
    const result = await fetch(`https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc`)
    const data = await result.json();
    const articles = data.articles;
    console.log(articles)
    articles.map((article, id, array) => {
      const { author, description, publishedAt, title, url } = article;
      store.push({
        author: author,
        description: description,
        data: publishedAt,
        title: title,
        link: url
      })
    })
    console.log(store)
  }
  catch (error) {
    console.log(error)
  }
}


fetchData()


// author: "n-tv NACHRICHTEN"
// content: "Twitter scheint nun doch nicht mehr so abgeneigt, an Elon Musk zu verkaufen. Das berichten zumindest mehrere US-Medien. Nachdem der Tech-Milliardär vor einigen Tagen neue Finanzierungszusagen präsent… [+2223 chars]"
// description: "Twitter scheint nun doch nicht mehr so abgeneigt, an  Elon Musk zu verkaufen. Das berichten zumindest mehrere US-Medien. Nachdem der Tech-Milliardär vor einigen Tagen neue Finanzierungszusagen präsentiert, sollen jetzt bereits Verhandlungen laufen."
// publishedAt: "2022-04-25T05:33:43Z"
// source: {id: null, name: 'N-tv.de'}
// title: "Verhandlungen laufen: Twitter soll sich mit Musk-Übernahme anfreunden"
// url: "https://www.n-tv.de/wirtschaft/Twitter-soll-sich-mit-Musk-Ubernahme-anfreunden-article23287307.html"
// urlToImage: "https://bilder3.n-tv.de/img/incoming/crop23287306/073132179-cImg_16_9-w1200/283700215.jpg"