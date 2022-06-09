"use strict";
exports.__esModule = true;
var MovieRepositoryMemory = /** @class */ (function () {
    function MovieRepositoryMemory() {
        this.movies = [];
    }
    MovieRepositoryMemory.prototype.save = function (movie) {
        this.movies.push(movie);
        console.log(this.movies);
        return Promise.resolve();
    };
    return MovieRepositoryMemory;
}());
exports["default"] = MovieRepositoryMemory;
