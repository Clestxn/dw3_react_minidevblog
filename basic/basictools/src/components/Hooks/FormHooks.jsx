import React, { useState } from 'react'

const FormHooks = () => {
    const [list] = useState (['Letícia', 'Enzo', 'Kayro', 'Gustavo'])
    const [number, setnumber] = useState(15)
    const [user] = useState(
        [
            {id:1, nome: 'José Carlos', Idade: 41},
            {id:2, nome: 'Maria Rosa', Idade: 25},
            {id:3, nome: 'Ana Sofia', Idade: 31},
            {id:4, nome: 'Paulo José', Idade: 21},
            {id:5, nome: 'Marcos Daniel', Idade: 25},
            {id:6, nome: 'Victor Hugo', Idade: 34},
            {id:7, nome: 'Vitória Kamily', Idade: 19},
            {id:8, nome: 'Pedro Lucas', Idade: 37}
        ]
    )
    return (
        <>
            <div>
                <p>
                    <strong>Valor de número: </strong> {number}
                </p>
                <button onClick={() => {setnumber (32); console.log(number)}}>Mudar</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, i) =>(
                            <li key ={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <table>
                    <tr>
                        <td>
                            {
                                user.map((item, i) =>(
                                    <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.Idade}</td>
                                    </tr>
                                ))
                            }
                        </td>
                    </tr>

                </table>
            </div>
        </>
    )
}

export default FormHooks