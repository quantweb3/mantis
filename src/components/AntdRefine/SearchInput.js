import React from 'react';
import { Select } from 'antd';
import { useState } from 'react';
let timeout;
let currentValue;

const remoteFetch = (value, callback) => {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;
    const fake = () => {
        fetch(`http://127.0.0.1:8000/search_code?market=a&query=${value}`)
            .then((response) => response.json())
            .then((stocks) => {
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
    timeout = setTimeout(fake, 300);
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
