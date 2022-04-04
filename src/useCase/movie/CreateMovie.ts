import { CreateMovie } from "../../domain/interfaces/CreateMovie";
import { MovieData } from "../../domain/movie";
import { MovieRepository } from "../interfaces/db/MovieRepository";

export default class CreateMovieUseCase implements CreateMovie {
    //inversão de controle + polimorfismo
    constructor(private readonly movieRepository: MovieRepository) {}

    async create(movie: MovieData): Promise<void> {
        await this.movieRepository.save(movie)
    }
}