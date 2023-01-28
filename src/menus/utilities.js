// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
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

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: '股票',
            type: 'item',
            url: '/Stock',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-color',
            title: '期货',
            type: 'item',
            url: '/feature',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'util-shadow',
            title: '回测',
            type: 'item',
            url: '/stockBackTest',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'ant-icons',
            title: 'Ant Icons',
            type: 'item',
            url: '/icons/ant',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
