import { MovieData } from "./domain/entities/movie";
import CreateMovieUseCase from "./domain/useCase/movie/CreateMovie";
import MovieRepositoryMemory from "./infra/repository/memory/MovieRepositoryMemory";

const invoke = async () => {
  const movie = {
    description: 'Y',
    id: '1',
    image: '',
    name: 'X',
    releaseDate: new Date()
  } as MovieData
  const movieRepo = new MovieRepositoryMemory()
  const useCase = new CreateMovieUseCase(movieRepo)

  console.log('teste')

  await useCase.create(movie)
}

(async () => {
  await invoke()
})()