import jsonplaceholder from '../apis/jsonplaceholder';

export const fetcPosts = async() => {
    return async (dispatch)=>{ // getState attribute is not being used
        const response= await jsonplaceholder.get('/posts')
        dispatch({
            type:'FETCH_POSTS',
            payload: response.data
        })

    }
    
}
