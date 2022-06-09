export type MovieData = {
    id: string;
    name: string;
    description: string;
    releaseDate: Date;
    image: string;
}

export default class Movie {
    constructor(readonly movie: MovieData) { }
}