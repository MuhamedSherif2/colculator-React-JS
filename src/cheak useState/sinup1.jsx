import React, { useState } from 'react'

function Sinup() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [submit, setSubmit] = useState(null)
  const onHandelSubmit = (e) => {
    e.preventDefault()
    setSubmit(form)
  }

  return (
    <div>
      <form onSubmit={onHandelSubmit}>
        <br />
        Name:
        <input type="text" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <br />

        E-mail:
        <input type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <br />

        Password:
        <input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <br />
        <input type="submit" />
      </form>

      {submit &&
        <>
          <h4>{submit.username}</h4>
          <h4>{submit.email}</h4>
          <h4>{submit.password}</h4>
        </>
      }
    </div>
  )
}

export default Sinup







