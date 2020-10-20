import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';

import PostCard from '../components/PostCard';

function Home() {
    const { loading, data } = useQuery(FETCH_POST_QUERY);

    if (data) {
        console.log(data)
    }
    return (
        <Grid columns={3}>
            <Grid.Row>
                <h1>Recent Post</h1>
            </Grid.Row>
            <Grid.Row>
                {loading ? (
                    <h1>Loding posts</h1>
                ) : (
                        data.getPosts && data.getPosts.map(post => {
                            return (
                                <Grid.Column key={post.id}>
                                    <PostCard post={post} />
                                </Grid.Column>
                            )
                        })
                    )}
            </Grid.Row>
        </Grid>
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