/* ============================================================================
 * Actions
 * ========================================================================= */
const actions = {
  set: (payload) => ({ type: 'SET', payload }),
}

const default_state = {
  date: "Unknown",
  hours: 0,
  units: "Unknown",
  areas: {
    SE1: {
      min: 0,
      max: 0,
      mean: 0,
      hours: []
    },
    SE2: {
      min: 0,
      max: 0,
      mean: 0,
      hours: []
    },
    SE3: {
      min: 0,
      max: 0,
      mean: 0,
      hours: []
    },
    SE4: {
      min: 0,
      max: 0,
      mean: 0,
      hours: []
    },
  }
}
/* ============================================================================
 * Reducer
 * ========================================================================= */
const reducer = (state = default_state, action) => {

  switch (action.type) {
    case 'SET':
      return action.payload;

    default:
      return state;
  }
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export { actions, reducer };