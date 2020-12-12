import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => {
    return async (dispatch)=>{ // getState attribute is not being used
        const response= await jsonplaceholder.get('/posts')
        dispatch({
            type:'FETCH_POSTS',
            payload: response.data
        })

    }
    
}


export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get('/users/'+ id)
        dispatch({
            type:'FETCH_USER',
            payload: response.data
        })
    }
}