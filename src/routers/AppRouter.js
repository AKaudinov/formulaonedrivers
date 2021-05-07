import React from 'react';
import  {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard.js';
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Container from "@material-ui/core/Container";
import DriverDetails from "../components/DriverDetails";



export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Header/>
                <Container>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/driverdetails/:id" component={DriverDetails}/>
                        {/*<Route component={NotFound}/>*/}
                        <Route component={NotFound}/>
                    </Switch>
                </Container>
            </div>
        </Router>
    )
};

export default AppRouter;
