import React from 'react'
import Post from './Post'

function Feed({posts}) {
  return (
    <>
        {
            posts.map((post) => (
                <Post key={posts.id} post={post}/>
            ))
        }
    </>
  )
}

export default Feed