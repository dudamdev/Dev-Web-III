import { useState } from 'react'

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const [user, setUser] = useState({});

    function handleRegistro(e) {
        e.preventDefault();

        setUser({
            name: name,
            email: email,
            age: age,

        })
    }

    return (
        <div>
            <form onSubmit={handleRegistro}>
                <label>Nome:</label>
                <br />
                <input
                    placeholder='Digite seu Nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <label>Email:</label>
                <br />
                <input
                    placeholder='Digite seu Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label>Idade:</label>
                <br />
                <input
                    placeholder='Digite sua Idade'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />

                <button type='submit'>Registrar</button>
            </form>
            <br /><br />

            <div>
                <span>Bem vindo, {user.name}</span><br />
                <span>Idade: {user.age}</span><br />
                <span>Email: {user.email}</span><br />
            </div>
        </div>
    )
}

export default Cadastro;