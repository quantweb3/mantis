// assets
import {
    AntDesignOutlined,
    AppstoreAddOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const configs = {
    id: 'zenconfig',
    title: '配置',
    type: 'group',
    children: [
        {
            id: 'zen-config',
            title: 'Zen配置',
            type: 'item',
            url: '/ZenConfig',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-color',
            title: '策略',
            type: 'item',
            url: '/Stragegy',
            icon: icons.BgColorsOutlined
        }
    ]
};

export default configs;
