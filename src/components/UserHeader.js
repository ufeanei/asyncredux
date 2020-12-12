import React, { Component } from 'react';
import {connect } from 'react-redux';
import {fetchUser} from '../actions';


class UserHeader extends Component {
    componentDidMount(){
        console.log(this.props)
        this.props.fetchUser(this.props.userId)
    }
    render(){
        const user = this.props.user
        if (!user) {
            return null
        }
        return (
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find((user) => user.id === ownProps.userId)}
 }

const mapDispatchToProps =(dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserHeader) 