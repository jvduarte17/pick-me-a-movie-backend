import { MovieData } from "../movie";

export interface CreateMovie {
    create: (movie: MovieData) => Promise<void>
}