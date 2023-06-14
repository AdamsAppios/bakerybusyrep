import React from "react";


const TextareaInput=({label, Placeholder, hschange, name, Value ,handleFocus}) =>{

  return (
    <>
        <tr>
            <td><label htmlFor="textarea">{label}:</label></td>
            <td><textarea
                    placeholder={Placeholder}
                    name={name}
                    value={Value}
                    rows={6}
                    cols={30}
                    onChange={hschange}
                />
            </td>
       </tr>
    </>
  );
}

export default TextareaInput;