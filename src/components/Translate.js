import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const label = "Choose Language";
const options = [
    {
        label: "Afrikaas",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
];

const Translate = () => {
    const [selected, setSelected] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text"  />
                </div>
            </div>
            <Dropdown 
                label={label}
                options={options} 
                selected={selected}
                onSelectedChange={setSelected} 
            />
            <Convert language={selected.value} text={text}/>
        </div>
    );
}

export default Translate;