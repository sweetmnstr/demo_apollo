import { compose } from 'recompose'

import { graphql } from 'react-apollo'
import { deleteDirector } from "./mutations";
import {directorsQuery} from "../DirectorsTable/queries";

const withGraphqlDelete = graphql(deleteDirector, {
    props: ({ mutate }) => ({
        deleteDirector: (id) => mutate({
            variables: id,
            refetchQueries: [{ query: directorsQuery }]
        })
    })
})

export default compose(withGraphqlDelete)
