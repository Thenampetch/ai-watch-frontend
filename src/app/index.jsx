// variable

const generalBtn = document.getElementById("general");
const articlesBtn = document.getElementById("articles");
const newsBtn = document.getElementById("news");
const websitesBtn = document.getElementById("websites");
const publicationBtn = document.getElementById("publication");

//array
var newsDataArr =[];

//apis

const API_KEY = "b2d9307e51ac43e68f24b6685bbf4afb";
const HEADLINES = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b2d9307e51ac43e68f24b6685bbf4afb"
const ARTICLES = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b2d9307e51ac43e68f24b6685bbf4afb"
const NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b2d9307e51ac43e68f24b6685bbf4afb"
const WEBSITES = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=b2d9307e51ac43e68f24b6685bbf4afb"
const PUBLICATION = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=b2d9307e51ac43e68f24b6685bbf4afb"

generalBtn.addEventListener("click",function(){
    fetchHeadlineNews();
});

articlesBtn.addEventListener("click",function(){
    fetchArticles();
});

newsBtn.addEventListener("click",function(){
    fetchNews();
});

websitesBtn.addEventListener("click",function(){
    fetchWebsites();
});

publicationBtn.addEventListener("click",function(){
    fetchPublications();
});

const fetchHeadlineNews = async () => {
    const response = await fetch(HEADLINES + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchArticles = async () => {
    const response = await fetch(ARCTICLES + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchNews = async () => {
    const response = await fetch(NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchWebsites = async () => {
    const response = await fetch(WEBSITES + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchPublications = async () => {
    const response = await fetch(PUBLICATION + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

function displayNews() {

    newsdetail.innerHTML = "";

    if(newsDataArr.length == 0) {
        newdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr.forEach(news => {
        var date = news.plubilshedAt.split("T");

        var col = document.createElement('div');
        col.className="col-sm-12 col md-4 col-lg p-2";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","100%");
        image.src = news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dataHeading = documet.createElement('h6');
        dataHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className = "text-muted";
        discription.innerHTML = news.discription;

        var link = document.createElement('a');
        link.className="btn"

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dataHeading);
        cardBody.appendChild(discription);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

    });
}