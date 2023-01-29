import { Select } from 'antd';
import { useState } from 'react';
let timeout;
let currentValue;

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const remoteFetch = (value, callback) => {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;
    const remoteCall = async () => {
        postData('http://127.0.0.1:3001/stock/SearchStockCode', { market: 'a', query: value }).then((response) => {
            console.log(response); // JSON data parsed by `data.json()` call
            let stocks = response.stocks;
            console.log(stocks);
            if (currentValue === value) {
                const data = stocks.map((item) => ({
                    value: item.code,
                    text: `${item.code} ${item.name}`
                }));
                callback(data);
            }
        });
    };
    timeout = setTimeout(remoteCall, 300);
};

const SearchInput = (props) => {
    const [data, setData] = useState([]);
    const [value] = useState();
    const handleSearch = (newValue) => {
        if (newValue) {
            remoteFetch(newValue, setData);
        } else {
            setData([]);
        }
    };

    return (
        <Select
            showSearch
            value={value}
            placeholder={props.placeholder}
            style={props.style}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={props.onChange}
            notFoundContent={null}
            options={(data || []).map((d) => ({
                value: d.value,
                label: d.text
            }))}
        />
    );
};
export default SearchInput;
