import { AreaChartOutlined, DownCircleOutlined } from '@ant-design/icons';
import AxiosV2 from '@api/http';
import { Grid } from '@mui/material';
import { Button, Collapse } from 'antd';
import 'dayjs/locale/zh-cn';
import { useRef } from 'react';
import BackTestConfigure from './BackTestConfigure';

import './stockEchart.css';
const { Panel } = Collapse;

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
        '<iframe src="http://127.0.0.1:3001/public/abc.html" frameborder="0" style="height:1200px;width:100%" height="100%" width="100%"></iframe>';

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Collapse
                    expandIcon={() => {
                        return <DownCircleOutlined style={{ fontSize: '20px', color: '#1B2631' }} />;
                    }}
                    defaultActiveKey={['1']}
                >
                    <Panel showArrow={true} header="BackTest配置..." key="2">
                        <BackTestConfigure ref={myRef} />
                    </Panel>
                </Collapse>

                <Button
                    icon={<AreaChartOutlined />}
                    onClick={handleBackTest}
                    style={{ color: '#1B2631', marginTop: '5px', marginBottom: '5px' }}
                    size="small"
                >
                    回测
                </Button>
                <Iframe iframe={demo} />
            </Grid>
        </Grid>
    );
};

export default ComponentStock;
