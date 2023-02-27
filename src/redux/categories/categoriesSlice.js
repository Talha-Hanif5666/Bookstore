const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: 'Under construction',
      };
    default:
      return state;
  }
};

export default categoryReducer;
