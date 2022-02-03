/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../state/actions'

import { getPrices } from '../api/nordpool';

import Home from '../pages/home';


/* ============================================================================
 * Component
 * ========================================================================= */
function App() {


  /* Boilerplate */
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
    
    <Home />

      <h1>Datum: {state.prices.date}</h1>

      <h1>SE1: {state.prices.areas.SE1.mean} {state.prices.unit}</h1>
      <p>Min/Max: {state.prices.areas.SE1.min}/{state.prices.areas.SE1.max} {state.prices.unit}</p>

      <h1>SE2: {state.prices.areas.SE2.mean} {state.prices.unit}</h1>
      <p>Min/Max: {state.prices.areas.SE2.min}/{state.prices.areas.SE2.max} {state.prices.unit}</p>

      <h1>SE3: {state.prices.areas.SE3.mean} {state.prices.unit}</h1>
      <p>Min/Max: {state.prices.areas.SE3.min}/{state.prices.areas.SE3.max} {state.prices.unit}</p>

      <h1>SE4: {state.prices.areas.SE4.mean} {state.prices.unit}</h1>
      <p>Min/Max: {state.prices.areas.SE4.min}/{state.prices.areas.SE4.max} {state.prices.unit}</p>

    </div>
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default App;
