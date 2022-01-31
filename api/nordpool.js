/* ============================================================================
 * Mock function for now
 * ========================================================================= */

const getPrices = async () => {
  return new promise((resolve) => {
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

    resolve(data);
  })
};

