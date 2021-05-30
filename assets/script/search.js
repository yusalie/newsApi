let searchBar = document.getElementById("searchBar");

function search() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const key = "&apiKey=e9812236a72c43d6855eda46082ae0d8"
    const link = "https://newsapi.org/v2/everything?q="
    const url = proxyUrl + link + searchBar.value + key
    const request = new Request(url);
    console.log(searchBar.value);
    console.log(request)
    fetch(request)
        .then(resp => resp.json())
        .then((articles) => { console.log(articles); return articles; })
        .then((articles) => {
            for (let i = 0; i < articles.length; i++) {
                console.log(articles[i])
                document.getElementById("articles").innerHTML += articles;
            }
        });
}

function createArt(articles) {
    let book = `
        <div class="art">
          <h4>${articles.author}</h4>
          <img src=${articles.urlToImage} alt=${articles.title} id="articleCard"/>
        </div>
      `;
}