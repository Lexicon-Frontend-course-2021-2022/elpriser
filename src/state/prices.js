/* ============================================================================
 * Actions
 * ========================================================================= */

const actions = {
  set: (payload) => ({ type: 'SET', payload }),

}

const default_state = {
  date: "Unknown",
  hours: 0,
  unit: "Unknown",
  max: {
    SE1: 0,
    SE2: 0,
    SE3: 0,
    SE4: 0,
    scale: 0
  },
  min: {
    SE1: 0,
    SE2: 0,
    SE3: 0,
    SE4: 0,
    scale: 0
  },
  mean: {
    SE1: 0,
    SE2: 0,
    SE3: 0,
    SE4: 0,
  },
  hourly: {}
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