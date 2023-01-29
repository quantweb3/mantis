import { Grid } from '@mui/material';
import { Button, Checkbox } from 'antd';
import axios from 'axios';
import SearchInput from 'components/AntdRefine/SearchInput';
import * as echarts from 'echarts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openDrawer } from 'store/reducers/menu';

const ZenConfig = () => {
    const dispatch = useDispatch();

    const [stockCode, setStockCode] = useState();

    const frequencyOptions = ['1m', '5m', '15m', '30m', '60m', '120m', 'd', 'w', 'm', 'y'];

    const [samplefrequency, setSamplefrequency] = useState([]);

    const clearAllCharts = () => {
        frequencyOptions.forEach((item, index) => {
            document.getElementById('stock_' + item).setAttribute('style', 'display:block;height:2px');
            let myChart = echarts.init(document.getElementById('stock_' + item));
            myChart.clear();
            myChart.dispose();
        });
    };

    const showChart = (divid, echartOption) => {
        document.getElementById(divid).setAttribute('style', 'display:block;height:500px');
        let myChart = echarts.init(document.getElementById(divid));
        myChart.setOption(echartOption);

        window.addEventListener('resize', function () {
            myChart.resize();
        });
    };

    const BatchZenChart = async () => {
        dispatch(openDrawer({ drawerOpen: false }));
        clearAllCharts();
        console.log('BatchZenChart', stockCode);

        const recipeUrl = '/stock/kline';
        let cfgdata = { code: stockCode, frequencys: samplefrequency };
        const response = await axios.post(recipeUrl, cfgdata);
        let charts = response.data.charts;
        charts.forEach((item, index) => {
            let klinedata = item.chart;
            // eslint-disable-next-line
            var re_obj = new Function('return ' + klinedata)();
            re_obj.backgroundColor = '#333333';
            showChart('stock_' + item.frequency, re_obj);
        });
    };

    const onChange = (e) => {
        console.log('checked = ', e.target);
        if (e.target.checked) {
            samplefrequency.push(e.target.frequency);
        } else {
            samplefrequency.splice(samplefrequency.indexOf(e.target.frequency), 1);
        }

        samplefrequency.sort(function (a, b) {
            return frequencyOptions.indexOf(a) - frequencyOptions.indexOf(b);
        });

        setSamplefrequency(samplefrequency);
    };

    const renderCheckbox = () => {
        let frs = [];
        frequencyOptions.forEach((item, index) => {
            frs.push(
                <Checkbox frequency={item} onChange={onChange} key={index}>
                    {item}
                </Checkbox>
            );
        });
        return frs;
    };

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <div style={{ paddingBottom: '6px' }}>
                    <SearchInput
                        value={stockCode}
                        placeholder="输入股票代码"
                        onChange={(newValue) => {
                            setStockCode(newValue);
                        }}
                        style={{
                            width: 200,
                            marginRight: '10px'
                        }}
                    />

                    {renderCheckbox()}
                    <Button type="primary" onClick={() => BatchZenChart()}>
                        Zen
                    </Button>
                </div>

                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_1m"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_5m"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_15m"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_30m"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_60m"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_120m"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_d"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_w"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_m"></div>
                <div style={{ width: '1600px', height: '20px' }} className="stockEchart" id="stock_y"></div>
            </Grid>
        </Grid>
    );
};

export default ZenConfig;
