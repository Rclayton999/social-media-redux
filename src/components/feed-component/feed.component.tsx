import React from 'react';
import { Typography, Grid } from '@material-ui/core'
import { Profile } from '../../models/people';
import { connect } from 'react-redux'
import { IState } from '../../reducers'
import {FeedCardComponent} from './feed.card.component';

interface FeedComponentProps {
    people: Profile[] | undefined
}

const FeedComponent: React.FC<FeedComponentProps> = (props) => {
    let  profiles  = props.people;
    console.log(profiles[0]);

    return (
        <section>
            <Typography variant="h1" component="h2" gutterBottom>Feed</Typography>
            <Grid container direction="row" spacing={9} alignItems="flex-start">
            {profiles.map(p=>{return (
                    <Grid item xl={3} sm={3}>
                        <FeedCardComponent profile={p}></FeedCardComponent>
                        </Grid>
                )})}
                </Grid>
        </section>
    )
}
const mapStateToProps = (state: IState) => {
    return {
        people: state.peopleState.people
        
    }

}
const mapDispatchToProps = {

};
export default connect(mapStateToProps)(FeedComponent)