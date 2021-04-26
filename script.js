const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main');
const from = document.getElementById('form');
const search= document.getElementById('search');
const homebutton= document.getElementById('homebtn')

getData(API_URL)
async function getData(url)
{
    const res= await fetch(url);
    const resData= await res.json();
    
    searchMovies(resData.results);
   
    return resData;
    
    
}
function searchMovies(movies){
    //initial clear main 
    main.innerHTML= '';
    movies.forEach (movie=>{
        const movieEl= document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML= `
        <img 
        src="${IMG_PATH + movie.poster_path}"
        alt='${movie.title}'
        />
        <div class='movie-info'>
           <h3>${movie.title}</h3>
           <span class=${getClassByRate(movie.vote_average)}>${movie.vote_average}</span>
           </div>
        <div class='overview'>${movie.overview}</div>   
        
        `
        ; 

       main.appendChild(movieEl)
       
    });
}

function getClassByRate(vote){
    if (vote >= 7)
    {
        return 'green';

    }
    else if (vote >=5)
    {
        return 'orange';
    }
    else {
        return 'red';
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    
    if(searchTerm) {
        getData(SEARCH_API + searchTerm);
        console.log(SEARCH_API + searchTerm)

        search.value="";

    }
    else getData(API_URL)
    

})

homebutton.addEventListener('click', Click)

function Click(){
    getData(API_URL)
    console.log('button is clicked')
}

     
  