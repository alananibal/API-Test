// Shopfy Key
// 01c485862cfdbcbb62874bcada3d5a0b
// Token  
// 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


var entryValue = document.getElementById("entry-value");
var submitBtn = document.getElementById("submit")
// where we are appending the movie Cards
var firstContainer = document.getElementById("displayOneContainer");
// where we are app gifs
var secondContainer = document.getElementById("displayTwoContainer");



var displayTestTwo = function (content) {
        secondContainer.innerHTML = "";
    for (var i = 0; i < content.data.length; i++) {
        console.log(content.data[i].images.downsized.url);
        
        var gifCardEL = document.createElement("div");
        gifCardEL.setAttribute("class", "py-3 container");
        var gifItem = document.createElement("img");
        gifItem.src = content.data[i].images.downsized.url;
        gifItem.setAttribute("style", "max-height: 100px");
        gifCardEL.appendChild(gifItem);
        secondContainer.appendChild(gifCardEL);
    }
};
var displayTestOne = function (data) {
    firstContainer.innerHTML = "";
     
    for (var i = 0; i < 6; i++) {
        // console.log(data.results[i]);
        // console.log(data.results[i].title);
        // console.log(data.results[i].image);
        // console.log(data.results[i].plot);
        // console.log(data.results[i].imDbRating);
        // console.log(data.results[i].stars);
        // console.log(data.results[i].genres);
        // console.log(data.results[i].id)
        if(data.results.length > 0 ){
            // IMBD movie Id
            var movieId = data.results[i].id;
        
             // Movie Wrapper Card
        var movieCard = document.createElement("div");
        movieCard.setAttribute("class", "card py-3 container column is-2");
        

        // Title
        var movieTitle = data.results[i].title;
        var titleEl =  document.createElement("h3");
        titleEl.setAttribute("class", "card-header-title")
        titleEl.textContent = movieTitle;
        
        // Poster
        var moviePoster = data.results[i].image;
        var posterEl = document.createElement("img");
        var posterLinkEl = document.createElement("a");
        posterEl.setAttribute("src", moviePoster);
        posterEl.setAttribute("style", "image is-4by3");
        posterLinkEl.setAttribute("href", "https://www.imdb.com/title/" + movieId);
        posterLinkEl.appendChild(posterEl);

         // plot
        var moviePlot = data.results[i].plot;
        var plotEl = document.createElement("p");
        plotEl.setAttribute("style", "card-content");
        plotEl.textContent = "Plot: " + moviePlot;

        // Stars
        var movieStars = data.results[i].stars;
        var starsEl = document.createElement("p")
        starsEl.textContent = "STARS: " + movieStars;

        // Genres
        var movieGenre = data.results[i].genres;
        var genreEl = document.createElement("p");
        genreEl.setAttribute("style", "card-footer-item");
        genreEl.textContent = "GENRE: " + movieGenre;

        movieCard.appendChild(titleEl);
        movieCard.appendChild(posterLinkEl);
        movieCard.appendChild(plotEl);
        movieCard.appendChild(starsEl);
        movieCard.appendChild(genreEl);
        firstContainer.appendChild(movieCard);
                


        }
    }
};
// Movies Fetching
var getData = function (movie) {
// "movie" is a parameter that you name it
    var imbdUrl = 'https://imdb-api.com/API/AdvancedSearch/k_57knyc4o?title=' + movie + '&title_type=feature';
    console.log(imbdUrl);
    fetch(imbdUrl).then(function (response){
        // 
        response.json().then(function(data){
            console.log(data);
            // Expand this logic to create something else
            if(data.results.length === 0 ){
                console.log("error");
                alert("Please input a Movie Name");

            } else { 
            displayTestOne(data);
            
            }
           
        });
          
    
    });
// Giphy fetching
    var giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T&limit=5';
    console.log(giphyUrl)
    fetch(giphyUrl).then(function (response) {
        response.json().then(function (data) {
        console.log(data)
        displayTestTwo(data);
        });
    });
};
// var submitButton = document.getElementById("submit");
// submitButton.addEventListener();
    submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    getData(entryValue.value);
    });


