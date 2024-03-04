import { useEffect } from 'react'
import './App.css'
import { getPokemons, getPokemonsDetails } from './api'
import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import Title from './components/Titile'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsWithDetails, setLoading, setPokemons } from './actions';
import BeatLoader from "react-spinners/BeatLoader";
import { fromJS, setIn, get, getIn} from "immutable";





function App() {

  const loading = useSelector((state) => state.get('loading'))
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const dispatch = useDispatch()



  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, [])


  return (
    <>
      <Title />
      <Searcher />
      { loading ? (<div className='flex justify-center my-28'>
        <BeatLoader
          color="#c9d636"
          cssOverride={{}}
          loading
          margin={10}
          size={20}
          speedMultiplier={1}
        />
      </div>) : (<PokemonList pokemons={pokemons} />)}


    </>
  )
}


export default App;
