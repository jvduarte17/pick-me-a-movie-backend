import movie from "../../../domain/entities/movie";
import { MovieRepository } from "../../../domain/interfaces/MovieRepository";
import { MongoHelper } from "../../mongodb/mongo-config";

export default class MovieRepositoryMongoDB implements MovieRepository{
    async save(movie: movie) {
        const movieCollection = await MongoHelper.getCollection('movies');
        const result = await movieCollection.insertOne(movie);
        console.log(result.ops)
    };
}