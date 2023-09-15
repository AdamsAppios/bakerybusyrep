const ResetBills = ({ dispatch }) => {
    const handleClick = () => {
        dispatch({ type: 'reset' });
    };
  return (
    <button onClick={handleClick}>
      Erase Money
    </button>
  );
};

export default ResetBills;
  
  
  
  