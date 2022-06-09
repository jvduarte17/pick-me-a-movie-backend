import Movie, { MovieData } from "../../entities/movie";
import { MovieRepository } from "../../interfaces/MovieRepository";

export default class CreateMovieUseCase {
    //inversão de controle + polimorfismo
    constructor(private readonly movieRepository: MovieRepository) {}

    async create(movieData: MovieData): Promise<void> {
        const movie = new Movie({ ...movieData })
        await this.movieRepository.save(movie)
    }
}