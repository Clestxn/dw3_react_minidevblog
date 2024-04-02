import React, { useState } from 'react'

const FormHooks = () => {
    const [list] = useState(['Leticia', 'Enzo', 'Kayro', 'Gustavo'])
    const [number, setNumber] = useState(15)
    const [user, setUser] = useState(
        [
            {id:1, nome: "José Carlos", idade: 44},
            {id:2, nome: "Maria Rosa", idade: 25},
            {id:3, nome: "Ana Sophia", idade: 31},
            {id:4, nome: "Paulo José", idade: 21},
            {id:5, nome: "Marcos Daniel", idade: 25},
            {id:6, nome: "Victor Hugo", idade: 34},
            {id:7, nome: "Viktória Kamilly", idade: 19},
            {id:8, nome: "Pedro Lucas", idade: 37},
        ]

    )

    const deleteRandomUser = () => {  
        const randomNumber = Math.floor(Math.random() * user.length)
        setUser((prevUsers) => {
            return prevUsers.filter((user) => user.id !== randomNumber )
        })
    }

    return (
        <>
            <div>
                <p>
                    <strong>Valor de número: </strong> {number}
                </p>
                <button onClick={() => {setNumber(32); console.log(number)}}>Mudar</button>
            </div>

            <div>
                <ul>
                    {
                        list.map((item, i) =>(
                            <li key={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <table>
                    <tr>
                        <th>ID</th> 
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>

                    {
                        user.map((pessoa, i) =>(
                            <tr key={i}>

                                <td>{pessoa.id}</td>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.idade}</td>
                            </tr>
                        ))
                    }
                </table>
                <button onClick = {deleteRandomUser}>Excluir Randomicamente</button>
            </div>
        </>
    )
    
}

export default FormHooks