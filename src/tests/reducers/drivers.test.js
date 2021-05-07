import driversReducer from "../../reducers/drivers";
import drivers from "../fixtures/drivers";

const defaultState = {
    list: [],
    isFetching: false,
    fetchFailed: false
};

test('Should set default state', () => {
   const state = driversReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual(defaultState);
});

test('Should get drivers', () => {
    const action = {
        type: 'FETCH_DRIVERS_SUCCESS',
        drivers: drivers
    };
    const state = driversReducer(defaultState, action);
    expect(state).toEqual({
        ...defaultState,
        list: drivers
    });
});

test('Should have isFetching as true when fetching drivers', () => {
    const action = {
      type: 'FETCHING_DRIVERS'
    };
   const state = driversReducer(defaultState, action);
   expect(state).toEqual({
       ...defaultState,
       isFetching: true
   })
});


test('Should have fetchFailed as true when driver fetch fails', () => {
    const action = {
        type: 'FETCH_DRIVERS_FAIL'
    };
    const state = driversReducer(defaultState, action);
    expect(state).toEqual({
        ...defaultState,
        isFetching: false,
        fetchFailed: true
    })
});
