import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

function Home() {
    const { loading, data } = useQuery(FETCH_POST_QUERY);

    if (data) {
        console.log(data)
    }
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

const FETCH_POST_QUERY = gql`
    {
        getPosts{
            id
            body
            username
            comments{
                id
                body
                username
                createdAt
            }
            likes{
                username
            }
            likeCount
            commentCount
            createdAt
        }
    }
`

export default Home;