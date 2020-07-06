import { gql } from 'apollo-boost'

export const deleteMovie = gql`
    mutation deleteMovie($id: ID!) {
        deleteMovie(id: $id) {
            name
        }
    }
`