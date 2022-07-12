const generalBtn = document.getElementById("general")
const businessBtn = document.getElementById("business")
const sportBtn = document.getElementById("sport")
const entertainmentBtn = document.getElementById("entertainment")
const technologyBtn = document.getElementById("technology")
const searchBtn = document.getElementById("searchBtn")

const newsQuery = document.getElementById("newsQuery")
const newstype = document.getElementById("newstype")
const newsdetails = document.getElementById("newsdetails")

var newsDataArr = []

const API_KEY = "f9664bd55da045f7828004000cb769fb";
const HEADLINES_NEWS = " https://newsapi.org/v2/top-headlines?country=ng&apiKey=";
const GENERAL_NEWS = " https://newsapi.org/v2/top-headlines?country=ng&category=general&apiKey=";
const BUSINESS_NEWS = " https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=";
const SPORTS_NEWS = " https://newsapi.org/v2/top-headlines?country=ng&category=sport&apiKey=";
const ENTERTAINMENT_NEWS = " https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = " https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=";
const SEARCH_NEWS = " https://newsapi.org/v2/everything?q+"



generalBtn.addEventListener("click",function () {
    fetchGeneralNews()
})

businessBtn.addEventListener("click",function () {
    fetchBusinessNews()
})

sportBtn.addEventListener("click",function () {
    fetchSportNews()
})

entertainmentBtn.addEventListener("click",function () {
    fetchEntertainmentNews()
})

technologyBtn.addEventListener("click",function () {
    fetchTechnologyNews()
})

searchBtn.addEventListener("click",function () {
    fetchQueryNews()
})

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY)
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        // errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY)
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        // errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchSportNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY)
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        // errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY)
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        // errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY)
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        // errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
    return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apikey+"+API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        // errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    if(newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5>no data found</h5>"
        return;
    }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement(`div`);
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement(`div`);
        card.className = "p-2";

        var image = document.createElement(`img`);
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","100%");
        image.src=news.urlToImage

        var cardBody = document.createElement(`div`);

        var newsHeading = document.createElement(`h5`);
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement(`h6`);
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var description
    })
}