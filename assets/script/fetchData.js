function getArticles() {
    let x = document.getElementById('information').innerHTML;

    fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=bitcoin&apiKey=e9812236a72c43d6855eda46082ae0d8')
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
        })
}