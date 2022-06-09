import { MovieData } from "./domain/entities/movie";
import CreateMovieUseCase from "./domain/useCase/movie/CreateMovie";
import { MongoHelper } from "./infra/mongodb/mongo-config";
import MovieRepositoryMongoDB from "./infra/repository/mongodb/MovieRepositoryMongoDB";

const invoke = async () => {
  const movie = {
    description: 'Y',
    id: '1',
    image: '',
    name: 'X',
    releaseDate: new Date()
  } as MovieData
  const movieRepo = new MovieRepositoryMongoDB()
  const useCase = new CreateMovieUseCase(movieRepo)

  console.log('teste')

  MongoHelper.connect('mongodb://root:example@localhost:27017/admin').then(async () => {
    await useCase.create(movie)
  })
}

(async () => {
  await invoke()
})()