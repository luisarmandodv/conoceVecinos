import {
  SET_LOGIN_DATA,
  VERIFY_CODE_POST_HAS_ERROR,
  LOGIN_POST_HAS_ERROR,
  SET_IS_APP_LOADING,
  SET_GLUCOSE_STATUS
} from "../types";

const INITIAL_STATE = {
  GrandpaArray: [],

  authenticationPostHasError: false,
  isAuthenticationLoading: false,
  isCodeIncorrect: false,

  glucoseStatus: "200"
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGIN_DATA: {
      return {
        ...state,
        GrandpaArray: action.payload
      };
    }
    case LOGIN_POST_HAS_ERROR:
      return { ...state, authenticationPostHasError: action.payload };
    case VERIFY_CODE_POST_HAS_ERROR:
      return { ...state, isCodeIncorrect: action.payload };
    case SET_IS_APP_LOADING:
      return { ...state, isAuthenticationLoading: action.payload };
    case SET_GLUCOSE_STATUS:
      return { ...state, glucoseStatus: action.payload };
    default:
      return state;
  }
}
