/* ============================================================================
 *  Imports
 * ========================================================================= */

import { useSelector } from "react-redux";
import { ReferenceLine, LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from "recharts";

/* ============================================================================
 *  Components
 * ========================================================================= */

function Statistik() {

    /* Boilerplate */
    const state = useSelector(state => state);

    const renderChart = () => {
        if (state.prices.hours) {
            const min = Math.floor(parseFloat(state.prices.min.scale)) - 5;
            const max = Math.ceil(parseFloat(state.prices.max.scale)) + 5;

            return (

                <ResponsiveContainer width={400} height={250}>

                    <LineChart data={state.prices.hourly}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    style={{
                        backgroundColor: '#B2E0E0',
                        borderRadius: '5px',
                        margin: 40
                    }}>

                    <XAxis dataKey="name" hide={true}/>
                    <YAxis domain={[min, max]} 
                    style={{
                        fontSize: '12px'
                        }}/>

                    <Tooltip 
                    position={{ x: 5, y: 5}}
                    contentStyle={{
                        border: 'none',
                        backgroundColor: '#0008',
                        borderRadius: '5px',
                    }}
                    itemStyle={{
                        fontWeight: 'bolder'
                    }}/>

                    <Line type="monotone" dot={false} dataKey="SE1" stroke="#F3F3F3" strokeWidth={2} />
                    <Line type="monotone" dot={false} dataKey="SE2" stroke="#FFB500" strokeWidth={2} />
                    <Line type="monotone" dot={false} dataKey="SE3" stroke="#07ADC6" strokeWidth={2} />
                    <Line type="monotone" dot={false} dataKey="SE4" stroke="#0FB66E" strokeWidth={2} />

                    <ReferenceLine y={state.prices.mean.SE1} stroke="#F3F3F3" strokeDasharray="3 3" />
                    <ReferenceLine y={state.prices.mean.SE2} stroke="#FFB500" strokeDasharray="3 3" />
                    <ReferenceLine y={state.prices.mean.SE3} stroke="#07ADC6" strokeDasharray="3 3" />
                    <ReferenceLine y={state.prices.mean.SE4} stroke="#0FB66E" strokeDasharray="3 3" />

                    </LineChart>
                </ResponsiveContainer>
            )
        }
    }

    return (
        <>{renderChart()}</>
    );
}

/* ============================================================================
 *  Exports
 * ========================================================================= */

export default Statistik;