import React, { useContext, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import DataContext from '../context/DataContext';

function EditPost() {
  const {posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle} = useContext(DataContext);
  const {id} = useParams();
  const post = posts.find((post) => (post.id).toString() === id);

  useEffect(() => {
    if(post){
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[post,setEditBody,setEditTitle])
  return (
    <main className='NewPost'>
      {
        editTitle &&
        <>
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle'>Title:</label>
            <input 
              id='postTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Body:</label>
            <input 
              id='postBody'
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              style={{height:'100px'}}
            />
            <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      }
      {
        !editTitle && 
        <>
          <h2>Page not found</h2>
          <p>Well, that's disappointing</p>
          <p><Link to='/'>Visit our Homepage</Link></p>
        </>
      }
    </main>
  )
}

export default EditPost