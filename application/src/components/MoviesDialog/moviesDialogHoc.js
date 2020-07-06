import { compose } from 'recompose'

import { graphql } from "react-apollo";
import { deleteMovie } from "./mutations";
import {moviesQuery} from "../MoviesTable/queries";

const withGraphqlRemove = graphql(deleteMovie, {
    props: ({ mutate }) => ({
        deleteMovie: (id) => mutate({
            variables: id,
            refetchQueries: [{ query: moviesQuery }]
        })
    })
})

export default compose(withGraphqlRemove)