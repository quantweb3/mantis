import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { message } from 'antd';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import './loading.css';

import { python_api_url } from '@cfg/appcfg';
// 默认域名
// axios.defaults.baseURL = "http://10.26.4.123:8080/api/";
// 配置请求头
console.log('python_api_url', python_api_url);

const AxiosV2 = axios.create({
    baseURL: python_api_url, // 设置请求的base url
    timeout: 20000 // 设置超时时长
});

// AxiosV2.defaults.headers['Content-Type'] = 'application/json';

// 响应时间
AxiosV2.defaults.timeout = 10000;
//请求拦截器
AxiosV2.interceptors.request.use(
    (config) => {
        // getUser(); //获取用户信息
        showLoading(); //显示加载动画
        // if (user) {
        //     // 设置统一的请求header
        //     config.headers.authorization = user.token; //授权(每次请求把token带给后台)
        // }

        // config.headers.platform = user ? user.platform : 8; //后台需要的参数

        return config;
    },
    (error) => {
        hideLoading(); //关闭加载动画
        return Promise.reject(error);
    }
);

//响应拦截器
AxiosV2.interceptors.response.use(
    (response) => {
        hideLoading(); //关闭加载动画
        if (response.data.returnCode === '0014') {
            // 登录失效
            localStorage.clear(); // 清除缓存
            message.success({
                content: '您的登录已经失效，请重新登录',
                duration: 2
            });
            setTimeout(() => {
                //让用户从新回到登录页面
                window._ROUTER_.push('/login'); //router是在顶级入口app.js文件定义了window._ROUTER_ = this.props.history;
            }, 2000);
        }
        return response;
    },
    (error) => {
        hideLoading(); //关闭加载动画
        return Promise.resolve(error.response);
    }
);

// 显示加载动画
function showLoading() {
    let dom = document.createElement('div');
    dom.setAttribute('id', 'loading');
    document.body.appendChild(dom);
    createRoot(document.getElementById('loading')).render(
        <Box sx={{ display: 'flex' }}>
            <CircularProgress size="1.5rem" />
        </Box>
    );
}

// 隐藏加载动画
function hideLoading() {
    document.body.removeChild(document.getElementById('loading'));
}

// 处理请求返回的数据
function checkStatus(response) {
    return new Promise((resolve, reject) => {
        if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
            resolve(response.data);
        } else {
            message.success({
                content: '网络异常，请检查网络连接是否正常！',
                duration: 2
            });
        }
    });
}

export default {
    post(url, params) {
        return AxiosV2({
            method: 'post',
            url,
            data: params
        }).then((response) => {
            return checkStatus(response);
        });
    },
    get(url, params) {
        return AxiosV2({
            method: 'get',
            url,
            params
        }).then((response) => {
            return checkStatus(response);
        });
    }
};
