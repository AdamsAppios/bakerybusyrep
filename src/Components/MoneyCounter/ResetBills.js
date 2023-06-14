const ResetBills = ({ state, dispatch }) => {
    const handleClick = () => {
        dispatch({ type: 'reset' });
    };
  return (
    <button onClick={handleClick}>
      Clear State
    </button>
  );
};

export default ResetBills;
  
  
  
  