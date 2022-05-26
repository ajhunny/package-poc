import React from 'react';
import { PrimaryButton } from '../../components';

const Buttons = () => (
    <div>
        <PrimaryButton onClick={() => { console.log('Button Clicked') }} >Submit</PrimaryButton>
    </div>
);

export default Buttons;