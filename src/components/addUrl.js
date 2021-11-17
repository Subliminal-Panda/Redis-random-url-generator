import React, { useState } from 'react';

export default function addUrl(props) {

    const { handleSubmitReload } = props;
    const [ urlInput, setUrlInput ] = useState('');

    const handleSubmit = () => {
        fetch("http://127.0.0.1:5000/url/add", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({ "url" : urlInput})
        }
        ).then(res => res.json()
        ).then(data => {
            handleSubmitReload();
            setUrlInput('');
        }).catch(error => {
            console.log("Error occurred during post request:", error);
        })
    }

    const handleChange = (event) => {
        setUrlInput(event)
    }

    return (
        <div className="ClassName">
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder="URL" value={urlInput} onChange={(event) => handleChange(event.target.value)}></input>
                <button type="submit" >Submit Url</button>
            </form>
        </div>
    )
}
