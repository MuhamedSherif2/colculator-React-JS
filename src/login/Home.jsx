import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [user, setuser] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => { setuser(res.data) }), []
    })
    return (
        <section>
            <div className="card-container">
                {user.map((users) => (
                    <div className="card" key={users.id}>
                        <h3>{users.name}</h3>
                        <p>Email: {users.email}</p>
                        <p>Phone: {users.phone}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home
