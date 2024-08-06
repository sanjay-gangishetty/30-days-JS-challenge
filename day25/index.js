const apiKey = '';

async function getMovieDetail(movieName) {
    try {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;
        const response = await fetch(url);
        const data = await response.json();
        const { Title: title, Poster: poster, Year: releaseYear } = data.Search[0];
        return { title, poster, releaseYear };
    } catch (e) {
        console.log(e);
        const err = document.getElementById('err-cont');
        err.style.display = 'block';
        const errText = document.getElementById('err');
        errText.innerHTML = e.message;
        throw new Error('No Movie found!!!');
    }
};

const sbtBtn = document.getElementById('sbt-btn');
sbtBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const cityInput = document.getElementById('cityInput');
        const { title, poster, releaseYear } = await getMovieDetail(cityInput.value);
        const titleElem = document.getElementById('title');
        titleElem.innerHTML = `<b>Title:</b> ${title}`;
        const posterElem = document.getElementById('poster');
        posterElem.src = poster;
        const yearElem = document.getElementById('releaseYear');
        yearElem.innerHTML = `<b>Year:</b> ${releaseYear}`;
        document.getElementById('movieCard').style.display = 'block';
    } catch (e) {
        console.log(e);
        const err = document.getElementById('err-cont');
        err.style.display = 'block';
        const errText = document.getElementById('err');
        errText.innerHTML = e.message;
        throw new Error('No Movie found!!!');
    }
});

const moreDetailBtn = document.getElementById('moreInfo');
moreDetailBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const { plot, rating, genre, director, actors, awards } = await getMoreDetail(cityInput.value);
        const plotElem = document.getElementById('plot');
        const ratingElem = document.getElementById('rating');
        const genreElem = document.getElementById('genre');
        const directorElem = document.getElementById('director');
        const actorsElem = document.getElementById('actors');
        const awardsElem = document.getElementById('awards');
        plotElem.innerHTML = `<b>Plot:</b> ${plot}`;
        ratingElem.innerHTML = `<b>Rating:</b> ${rating}`;
        genreElem.innerHTML = `<b>Genre:</b> ${genre}`;
        directorElem.innerHTML = `<b>Director:</b> ${director}`;
        actorsElem.innerHTML = `<b>Actors:</b> ${actors}`;
        awardsElem.innerHTML = `<b>Awards:</b> ${awards}`;
    } catch (e) {
        console.log(e);
        const err = document.getElementById('err-cont');
        err.style.display = 'block';
        const errText = document.getElementById('err');
        errText.innerHTML = e.message;
        throw new Error('No Movie found!!!');
    }
})

async function getMoreDetail(title) {
    try {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
        const response = await fetch(url);
        const data = await response.json();

        const { Plot: plot, imdbRating: rating, Genre: genre, Director: director, Actors: actors, Awards: awards } = data;
        return { plot, rating, genre, director, actors, awards };
    } catch (e) {
        console.log(e);
        const err = document.getElementById('err-cont');
        err.style.display = 'block';
        const errText = document.getElementById('err');
        errText.innerHTML = e.message;
        throw new Error('No Movie found!!!');
    }
}
