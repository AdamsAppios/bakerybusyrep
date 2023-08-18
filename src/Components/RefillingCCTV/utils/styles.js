const bodyStyle = {
    backgroundColor: state.isBlue ? 'blue' : (state.isRed ? 'red' : state.originalBackgroundColor),
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
};

const inputGroupStyle = {
    margin: '10px 0',  // this adds 10px margin to the top and bottom
};

const radioButtonContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    margin: '10px 0',
};

const buttonGroupStyle = {
    display: 'flex',
    gap: '10px',
    margin: '10px 0',
};

