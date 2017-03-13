const movieReducer = (state = {
    popularMovies: []
}, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES_POPULAR':
            return {
                ...state,
                popularMovies: action.payload
            };
        case 'FETCH_MOVIES_PLAYING':
            return {
                ...state,
                playingMovies: action.payload
            };
        case 'FETCH_MOVIES_UPCOMING':
            return {
                ...state,
                upcomingMovies: action.payload
            };
    }
    return state;
};

export default movieReducer;