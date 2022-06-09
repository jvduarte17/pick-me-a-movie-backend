import Movie from "../../../domain/entities/movie";
import { MovieRepository } from "../../../domain/interfaces/MovieRepository";

export default class MovieRepositoryMemory implements MovieRepository{
  movies: Movie[]

  constructor(){
    this.movies = []
  }

  save(movie: Movie){
    this.movies.push(movie)

    return Promise.resolve()
  }
}