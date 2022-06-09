import Movie, { MovieData } from "../../entities/movie"
import { MovieRepository } from "../../interfaces/MovieRepository"
import CreateMovieUseCase from "./CreateMovie"

describe('testing CreateMovie.ts', () => {
    it('should create a movie', () => {

        const movieRepository: MovieRepository = {
            save: jest.fn()
        }

        const movie: MovieData = {
            id: '123',
            name: 'teste',
            description: 'desc teste',
            releaseDate: new Date(),
            image: 'url'
        }

        const createMovie = new CreateMovieUseCase(movieRepository)

        createMovie.create(movie)

        expect(movieRepository.save).toHaveBeenCalledWith(movie)
    })
})