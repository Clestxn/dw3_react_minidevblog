import React from "react";
import { useState, useEffect } from "react";
import { userAuthentication } from "../../hooks/userAuthentication";

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = userAuthentication()

    const handlerSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError('As senhas precisam ser iguais')
            return
        }

        const res = await createUser(user)

        console.table(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div>
            <h1>Registrar-se</h1>
            <form onSubmit={handlerSubmit}>
                <label>
                    <span>Nome: </span>
                    <input 
                    type="text"
                    name="displayName"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Digite seu nome"></input>
                </label>
                <label>
                    <span>Email: </span>
                    <input 
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"></input>
                </label>
                <label>
                    <span>Senha: </span>
                    <input 
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"></input>
                </label>
                <label>
                    <span>Confirmar senha: </span>
                    <input 
                    type="password"
                    name="confirmPassword"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Digite sua senha novamente"></input>
                </label>
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn" disabled>Aguarde...</button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register