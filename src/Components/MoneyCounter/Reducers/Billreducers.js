export const initialBillState = {
  val1: 0,
  val5: 0,
  val10: 0,
  val20: 0,
  val50: 0,
  val100: 0,
  val200: 0,
  val500: 0,
  val1000: 0,
  totalCash: 0,
};

export const billreducer = (state, action) => {
  switch (action.type) {
    case "ch1":
      return { ...state, val1: action.value };
    case "ch5":
      return { ...state, val5: action.value };
    case "ch10":
      return { ...state, val10: action.value };
    case "ch20":
      return { ...state, val20: action.value };
    case "ch50":
      return { ...state, val50: action.value };
    case "ch100":
      return { ...state, val100: action.value };
    case "ch200":
      return { ...state, val200: action.value };
    case "ch500":
      return { ...state, val500: action.value };
    case "ch1000":
      return { ...state, val1000: action.value };
    case "reset":
      return initialBillState;
    default:
      return state;
  }
};
