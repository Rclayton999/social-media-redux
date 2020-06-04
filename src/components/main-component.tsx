import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {ProfileComponent} from './profile-component/profile.component'
import FeedComponent from './feed-component/feed.component'


export const MainComponent: React.FC = ()=>{

    return(
        <div>
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <FeedComponent/>
                        </Route>
                        <Route path="/profile">
                            <ProfileComponent/>
                        </Route>
                    </Switch>

                </main>
            
            </BrowserRouter>
        </div>

    )

}