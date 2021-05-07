import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import filterDrivers from '../selectors/drivers';
import DriverListItem from "./DriverListItem";

export const DriverList = (props) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoriteList = JSON.parse(localStorage.getItem('favorites'));
        if(favoriteList){
            setFavorites(favoriteList);
        }
    }, []); //run only once on render

    useEffect(() => {
       localStorage.setItem('favorites', JSON.stringify((favorites)));
    }, [favorites]); //update the local storage each time favorites array changes

    const onFavoriteChange = (e, driverId) => {
        const isChecked = e.target.checked;
        if(isChecked){
            setFavorites([...favorites, driverId]);
        }else{
            setFavorites(favorites.filter(f => f !== driverId));
        }
    };

    const renderDrivers = (drivers) => (
        drivers.map(driver => (
            <DriverListItem driver={driver} favorites={favorites} onFavoriteChange={onFavoriteChange} key={driver.driverId}/>
        ))
    );
    return (
        <Grid
        container
        spacing={3}>
            <Grid item xs={12}>
                {props.isFetching && <div className="centered"><CircularProgress/></div>}
                {props.fetchFailed && <div className="centered">Unable to retrieve drivers</div>}
            </Grid>
            {renderDrivers(props.drivers)}
        </Grid>
    );
};

const mapStateToProps = (state) => {
  return {
      isFetching: state.drivers.isFetching,
      fetchFailed: state.drivers.fetchFailed,
      drivers: filterDrivers(state.drivers.list, state.filters),
      filters: state.filters
  }
};

export default connect(mapStateToProps)(DriverList);
