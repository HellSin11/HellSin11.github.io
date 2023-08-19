import React, {useEffect, useState } from 'react';
import MyInput from "./UI/Input/MyInput";

const SearchForm = ({ fetchUserAndRepos }) => {
    const [query, setQuery] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(null);

    useEffect(() => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        const timeout = setTimeout(() => {
            fetchUserAndRepos(query);
        }, 500); // Затримка в 1 секунду

        setTypingTimeout(timeout);
    }, [query]);

    return (
        <form onSubmit={e => e.preventDefault()}>
            <MyInput
                onChange={e => setQuery(e.target.value)}
                type='text'
                placeholder='Enter profile name...'
            />
        </form>
    );
};

export default SearchForm;
