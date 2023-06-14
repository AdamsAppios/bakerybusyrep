const Coinavbar = ({ handleTextChange, handleSetMultiple, state }) => {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <span className="navbar-text">Count:</span>
        <input
          className="form-control me-2"
          type="text"
          size="5"
          id="totalCount"
          name="totalCount"
          onChange={(e) => handleTextChange(e)}
          value={state.largeButton}
        />
      <span className="navbar-text">Multiple:</span>
        <input
          className="form-control me-2"
          type="text"
          size="5"
          name="multiple"
          id="multiple"
          onChange={(e) => handleTextChange(e)}
          value={state.multiple}
        />
      <button
        type="button"
        className="btn btn-success btn-sm me-2"
        id="left"
        onClick={handleSetMultiple}
        name="btnleft"
      >
        &lt;&lt;
      </button>
      <button
        type="button"
        className="btn btn-success btn-sm me-2"
        id="right"
        name="btnright"
        onClick={handleSetMultiple}
      >
        &gt;&gt;
      </button>
      <button
        type="button"
        className="btn btn-success btn-sm"
        id="clearCnt"
        name="reset"
        onClick={handleSetMultiple}
      >
        CLR
      </button>
    </nav>
  );
};

export default Coinavbar;