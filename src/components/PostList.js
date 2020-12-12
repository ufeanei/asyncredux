import React, {Component} from 'react';
import {connect } from 'react-redux';
import {fetchPosts} from '../actions';
import UserHeader from './UserHeader'


class PostList extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    renderedList(){
        const posts = this.props.posts;
        const list = posts.map((post)=>{
            return(
                <div className='item' key={post.id}>
                    <i className ="large middle aligned icon user" />
                    <div className ="descritpion">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            )
        })
        return list
    }

    render (){
        return(
            <div className="ui relaxed divided list">{this.renderedList()}</div>
        )
    }
}

const mapStateToProps = (state)=> {
    return{
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)