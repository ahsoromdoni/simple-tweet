import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';
import localId from 'moment/locale/id';
import { Link } from 'react-router-dom';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {

    const likePost = () => console.log('Post liked');
    const commentPost = () => console.log('Comment posted');

    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).locale('id', localId).fromNow()}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button color='teal' basic>
                        <Icon name='heart' />
                    </Button>
                    <Label basic color='teal' pointing='left'>
                        {likeCount}
                    </Label>
                </Button>
                <Button as='div' labelPosition='right' onClick={commentPost}>
                    <Button color='blue' basic>
                        <Icon name='comments' />
                    </Button>
                    <Label basic color='blue' pointing='left'>
                        {commentCount}
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    );
}

export default PostCard;