const filtersReducerDefaultState = {
    text: ''
    //can add more filters in the future if need be
};

export default (state = filtersReducerDefaultState, action) =>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                text: action.text
            };
        default:
            return state;
    }
};
