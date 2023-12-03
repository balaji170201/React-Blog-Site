import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

function NewPost() {
  const {handleSubmit,postBody,setPostBody,postTitle,setPostTitle} = useContext(DataContext)
  return (
    <main className='NewPost'> 
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
          <label htmlFor='postTitle'>Title:</label>
          <input
            id='postTitle'
            type='text'
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor='postBody'>Post:</label>
          <input
            id='postBody'
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            style={{height:'150px'}}
          />
          <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost