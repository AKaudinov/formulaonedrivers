import {CardActions, makeStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
    root: {
        margin: 20
    },
    heading: {
        'margin-bottom': 20
    }
});

export const DriverDetails = (props) => {
    const classes = useStyles();

    const renderDriver = () => {
        return (
            <React.Fragment>
                <CardContent>
                    <Typography className={classes.heading} variant="h6" color="textPrimary">
                        Driver Details
                    </Typography>
                    <form noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField id="FirstName" label="First Name" variant="outlined" value={props.driver.givenName}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="LastName" label="Last Name" variant="outlined" value={props.driver.familyName}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="DoB" label="Date of Birth" variant="outlined" value={props.driver.dateOfBirth}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="Nationality" label="Nationality" variant="outlined" value={props.driver.nationality}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="RaceNumber" label="Race Number" variant="outlined" value={props.driver.permanentNumber}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="DriverCode" label="Driver Abbreviation" variant="outlined" value={props.driver.code}/>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
                <CardActions>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Link className="button-link" to="/" exact="true">
                                <Button variant="contained" color="secondary">Back</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary" target="_blank" rel="noopener noreferrer" href={props.driver.url}>Driver wiki page</Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </React.Fragment>
        );
    };
    return (
        <Card className={classes.root}>
            {props.driverFetchStatus.isFetching && <div className="centered"><CircularProgress/></div>}
            {props.driverFetchStatus.fetchFailed && <div className="centered">Unable to retrieve drivers</div>}
            {props.driver && renderDriver()}
        </Card>
    );
};


const mapStateToProps = (state, props) => {
    return {
        driverFetchStatus: {
            isFetching: state.drivers.isFetching,
            fetchFailed: state.drivers.fetchFailed
        },
       driver: state.drivers.list.find(driverItem => driverItem.driverId === props.match.params.id)
    };
};

export default connect(mapStateToProps)(DriverDetails);

