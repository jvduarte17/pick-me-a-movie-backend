import Movie from "../entities/movie";

export interface MovieRepository {
    save: (movie: Movie) => Promise<void>
}