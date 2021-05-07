import filtersReducer from "../../reducers/filters";

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: ''
    })
});

test('Should set text filter', () => {
    const action ={
      type: 'SET_TEXT_FILTER',
      text: 'testing'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('testing');
});
