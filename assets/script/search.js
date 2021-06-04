
let searchBar = document.getElementById("searchBar");
let articleCard = document.getElementById("articles");
let articleCard2 = document.getElementById("articles2");
let articleCard3 = document.getElementById("articles3");
let articleCard4 = document.getElementById("articles4");
let articleCard5 = document.getElementById("articles5");
let articleCard6 = document.getElementById("articles6");

function search() {
    //if the code does not run you may need to activate the server
    //assigned variable for api key
    const key = "&apiKey=e9812236a72c43d6855eda46082ae0d8"
    //link for the api to query
    const link = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q="
    const from = "&from=2021-05-01"
    const popularity = "sortBy=popularity"
    const url = link + searchBar.value + from + popularity + key
    const request = new Request(url);
    console.log(searchBar.value);
    fetch(request,{
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
    //turns resp into JavaScript object
        .then(resp => resp.json())
        // returns object of the data
        .then((article) => { 
            console.log(article);
            //populates webpage with articles
            //used to create cards
            let popArt = `
        <div class="art">
          <h1>${JSON.stringify(article.articles[0].title)}</h1>
          <h2>${JSON.stringify(article.articles[0].author)}</h2>
          <img src=${JSON.stringify(article.articles[0].urlToImage)} alt=${JSON.stringify(article.articles[0].title)} id="articleCard"/>
          <p>${JSON.stringify(article.articles[0].description)}</p>
          <a href=${JSON.stringify(article.articles[0].url)} target="_blank">Read full article</a>
        </div>`;
      let popArt2 = ` <div class="art">
      <h1>${JSON.stringify(article.articles[1].title)}</h1>
      <h2>${JSON.stringify(article.articles[1].author)}</h2>
      <img src=${JSON.stringify(article.articles[1].urlToImage)} alt=${JSON.stringify(article.articles[1].title)} id="articleCard"/>
      <p>${JSON.stringify(article.articles[1].description)}</p>
      <a href=${JSON.stringify(article.articles[1].url)} target="_blank">Read full article</a>
    </div>`;
    let popArt3=`<div class="art">
    <h1>${JSON.stringify(article.articles[2].title)}</h1>
    <h2>${JSON.stringify(article.articles[2].author)}</h2>
    <img src=${JSON.stringify(article.articles[2].urlToImage)} alt=${JSON.stringify(article.articles[2].title)} id="articleCard"/>
    <p>${JSON.stringify(article.articles[2].description)}</p>
    <a href=${JSON.stringify(article.articles[2].url)} target="_blank">Read full article</a>
  </div>`;
  let popArt4 = `<div class="art">
  <h1>${JSON.stringify(article.articles[3].title)}</h1>
  <h2>${JSON.stringify(article.articles[3].author)}</h2>
  <img src=${JSON.stringify(article.articles[3].urlToImage)} alt=${JSON.stringify(article.articles[3].title)} id="articleCard"/>
  <p>${JSON.stringify(article.articles[3].description)}</p>
  <a href=${JSON.stringify(article.articles[3].url)} target="_blank">Read full article</a>
</div>`;
let popArt5 =`<div class="art">
<h1>${JSON.stringify(article.articles[4].title)}</h1>
<h2>${JSON.stringify(article.articles[4].author)}</h2>
<img src=${JSON.stringify(article.articles[4].urlToImage)} alt=${JSON.stringify(article.articles[4].title)} id="articleCard"/>
<p>${JSON.stringify(article.articles[4].description)}</p>
<a href=${JSON.stringify(article.articles[4].url)} target="_blank">Read full article</a>
</div>
`;
let popArt6 =`<div class="art">
<h1>${JSON.stringify(article.articles[5].title)}</h1>
<h2>${JSON.stringify(article.articles[5].author)}</h2>
<img src=${JSON.stringify(article.articles[5].urlToImage)} alt=${JSON.stringify(article.articles[5].title)} id="articleCard"/>
<p>${JSON.stringify(article.articles[5].description)}</p>
<a href=${JSON.stringify(article.articles[5].url)} target="_blank">Read full article</a>
</div>
`;
      articleCard.innerHTML = popArt;
      articleCard2.innerHTML = popArt2
      articleCard3.innerHTML = popArt3
      articleCard4.innerHTML = popArt4
      articleCard5.innerHTML = popArt5
      articleCard6.innerHTML = popArt6
        })
}
