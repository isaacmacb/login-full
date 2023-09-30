import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Home() {
    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState("")
    const [name, setName] = useState('')

    axios.defaults.withCredentials = true;

    useEffect(() => {
         axios.get('http://localhost:8081')
        .then(res => {
            if(res.data.Status === "Sucess") {
                    setAuth(true)
                    setName(res.data.name)
            } else {
                setAuth(false)
                setMessage(res.data.Error)
            }
        })
        .then(err => console.log(err))
    }, [])
    const handleDelete = () => {
        axios.get('/http://localhost:8081/logout')
        .then(res => {
            location.reload(true);
        }).catch(err => console.log(err))
    }

  return (
    <div className="container mt-4">
      
      <div>
        <h3>You are authorized --- {name}</h3>
        <button className="btn btn-danger" onClick={handleDelete}>
          Logout
        </button>
      </div>

      <div>
        <h3>Login now</h3>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
