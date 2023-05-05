import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    constructor(props) {
        super(props);
        let tempData = [];
        for(let i=0; i< props.data.length; i+=20) {
            tempData.push({name: props.data[i][0], value: props.data[i][1]});
        }
        this.state = {
        data: tempData
        // [
        //     {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        //     {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        //     {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        //     {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        //     {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        //     {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        //     {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        // ]
        }
    }

    render() {
        const { data } = this.state;

        return (
        <ResponsiveContainer width="95%" height="90%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 40,
                right: 20,
                left: 40,
                bottom: 20,
            }}
            >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#EDB544" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
        );
    }
}

