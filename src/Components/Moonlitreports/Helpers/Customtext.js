import React from 'react';

const Customtext = ({ label, name, value, OnChange, handleFocus, Placeholder }) => {
  return (
    <>         
        <tr>
            <td><label htmlFor={name}>{label}</label></td>
            <td><input type="text" name={name} value={value} onChange={OnChange} onFocus={handleFocus} placeholder={Placeholder}/></td>
        </tr>
    </>
  );
};

export default Customtext;