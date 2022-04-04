import { MovieData } from "../../../domain/movie";

export interface MovieRepository {
    save: (movie: MovieData) => Promise<void>
}