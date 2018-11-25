import {
  SET_LOGIN_DATA,
  VERIFY_CODE_POST_HAS_ERROR,
  LOGIN_POST_HAS_ERROR,
  SET_IS_APP_LOADING,
  SET_GLUCOSE_STATUS
} from "../types";
import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Cache-Control"] = "no-cache";

export function setGlucoseStatus(status) {
  return {
    type: SET_GLUCOSE_STATUS,
    payload: status
  };
}

export function SaveUserData(data) {
  return {
    type: SET_LOGIN_DATA,
    payload: data
  };
}

export const setIsAppLoading = isLoading => {
  return {
    type: SET_IS_APP_LOADING,
    payload: isLoading
  };
};

export const isCodeIncorrect = isIncorrect => {
  return {
    type: VERIFY_CODE_POST_HAS_ERROR,
    payload: isIncorrect
  };
};

export const loginPostHasError = hasError => {
  return {
    type: LOGIN_POST_HAS_ERROR,
    payload: hasError
  };
};

export function postLoginData(email, password) {
  return async dispatch => {
    dispatch(setIsAppLoading(true));

    try {
      const response = await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        url: "https://...",
        data: {
          email: email,
          password: password
        }
      });

      if (response.data.status === "successful") {
        dispatch(isCodeIncorrect(false));
        dispatch(SaveUserData({ ...response }));
      } else if (response.data.status === "error") {
        dispatch(isCodeIncorrect(true));
      }

      dispatch(loginPostHasError(false));
      dispatch(setIsAppLoading(false));
    } catch (error) {
      dispatch(loginPostHasError(true));
      dispatch(setIsAppLoading(false));
    }
  };
}

export function postToGetGranpaList() {
  return async dispatch => {
    dispatch(setIsAppLoading(true));
    try {
      const response = await axios("http://localhost:3000/api/v1/elders");
      if (response.status === 200) {
        dispatch(isCodeIncorrect(false));
        dispatch(SaveUserData(response.data));
      } else {
        dispatch(isCodeIncorrect(true));
      }

      dispatch(loginPostHasError(false));
      dispatch(setIsAppLoading(false));
    } catch (error) {
      dispatch(loginPostHasError(true));
      dispatch(setIsAppLoading(false));
    }
  };
}
