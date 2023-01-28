import { Grid } from '@mui/material';
import { Button } from 'antd';
import 'dayjs/locale/zh-cn';
import { useRef } from 'react';
import BackTestConfigure from './BackTestConfigure';
import './stockEchart.css';

const ComponentStock = () => {
    const myRef = useRef();

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <BackTestConfigure ref={myRef} />
                <Button style={{ marginTop: '10px' }} type="primary" size="small" onClick={() => myRef.current.returnCfg()}>
                    回测
                </Button>
            </Grid>
        </Grid>
    );
};

export default ComponentStock;
