import { gql } from 'apollo-boost'

export const deleteDirector = gql`
    mutation deleteDirector($id: ID) {
        deleteDirector(id: $id) {
            name
        }
    }
`