import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Frist() {

    const [posts, setPosts] = useState({})
    const [id , setId] = useState(0);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            setPosts(res.data); 
        })
    }, [id])
    return (
    
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <hr />
            {posts.id} - {posts.title}
        </div>
    )
}

export default Frist
