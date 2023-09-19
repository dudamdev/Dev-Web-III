import React, { useEffect, useState } from 'react';
import './styles.css'

function App() {
  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [evolutions, setEvolutions] = useState([]);

  async function loadAPI() {
    try {
      const lowercaseName = name.toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${lowercaseName}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Pokemon não encontrado');
      }
      const data = await response.json();
      setPokemon(data);

      // Carregar informações adicionais
      await loadTypes(data.types);
      await loadAbilities(data.abilities);
      await loadEvolutions(data.species.url);

      setError('');
    } catch (error) {
      console.error(error);
      setPokemon({});
      setTypes([]);
      setAbilities([]);
      setEvolutions([]);
      setError('Pokemon não encontrado. Tente novamente.');
    }
  }

  async function loadTypes(typeData) {
    const typesInfo = await Promise.all(typeData.map(async (type) => {
      const response = await fetch(type.type.url);
      const data = await response.json();
      return data.name;
    }));
    setTypes(typesInfo);
  }

  async function loadAbilities(abilityData) {
    const abilitiesInfo = await Promise.all(abilityData.map(async (ability) => {
      const response = await fetch(ability.ability.url);
      const data = await response.json();
      return data.name;
    }));
    setAbilities(abilitiesInfo);
  }

  async function loadEvolutions(speciesUrl) {
    const response = await fetch(speciesUrl);
    const speciesData = await response.json();
    const evoChainResponse = await fetch(speciesData.evolution_chain.url);
    const evoChainData = await evoChainResponse.json();
    const evolutionsInfo = await parseEvolutionChain(evoChainData.chain);
    setEvolutions(evolutionsInfo);
  }

  async function parseEvolutionChain(chain) {
    const evolutions = [];
    while (chain) {
      const speciesName = chain.species.name;
      const triggerName = chain.evolution_details[0]?.trigger?.name || 'level-up';
      const evolutionUrl = `https://pokeapi.co/api/v2/pokemon/${speciesName}`;
      const response = await fetch(evolutionUrl);
      const evolutionData = await response.json();
      evolutions.push({ speciesName, triggerName, imageUrl: evolutionData.sprites?.front_default });
      chain = chain.evolves_to[0];
    }
    return evolutions;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loadAPI();
  };

  useEffect(() => {
    // Não é necessário carregar a API aqui, pois o carregamento será desencadeado pelo envio do formulário.
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <header>
        <a href="https://fontmeme.com/shadow-effect/"><img src="https://fontmeme.com/permalink/230919/239e0a32bf2cb9cad3b8d1291b3397e4.png" alt="shadow-effect" border="0" width="250" /></a>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nome do pokemon'
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <div className="error">{error}</div>}

      {pokemon.id && (
        <div className='pokemon-info-container'>
          <div className='pokemon-info-header'>
            <div className='pokemon-image-container'>
              <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            </div>
            <div className='pokemon-info'>
              <div>Name: {pokemon.name}</div>
              <div>Weight: {pokemon.weight}</div>
              <div>Height: {pokemon.height}</div>
              <div>Type(s): {types.join(', ')}</div>
              <div>Abilities: {abilities.join(', ')}</div>
            </div>
          </div>
          <div className='evolutions-container'>
            <h2>Evolutions</h2>

            <ul className='pokemon-evolutions-container'>
              {evolutions.map((evo, index) => (
                <li key={index} className='pokemon-evolution'>
                  <img src={evo.imageUrl} alt={evo.speciesName} />
                  <div>Name: {evo.speciesName}</div>
                  <div>Trigger: {evo.triggerName}</div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
