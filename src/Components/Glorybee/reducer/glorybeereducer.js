const defaultNames = ["Sales","1.5", "12oz", "C2 Big", "C2 Small", "Charda", "Cobra", "Coffee", "Drinks", "Gatorade", "Ice-cream", "Md", "Nss", "Nsb", "Swakto"];

//export this to other react classes
export const getDefaultValues = () => {
  let defaultValues = {};
  defaultNames.forEach((name, index) => {
    defaultValues[`name${index}`] = name;
  });
  return defaultValues;
};

const initialInputBoxesSales = Array(defaultNames.length).fill().map((_, index) => ({ id: index + 1 }));
const initialInputBoxesExpenses = [...Array(23)].map((_, index) => ({ id: index + 1 }));

export const initialState = {
  activeTab: 1,
  stringSales: '',
  stringExpenses: '',
  inputBoxesSales: initialInputBoxesSales,
  valuesSales: getDefaultValues(),
  totalAmountSales: 0,
  inputBoxesExpenses: initialInputBoxesExpenses,
  valuesExpenses: {},
  totalAmountExpenses: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    case 'SET_STRING_SALES':
      return { ...state, stringSales: action.payload };
    case 'SET_STRING_EXPENSES':
      return { ...state, stringExpenses: action.payload };
    case 'SET_INPUT_BOXES_SALES':
      return { ...state, inputBoxesSales: action.payload };
    case 'SET_VALUES_SALES':
      return { ...state, valuesSales: action.payload };
    case 'SET_VALUES_EXPENSES':
      return { ...state, valuesExpenses: action.payload };
    case 'SET_TOTAL_AMOUNT_SALES':
      return { ...state, totalAmountSales: action.payload };
    case 'SET_INPUT_BOXES_EXPENSES':
      return { ...state, inputBoxesExpenses: action.payload };
    case 'SET_TOTAL_AMOUNT_EXPENSES':
      return { ...state, totalAmountExpenses: action.payload };
    case 'SET_ERASE_EXPENSES':
      return {...state, stringExpenses: '', inputBoxesExpenses: initialInputBoxesExpenses, valuesExpenses: {}, totalAmountExpenses: 0, };
    case 'SET_ERASE_SALES':
        return {...state, stringSales: '', inputBoxesSales: initialInputBoxesSales,  valuesSales: getDefaultValues(), totalAmountSales: 0, };
    default:
      return state;
  }
};