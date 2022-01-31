/* ============================================================================
 * Mock function for now
 * ========================================================================= */
async function getPrices() {
  return new Promise((res) => {
    fetch('https://elpriser-api.thohell.com/today')
      .then(data => data.json())
      .then(data => res(data))
  })
};


export { getPrices }
