import React from 'react'
import { useState } from 'react';

const AddItem = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('is your friend');
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          onAdd({ name, text });
          setName('');
        }
      }
    return (
        <div className='add-form'>
            <div className='form-control'>
                <input type='text' placeholder='Enter your friend name' value={name} 
                onChange={(e) => setName(e.target.value)} onKeyDown={handleKeyDown}  />
            </div>
        </div>
    )
}

export default AddItem;
