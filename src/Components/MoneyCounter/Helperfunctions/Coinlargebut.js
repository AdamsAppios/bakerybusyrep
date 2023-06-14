const Coinlargebut = ({ handleIncrement, largeButton }) => {
  return (
    <div id="largestbuttonever" onClick={(e) => handleIncrement(1)}>
      {largeButton}
    </div>
  );
};

export default Coinlargebut;
