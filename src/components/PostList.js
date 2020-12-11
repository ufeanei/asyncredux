import React, {Component} from 'react';
import {connect } from 'react-redux';
import {fetchPosts} from '../actions';


class PostList extends Component {

    componentDidMount(){
        this.props.fectPosts()
    }

    render (){
        return(
            <div>Myposts</div>
        )
    }
}

const mapStateToProps = (state)=> {
    return{
        posts:state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)