const driversDefaultState = {
  list: [],
  isFetching: false,
  fetchFailed: false
};


export default (state = driversDefaultState, action) => {
    switch (action.type) {
        case 'FETCH_DRIVERS_SUCCESS':
            //return the drivers
            return {
              list: action.drivers,
              isFetching: false,
              fetchFailed: false,
            };
        case 'FETCHING_DRIVERS':
            return {
              ...driversDefaultState,
              isFetching: true,
              fetchFailed: false
            };
        case 'FETCH_DRIVERS_FAIL':
            return {
                ...driversDefaultState,
                isFetching: false,
                fetchFailed: true
            };
        default:
            return state;
    }
}
