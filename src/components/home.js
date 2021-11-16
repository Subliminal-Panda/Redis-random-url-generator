import React, { useState, useEffect } from 'react';

export default function Home(props) {

    const {  } = props;

    const [ allUrlKeys, setAllUrlKeys ] = useState([])
    const [ formattedUrlKeys, setFormattedUrlKeys ] = useState([])

    const getAllUrlKeys = () => {
        fetch('http://127.0.0.1:5000/url/get'
        ).then(res => res.json()
        ).then(resData => setAllUrlKeys(resData)
        ).catch(err => console.log("Error with getting keys/url's.", err));
    }

    useEffect(() => {
        getAllUrlKeys();
        separateUrlKeys(allUrlKeys);
    },[])
    useEffect(() => {
        separateUrlKeys(allUrlKeys);
    },[allUrlKeys])

    const separateUrlKeys = (keys) => {
        const formattedKeys = []
        keys.forEach((k) => {
            formattedKeys.push(
            <div>
                Key: {k}
            </div>
            )
        })
        setFormattedUrlKeys(formattedKeys)
    }

    return (
        <div className="home">
            <h1>Home Page Component</h1>
            <h2>URL keys: {formattedUrlKeys}</h2>
        </div>
    )
}
