import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext';

function Login() {

    const [username, setUsername] = useState("");
    const [password, SetPassword] = useState("");

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <>
            <input type="text" placeholder='Enter Random words' value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder='Enter Random password' value={password} onChange={(e) => SetPassword(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login;