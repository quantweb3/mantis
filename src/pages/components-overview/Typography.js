import React from 'react';
import { Button } from 'antd';
import axios from 'axios';
import * as echarts from 'echarts';
import 'antd/dist/antd.css';
import { Grid, Typography } from '@mui/material';

const ComponentTypography = () => {
    const initCharts = (echartOption) => {
        let myChart = echarts.init(document.getElementById('myChart'));
        myChart.setOption(echartOption);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    };

    const KchartsLocal = async () => {
        const recipeUrl = 'http://127.0.0.1:3001/stock/kline';
        let cfgdata = { code: 'SH.000001', frequency: '120m' };
        const response = await axios.post(recipeUrl, cfgdata);

        let klineData = response.data._container[0];
        // console.log(response.data._container[0])

        var re_obj = new Function('return ' + klineData)();
        console.log(re_obj);
        re_obj.backgroundColor = '#333333';
        initCharts(re_obj);
    };

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <div style={{ paddingBottom: '6px' }}>
                    <Button type="primary" onClick={() => KchartsLocal()}>
                        Local
                    </Button>
                </div>
                <div style={{ border: '1px solid red', width: '1600px', height: '1200px' }} id="myChart"></div>
            </Grid>
        </Grid>
    );
};

export default ComponentTypography;
