import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../state/actions'
import { getPrices } from '../../api/nordpool';
import SverigeKarta from "../../images/karta.png";
import { Container, DataBanner, SEdata1, SEdata2, SEdata3, SEdata4, SE_1, SE_2, SE_3, SE_4, SverigeImg, SE_P, SE_PRIS } from './karta.elements';

const Karta = () => {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  // // Get data from API, but only once!
  // if (!state.prices.hours) {
  //   getPrices()
  //     .then(res => {
  //       dispatch(actions.prices.set(res.data))
  //     })

  // }

  return <div>
    <Container>
      <SverigeImg src={SverigeKarta} type="image/png" />
      <DataBanner>
        <SE_1><SE_P>SE1</SE_P></SE_1><SEdata1><SE_PRIS>{state.prices.mean.SE1}{state.prices.unit}</SE_PRIS></SEdata1>
        <SE_2><SE_P>SE2</SE_P></SE_2><SEdata2><SE_PRIS>{state.prices.mean.SE2} {state.prices.unit}</SE_PRIS></SEdata2>
        <SE_3><SE_P>SE3</SE_P></SE_3><SEdata3><SE_PRIS>{state.prices.mean.SE3} {state.prices.unit}</SE_PRIS></SEdata3>
        <SE_4><SE_P>SE4</SE_P></SE_4><SEdata4><SE_PRIS>{state.prices.mean.SE4} {state.prices.unit}</SE_PRIS></SEdata4>
      </DataBanner>
    </Container>
  </div>;
};

export default Karta;
