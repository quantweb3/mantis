import AxiosV2 from '@api/http';
import { Grid } from '@mui/material';
import { Button } from 'antd';
import 'dayjs/locale/zh-cn';
import { useRef } from 'react';
import BackTestConfigure from './BackTestConfigure';
import './stockEchart.css';

const ComponentStock = () => {
    const myRef = useRef();

    const handleBackTest = async () => {
        let btcfg = myRef.current.returnCfg();
        console.log('handleBackTest');

        const recipeUrl = '/bttest/bttestChart';
        const response = await AxiosV2.post(recipeUrl, btcfg);
        console.log('res', response);
    };

    function Iframe(props) {
        return <div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }} />;
    }

    const demo =
        '<iframe width="100%" height="1200px" scrolling="no" frameborder="no"   src="http://127.0.0.1:3001/public/abc.html"></iframe>';

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <BackTestConfigure ref={myRef} />
                <Button style={{ marginTop: '10px' }} type="primary" size="small" onClick={handleBackTest}>
                    回测
                </Button>
                <Iframe iframe={demo} />
            </Grid>
        </Grid>
    );
};

export default ComponentStock;
