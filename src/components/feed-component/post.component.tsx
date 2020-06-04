import React from 'react';
import { Profile } from '../../models/people';
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
interface CardComponentProps {
    post: any
}

export const PostCardComponent: React.FC<CardComponentProps> = (props) => {
    let post = props.post;
    console.log(post);

    const classes = useStyles();
    return (
        <div>
            <CardContent>
                <Typography variant="body2" component="p">
                    {post.content}
                    <br />
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">{post.likes}</Button>
            </CardActions>
        </div>
    )

}

