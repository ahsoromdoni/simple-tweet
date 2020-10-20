import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {

    return (
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{createdAt}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        {likeCount}
                    </Button>
                    <Button basic color='red'>
                        {commentCount}
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
}

export default PostCard;