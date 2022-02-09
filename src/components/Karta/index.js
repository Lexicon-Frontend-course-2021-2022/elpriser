/* ============================================================================
 * Imports
 * ========================================================================= */

import React from 'react';
import { useSelector } from 'react-redux';
import SverigeKarta from "../../images/karta.png";
import { Container, DataBanner, SEdata1, SEdata2, SEdata3, SEdata4, SE_1, SE_2, SE_3, SE_4, SverigeImg, SE_P, SE_PRIS } from './karta.elements';

/* ============================================================================
 * Component
 * ========================================================================= */

const Karta = () => {

  /* Boilerplate */
  const state = useSelector(state => state);

  return <div>
    <Container>
      <SverigeImg src={SverigeKarta} type="image/png" />
      <DataBanner>
        <SE_1><SE_P>SE1</SE_P></SE_1> <SEdata1><SE_PRIS><b>{state.prices.mean.SE1}</b> {state.prices.unit}</SE_PRIS></SEdata1>
        <SE_2><SE_P>SE2</SE_P></SE_2> <SEdata2><SE_PRIS><b>{state.prices.mean.SE2}</b> {state.prices.unit}</SE_PRIS></SEdata2>
        <SE_3><SE_P>SE3</SE_P></SE_3> <SEdata3><SE_PRIS><b>{state.prices.mean.SE3}</b> {state.prices.unit}</SE_PRIS></SEdata3>
        <SE_4><SE_P>SE4</SE_P></SE_4> <SEdata4><SE_PRIS><b>{state.prices.mean.SE4}</b> {state.prices.unit}</SE_PRIS></SEdata4>
      </DataBanner>
    </Container>
  </div>;
};

/* ============================================================================
 * Exports
 * ========================================================================= */

export default Karta;
