import React from 'react';

const Customtext = ({ label, name, value, OnChange, handleFocus, Placeholder, Type }) => {
  return (
    <>         
        <tr>
            <td><label htmlFor={name}>{label}</label></td>
            <td><input type={Type || "text"} name={name} value={value} onChange={OnChange} onFocus={handleFocus} placeholder={Placeholder}
                                style={{ width: 200 || '100%' }} /></td>
        </tr>
    </>
  );
};

export default Customtext;