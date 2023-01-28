import { Card, Collapse, DatePicker, Form, Select, Space } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import SearchInput from 'components/AntdRefine/SearchInput';
import 'dayjs/locale/zh-cn';
import React, { useImperativeHandle, useState } from 'react';
import './stockEchart.css';
const { Panel } = Collapse;

const { RangePicker } = DatePicker;

const BackTestConfigure = React.forwardRef((props, ref) => {
    const [stockCode, setStockCode] = useState('');
    const [market, setMarket] = useState('sh');
    const [dateRange, setDateRange] = useState([]);
    const [form] = Form.useForm();

    useImperativeHandle(ref, () => ({
        returnCfg() {
            returnCfg();
        }
    }));

    const onChangeMarket = (value) => {
        setMarket(value);
    };

    function returnCfg() {
        let _cfg = { stockCode: stockCode, market: market, dateRange: dateRange };
        console.log(_cfg);
        return _cfg;
    }

    function onChangeDateRange(date, range) {
        console.log(date);
        console.log(range);
        setDateRange(range);
    }

    const text = 'aaa';

    return (
        <Card
            title="回测配置:"
            bordered={false}
            style={{
                width: 1200
            }}
        >
            <Form
                layout={'inline'}
                form={form}
                size={'small'}
                initialValues={{
                    layout: 'inline'
                }}
                style={{
                    maxWidth: 1200
                }}
            >
                <Form.Item label="市场">
                    <Select
                        style={{
                            width: 100
                        }}
                        placeholder="选择市场"
                        optionFilterProp="children"
                        onChange={onChangeMarket}
                        options={[
                            {
                                value: '股票',
                                label: '股票'
                            },
                            {
                                value: '期货',
                                label: '期货'
                            },
                            {
                                value: 'Crypto',
                                label: 'Crypto'
                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item label="代码">
                    <SearchInput
                        value={stockCode}
                        placeholder="输入代码"
                        onChange={(newValue) => {
                            setStockCode(newValue);
                        }}
                        style={{
                            width: 200
                        }}
                    />
                </Form.Item>
                <Form.Item label="日期范围">
                    <Space direction="vertical" size={12}>
                        <RangePicker onChange={onChangeDateRange} locale={locale} />
                    </Space>
                </Form.Item>
            </Form>
            <Collapse ghost style={{ marginTop: '4px' }} accordion>
                <Panel header="更多配置" key="1">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </Card>
    );
});

export default BackTestConfigure;
