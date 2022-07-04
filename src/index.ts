import CreateMovieUseCase from "./domain/useCase/movie/CreateMovie";
import MovieController from "./infra/controllers/MovieController";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import MovieRepositoryMongoDB from "./infra/repository/mongodb/MovieRepositoryMongoDB";
import { MongoHelper } from "./infra/database/mongodb/mongo-config";
import { Http } from "./infra/http/Http";

const invoke = async () => {
  const databaseUri = 'mongodb://root:example@localhost:27017/admin';
  await MongoHelper.connect(databaseUri)

  const movieRepo = new MovieRepositoryMongoDB()
  const useCase = new CreateMovieUseCase(movieRepo)
  const http: Http = new ExpressAdapter()
  new MovieController(http, useCase)

  http.listen(8080)
}

(async () => {
  await invoke()
})()