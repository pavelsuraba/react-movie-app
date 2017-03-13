import React, { Component } from 'react';
import { initialFetch } from '../../actions/fetchActions';
import { connect } from 'react-redux';
import Loader from 'components/Loader/Loader';

const mapStateToProps = ({ loadingReducer, movieReducer }) => {
    return {
        isLoading: loadingReducer.isLoading,
        popularMovies: movieReducer.popularMovies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(initialFetch());
        }
    };
};

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        console.log('render');
        return (
            <div>
                { this.props.isLoading ? <Loader /> : <p>Movies</p> }
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);