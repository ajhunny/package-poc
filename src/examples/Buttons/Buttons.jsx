import React from 'react';
import { OutlinedButton, PrimaryButton } from '../../components';

const Buttons = () => (
    <div>
        <PrimaryButton onClick={() => { console.log('Button Clicked') }} >Submit</PrimaryButton>
        <OutlinedButton onClick={() => { alert('Yessss !!!!') }}>Testing</OutlinedButton>
    </div>
);

export default Buttons;