const initialState = {
  categories: [],
};
const checkStatus = 'checkStatus';

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: 'Under construction!',
      };
    default:
      return state;
  }
};

const checkStatusAction = () => ({
  type: checkStatus,
});

export { checkStatusAction };
export default categoryReducer;
