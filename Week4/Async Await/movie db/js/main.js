const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function () {
    const inputKeyword = document.querySelector('.input-keyword').value;
    (async () => {
        const response = await fetch('http://www.omdbapi.com/?apikey=a96ee65a&s=' + inputKeyword);
        const data = await response.json();
        const movies = data.Search;
        const cards = showCards(movies);
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;
        
        const detailButtons = document.querySelectorAll('.modal-detail-button');
        detailButtons.forEach(function (btn) {
            btn.addEventListener('click', async function() {
                const imdbId = this.dataset.imdbid;
                const response = await fetch('http://www.omdbapi.com/?apikey=a96ee65a&i=' + imdbId);
                const movie = await response.json();
                const movieDetails = showDetails(movie);
                const modal = document.querySelector('.modal-content');
                modal.innerHTML = movieDetails;
            });
        });
    })();
});



const showCards = movies => {
    let cards = '';
    movies.forEach(movie => {
        cards += `
            <div class="col-md-2 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>
        `;
    });

    return cards;
};

const showDetails = movie => {
    const details = `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="movieDetailModalLabel">${movie.Title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${movie.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                            <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
                            <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
                            <li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
                            <li class="list-group-item"><strong>Plot:</strong> <br>${movie.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    `;

    return details;
};