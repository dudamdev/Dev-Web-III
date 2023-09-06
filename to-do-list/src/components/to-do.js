import React, { useState, useEffect } from 'react';

export default function ToDo() {

    const [todo, setTodo] = useState('');

    const [pessoa, setPessoa] = useState(localStorage.getItem('@pessoa'));

    const [todoList, setTodoList] = useState([]);

    const [cor, setCor] = useState('');

    const localToDO = localStorage.getItem('@tarefa');

    useEffect(() => {

        if (localToDO) {

            setTodoList(JSON.parse(localToDO));

        }

        if (pessoa && pessoa !== 'null') {

            setPessoa(pessoa)

        } else {

            const pessoa = prompt('Qual seu nome?')

            setPessoa(pessoa)

            localStorage.setItem("@user", pessoa)

        }

    }, []);

    useEffect(() => {

        localStorage.setItem('@tarefa', JSON.stringify(todoList));

    }, [todoList]);

    //sempre executa algo quando alguma coisa muda

    const handleToDo = (e) => {

        e.preventDefault();

        setTodoList([...todoList, todo]);

        setTodo('');

    }

    return (

        <div style={{ backgroundColor: `${cor}`, height: "100vh", padding: 10 }}>

            <div >

                <h1 style={{ margin: 0 }}>{pessoa}, sua lista de tarefas</h1>

            </div>



            <div>

                <form onSubmit={handleToDo}>

                    <input type="text" placeholder='Digite a tarefa' value={todo} onChange={(e) => setTodo(e.target.value)} />

                    <input type="submit" value='ADD' />

                </form>



                <div>

                    <ul>

                        {todoList.map(todo =>

                            <li key={todo}>{todo}</li>

                        )}

                    </ul>

                </div>



                <div>

                    <input type="radio" name='backColor' value='crimson' onChange={(e) => setCor(e.target.value)} />

                    <label>crimson</label>

                    <br />

                    <input type="radio" name='backColor' value='orangered' onChange={(e) => setCor(e.target.value)} />

                    <label>orangered</label>

                    <br />

                    <input type="radio" name='backColor' value='cornflowerblue' onChange={(e) => setCor(e.target.value)} />

                    <label>cornflowerblue</label>


                </div>

            </div>

        </div>

    );

}

