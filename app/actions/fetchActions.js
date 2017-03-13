import key from '../_utils/apiKey';
import { isLoading } from './loadingActions';
import { hasError } from './errorActions';

export function fetchData(dataType, data) {
    return {
        type: dataType,
        payload: data
    };
}

export function initialFetch() {
    return async (dispatch) => {

        try {
            await Promise.all([ fetchMovies(dispatch) ]);
            dispatch(isLoading(false));
        } catch (err) {
            dispatch(hasError(true));
        }
    };
}

function fetchMovies(dispatch) {
    return new Promise( async (resolve, reject) => {

        try {
            const popularMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`);
            const playingMovies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`);
            const upcomingMovies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`);

            const [a, b, c] = await Promise.all([popularMovies, playingMovies, upcomingMovies]);
            const [popularJson, playingJson, upcomingJson] = await Promise.all([a.json(), b.json(), c.json()]);

            dispatch(fetchData('FETCH_MOVIES_POPULAR', popularJson.results));
            dispatch(fetchData('FETCH_MOVIES_PLAYING', playingJson.results));
            dispatch(fetchData('FETCH_MOVIES_UPCOMING', upcomingJson.results));

            resolve('FETCH_MOVIES_RESOLVED');
        } catch (err) {
            reject('FETCH_ERROR', err);
        }
    });
}