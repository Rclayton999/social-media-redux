import React from 'react';
import { Profile } from '../../models/people';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button } from '@material-ui/core';
import  {PostCardComponent} from './post.component';


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
    profile: Profile | undefined
}

export const FeedCardComponent: React.FC<CardComponentProps> = (props) => {
    let  profile  = props.profile;
    console.log(profile);

    const classes = useStyles();
    return(
    <div className="row">
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {profile.name}
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {profile.birthdate}
        </Typography>
        </CardContent>
        {profile.posts.map(p=>{return (
            <PostCardComponent post = {p}/>
        )})}

    </Card>
    </div>
    )

}

