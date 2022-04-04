import Movie from "."

describe('testing index.ts', () => {

    it('should return a movie', () => {

        const date = new Date();

        const output = new Movie({
            id: '123',
            name: 'teste',
            description: 'desc teste',
            releaseDate: date,
            image: 'url'
        })

        const expectedOutput = {
            id: '123',
            name: 'teste',
            description: 'desc teste',
            releaseDate: date,
            image: 'url'
        }

        expect(output.movie).toEqual(expectedOutput)

    })

})