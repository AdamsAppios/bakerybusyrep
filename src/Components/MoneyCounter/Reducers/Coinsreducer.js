export const initialCoinsState = {
  largeButton: 0,
  multiple: 10,
  indexMultiple: 1,
  arrayMultiple: [5, 10, 50, 100],
};
export const coinsReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, ...action.payload };
    case "textChanged":
      return { ...state, ...action.payload };
    case "setMultiple":
      return { ...state, ...action.payload };
    case "reset":
      return { ...state, ...initialCoinsState };
  }
};
