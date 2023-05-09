import { useState } from 'react'

const useInput = (inputValue: string) => {
    const [value, setValue] = useState(inputValue);
    const [error, setError] = useState('');

    const onChange = (value: string) => {
        setValue(value);
        value.length === 0 ? setError('The field cannot be empty') : setError('');
    }

    return {
        value, 
        onChange, 
        error, 
        setError
    }
}

export default useInput;