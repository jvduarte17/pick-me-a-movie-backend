import { MovieData } from "../../domain/entities/movie";
import CreateMovieUseCase from "../../domain/useCase/movie/CreateMovie";
import { Http } from "../http/Http";

export default class MovieController {
  constructor(
    private readonly http: Http,
    private readonly createMovieUseCase: CreateMovieUseCase
  ){
    this.http.on('post', '/movies', async (params: unknown, body: MovieData) => {
      await this.createMovieUseCase.create(body);
    })

    // this.http.on('get', '/movies', async (params: unknown, body: unknown) => {
    //   await this.getMovieUseCase.get();
    // })
  }
}