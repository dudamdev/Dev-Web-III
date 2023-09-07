import React, { useState, useEffect } from 'react';
import "../src/Style/styles.css"

export default function App() {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Função para lidar com a mudança de cor
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Efeito para carregar o nome do localStorage ao entrar na página
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setName(savedName);
    } else {
      // Perguntar ao usuário o nome em um alert
      const userInput = prompt('Informe seu nome:');
      if (userInput) {
        setName(userInput);
        localStorage.setItem('userName', userInput);
      }
    }
  }, []);

  // Efeito para carregar as tarefas do localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Efeito para salvar as tarefas no localStorage quando são atualizadas
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Função para adicionar uma nova tarefa
  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div className='main' style={{ backgroundColor: selectedColor }}>
      <h1>
        {name ? `${name}, sua lista de tarefas` : 'Bem-vindo, informe seu nome'}
      </h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Adicione uma tarefa"
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div>
        <h2>Escolha uma cor de fundo:</h2>
        <label>
          <input
            type="radio"
            name="color"
            value="orangered"
            checked={selectedColor === 'orangered'}
            onChange={() => handleColorChange('orangered')}
          />
          Orangered
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="crimson"
            checked={selectedColor === 'crimson'}
            onChange={() => handleColorChange('crimson')}
          />
          Crimson
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="cornflowerblue"
            checked={selectedColor === 'cornflowerblue'}
            onChange={() => handleColorChange('cornflowerblue')}
          />
          Cornflowerblue
        </label>
      </div>
    </div>
  );
}
