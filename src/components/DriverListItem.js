import {CardActions} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const DriverListItem = ({driver, favorites, onFavoriteChange}) => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" color="textPrimary">
                        {driver.givenName}
                    </Typography>
                    <Typography color="textSecondary">
                        {driver.familyName}
                    </Typography>
                    <Typography>
                        Nationality: {driver.nationality}
                    </Typography>
                    <Typography>
                        Race number: {driver.permanentNumber}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link className="button-link" to={`driverdetails/${driver.driverId}`} exact="true">
                            <Button variant="contained" color="primary">See Details</Button>
                    </Link>
                    <FormControlLabel control ={
                        <Checkbox
                            checked={favorites.filter(f => f === driver.driverId).length > 0}
                            name="favoriteCheckbox"
                            onChange={(e) => {onFavoriteChange(e, driver.driverId)}}
                            color="primary"/>
                    } label="Favorite"/>
                </CardActions>
            </Card>
        </Grid>
    );
};


export default DriverListItem;
