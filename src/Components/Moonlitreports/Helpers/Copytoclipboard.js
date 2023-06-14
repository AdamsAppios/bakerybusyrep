import React, { useRef } from 'react';

function Copytoclipboard({stringReport, handleEraseAll, copyButtonLabel, eraseButtonLabel}) {
  const textAreaRef = useRef(null);

  const handleCopy = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <>         
      <tr>
      <textarea ref={textAreaRef} placeholder="Type here to copy" rows="7" cols="60" value={stringReport} /><br />
      <br /><button onClick={handleCopy}>{copyButtonLabel}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleEraseAll}>{eraseButtonLabel}</button><br />
      </tr>
    </>
  );
}

export default Copytoclipboard;