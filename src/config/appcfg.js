let python_api_url = '';
let java_url = 'http://119.254.225.6';
let java_port = '8206';
let port = '9009';

console.log('process.env.localos', process.env);
if (process.env.localos === 'MacOS') {
    python_api_url = 'http://127.0.0.1:3001';
} else {
    python_api_url = 'http://127.0.0.1:3001';
}

const version_1 = 'v1';
const version_2 = 'v2';
let dingtalk_port = '9006';

export { version_1, version_2, python_api_url, port, java_url, java_port, dingtalk_port };
