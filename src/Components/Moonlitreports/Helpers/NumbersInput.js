import React from 'react';

const NumbersInput = ({ label, name, value, onChange, handleFocus, handleKeyPress, Placeholder }) => {
  return (
    <>         
        <tr>
          <td><label htmlFor={name}>{label}</label></td>
          <td><input type="number" id={name} name={name} value={value} onFocus={handleFocus} onChange={onChange} onKeyPress={handleKeyPress} placeholder={Placeholder}
          style={{ width: 200 || '100%' }} /></td>
        </tr>
    </>
  );
};

export default NumbersInput;