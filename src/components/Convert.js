import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translation, setTranslation] = useState('');
    const [debouncedText, setdebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebouncedText(text);
        },1000)
        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
            {},
            {
                params: {
                    q: debouncedText,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            setTranslation(data.data.translations[0].translatedText); 
        };


        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translation}</h1>
        </div>
    );
}

export default Convert;