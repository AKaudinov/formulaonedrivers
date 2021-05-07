import Api from "../api/DriversApi";

export const beginFetchDrivers = () => ({
   type: 'FETCHING_DRIVERS'
});

export const fetchDriversFail = () => ({
   type: 'FETCH_DRIVERS_FAIL'
});

export const fetchDriversSuccess = (drivers) => ({
    type: 'FETCH_DRIVERS_SUCCESS',
    drivers: drivers
});

export const fetchDrivers = () => {
    return (dispatch) => {
        dispatch(beginFetchDrivers());
        Api.getDrivers().then(drivers => {
            dispatch(fetchDriversSuccess(drivers))
        }).catch(err => {
            dispatch(fetchDriversFail());
        })
    };
};
