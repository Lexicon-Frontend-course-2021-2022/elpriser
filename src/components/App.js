/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../state/actions'


/* ============================================================================
 * Component
 * ========================================================================= */
function App() {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>counter: {state.counter}</h1>
      <button onClick={() => dispatch(actions.counter.decrease())}>-</button>
      <button onClick={() => dispatch(actions.counter.reset())}>RESET</button>
      <button onClick={() => dispatch(actions.counter.increase())}>+</button>
    </div>
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default App;
