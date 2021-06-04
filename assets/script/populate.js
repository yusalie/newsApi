let popCard = document.getElementById("articles");
let popCard2 = document.getElementById("articles2");
let popCard3 = document.getElementById("articles3");
let popCard4 = document.getElementById("articles4");
let popCard5 = document.getElementById("articles5");
let popCard6 = document.getElementById("articles6");
let option = document.getElementById("dropdown").value;
let countryOpt = document.getElementById("countDrop").value

function populate() {
    //assigned variable for api key
    const key = "&apiKey=e9812236a72c43d6855eda46082ae0d8"
    //link for the api to query
    const link = "cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?"
    const country = "country=" + countryOpt
    const category = "&category=" + option
    const url = link + country + category + key
    const request = new Request(url);
    fetch(request,{
        mode: "cors",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Origin': 'https://zen-thompson-80ff85.netlify.app',
             'Access-Control-Allow-Methods': 'GET',
        }
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
          <img src=${JSON.stringify(article.articles[0].urlToImage)} alt=${JSON.stringify(article.articles[0].title)} id="popCard"/>
          <p>${JSON.stringify(article.articles[0].description)}</p>
          <a href=${JSON.stringify(article.articles[0].url)} target="_blank">Read full article</a>
        </div>`;
      let popArt2 = ` <div class="art">
      <h1>${JSON.stringify(article.articles[1].title)}</h1>
      <h2>${JSON.stringify(article.articles[1].author)}</h2>
      <img src=${JSON.stringify(article.articles[1].urlToImage)} alt=${JSON.stringify(article.articles[1].title)} id="popCard"/>
      <p>${JSON.stringify(article.articles[1].description)}</p>
      <a href=${JSON.stringify(article.articles[1].url)} target="_blank">Read full article</a>
    </div>`;
    let popArt3=`<div class="art">
    <h1>${JSON.stringify(article.articles[2].title)}</h1>
    <h2>${JSON.stringify(article.articles[2].author)}</h2>
    <img src=${JSON.stringify(article.articles[2].urlToImage)} alt=${JSON.stringify(article.articles[2].title)} id="popCard"/>
    <p>${JSON.stringify(article.articles[2].description)}</p>
    <a href=${JSON.stringify(article.articles[2].url)} target="_blank">Read full article</a>
  </div>`;
  let popArt4 = `<div class="art">
  <h1>${JSON.stringify(article.articles[3].title)}</h1>
  <h2>${JSON.stringify(article.articles[3].author)}</h2>
  <img src=${JSON.stringify(article.articles[3].urlToImage)} alt=${JSON.stringify(article.articles[3].title)} id="popCard"/>
  <p>${JSON.stringify(article.articles[3].description)}</p>
  <a href=${JSON.stringify(article.articles[3].url)} target="_blank">Read full article</a>
</div>`;
let popArt5 =`<div class="art">
<h1>${JSON.stringify(article.articles[4].title)}</h1>
<h2>${JSON.stringify(article.articles[4].author)}</h2>
<img src=${JSON.stringify(article.articles[4].urlToImage)} alt=${JSON.stringify(article.articles[4].title)} id="popCard"/>
<p>${JSON.stringify(article.articles[4].description)}</p>
<a href=${JSON.stringify(article.articles[4].url)} target="_blank">Read full article</a>
</div>
`;
let popArt6 =`<div class="art">
<h1>${JSON.stringify(article.articles[5].title)}</h1>
<h2>${JSON.stringify(article.articles[5].author)}</h2>
<img src=${JSON.stringify(article.articles[5].urlToImage)} alt=${JSON.stringify(article.articles[5].title)} id="popCard"/>
<p>${JSON.stringify(article.articles[5].description)}</p>
<a href=${JSON.stringify(article.articles[5].url)} target="_blank">Read full article</a>
</div>
`;
      popCard.innerHTML = popArt;
      popCard2.innerHTML = popArt2
      popCard3.innerHTML = popArt3
      popCard4.innerHTML = popArt4
      popCard5.innerHTML = popArt5
      popCard6.innerHTML = popArt6
        })
}
