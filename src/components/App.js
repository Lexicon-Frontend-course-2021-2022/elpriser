/* ============================================================================
 * Imports
 * ========================================================================= */

import { useSelector, useDispatch } from 'react-redux'
import actions from '../state/actions'
import { getPrices } from '../api/nordpool';
import './App.css';
import Karta from './Karta';
import Statistik from './Statistik';


/* ============================================================================
 * Component
 * ========================================================================= */

function App() {


  // /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  // Get data from API, but only once!
  if (!state.prices.hours) {
    getPrices()
      .then(res => {
        dispatch(actions.prices.set(res.data))
      })
  }

  return (

    <div className="App">

      <h1>Elpriser</h1>
      
      <Karta />
      <Statistik />

    </div>
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */

export default App;
