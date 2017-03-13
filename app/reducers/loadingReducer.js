const loadingReducer = (state = {
    isLoading: true
}, action) => {
    switch(action.type) {
        case 'IS_LOADING':
            return {
                isLoading: action.isLoading
            };
    }
    return state;
};

export default loadingReducer;