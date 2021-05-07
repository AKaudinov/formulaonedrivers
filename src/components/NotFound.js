import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import {CardActions} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin: 100
    },
    title: {
        fontSize: 25
    },
    pos:{
        marginBottom: 12
    }
});
const NotFound = () => {
const cardClasses = useStyles();

return (
            <Card className={cardClasses.root}>
                <CardContent>
                    <Typography className={cardClasses.title} color="textSecondary">
                        Page not found
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/" exact="true">Back to home page</Link>
                </CardActions>
            </Card>
    )
};


export default NotFound;

// <Grid
// container
// spacing={0}
// direction="column"
// alignItems="center"
// justify="center"
// style={{minHeight: '100vh'}}
// >
//     <Grid item xs={12}>
