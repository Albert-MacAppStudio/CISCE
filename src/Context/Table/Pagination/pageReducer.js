import {
  NEXT_PAGE,
  PREVIOUS_PAGE,
  UPDATE_CURRENT_PAGE,
  UPDATE_PAGE_LENGTH,
  UPDATE_PAGE_SIZE,
} from "./pageConstants";

const pageReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PAGE_SIZE:
      return { ...state, size: action.payload };
    case UPDATE_PAGE_LENGTH:
      return { ...state, length: action.payload };
    case UPDATE_CURRENT_PAGE:
      return { ...state, current: action.payload };
    case NEXT_PAGE:
      return { ...state, current: state.current + action?.size };
    case PREVIOUS_PAGE:
      return { ...state, current: state.current - action?.size };
    default:
      return state;
  }
};

export default pageReducer;
