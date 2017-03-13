// import key from '../_utils/apiKey';
// import { isLoading } from './loadingActions';

// export function fetchPopularMovies() {
//     return (dispatch) => {
//         dispatch(isLoading(true));

//         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
//             .then(response => response.json())
//             .then(json => {
//                 dispatch(fetchData(FETCH_MOVIES_POPULAR, json.results));
//                 dispatch(isLoading(false));
//             });
//     };
// }