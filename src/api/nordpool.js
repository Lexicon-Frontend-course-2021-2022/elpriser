/* ============================================================================
 * Mock function for now
 * ========================================================================= */

function getPrices() {
  console.log('getPrices()');
  return new Promise((res) => {
    let i = 0;
    let data = [];
    for (i = 0; i < 24; i++) {
      data.push(
        {
          hour: i,
          prices: {
            SE1: 50,
            SE2: 50,
            SE3: 50,
            SE4: 50
          }
        }
      )
    }
    res(data);
  })
};


export { getPrices }
