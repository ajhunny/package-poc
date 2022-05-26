import React, { useState } from 'react';
import { AutoComplete } from '../../components';

const AutoCompleteSelect = () => {
    const [values, setValues] = useState({});

    const handleChange = (key, value) => {
        setValues({ [key]: value })
    }

    return (
        <div>
            <AutoComplete
                label={'Region'}
                options={['Test1', 'Test2']}
                onChange={(e, value) => handleChange('region', value)}
            />
        </div>
    )
}

export default AutoCompleteSelect;