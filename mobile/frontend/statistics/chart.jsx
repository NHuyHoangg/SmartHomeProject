import React, { PureComponent } from 'react';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableHighlight } from 'react-native';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default class Chart extends PureComponent {
    constructor(props) {
        super(props);
        let tempData = [];
        let labels = [];
        for (let i = 0; i < props.data.length; i= i+5) {
            let date = new Date(Date.parse(props.data[i][0]));
            let dateFormat = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
            // let mm = date.getMonth() + 1; // Months start at 0!
            // let dd = date.getDate();

            // if (dd < 10) dd = '0' + dd;
            // if (mm < 10) mm = '0' + mm;

            // dateFormat += dd + '/' + mm;
            tempData.push(props.data[i][1]);
            if (!(i%10))
                labels.push( dateFormat );
            
        }
        let minValue, maxValue;
        switch (props.type) {
            case 'temp':
                minValue = [0];
                maxValue = [45];
                break;
            case 'humi':
                minValue = [0];
                maxValue = [100];
                break;
            case 'gas':
                minValue = [200];
                maxValue = [4000];
                break;
            case 'light':
                minValue = [0];
                maxValue = [100];
                break;
            default:
                minValue = [0];
                maxValue = [100];
        }
        this.state = {
            data: tempData,
            type: props.type,
            labels: labels,
            minValue: minValue,
            maxValue: maxValue
        }
    }

    render() {
        // const data = this.state.data;
        const data = {
            labels: this.state.labels,
            datasets: [
              {
                data: this.state.data,
                color: ()=>chooseColor(this.state.type), // optional
              },
            //   {
            //     data: this.state.minValue,
            //     withDots: false
            //   },
            //   {
            //     data: this.state.maxValue,
            //     withDots: false
            //   }
            ],
          };

        const chooseColor = (type) => {
            switch (type) {
                case 'temp':
                    return '#EDB544';
                case 'humi':
                    return '#222C34';
                case 'gas':
                    return '#2B5C64';
                case 'light':
                    return '#F29E7D';
                default:
                    return '#EDB544';
            }
        }


        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0,
            color: () => `#222C34`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: true // optional
          };

        const screenWidth = Dimensions.get("window").width;
        // const screenHeight = Dimensions.get("window").height;

        return (
            <View>                
                <LineChart
                data={data}
                width={screenWidth}
                height={500}
                chartConfig={chartConfig}
                bezier
                />
            </View>
        );
    }
}



