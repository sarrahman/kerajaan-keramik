import axios from "axios";

export const RegisterApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("https://backend-kerajaan-keramik.herokuapp.com/api/auth/register", data)
      .then((response) => {
        dispatch({
          type: "LOGIN",
          value: true,
        });
        window.localStorage.setItem("AUTH", response.status);
        resolve(response);
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN",
          value: false,
        });
        reject(error);
      });
  });
};

export const LoginApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("https://backend-kerajaan-keramik.herokuapp.com/api/auth/login", data)
      .then((response) => {
        dispatch({
          type: "LOGIN",
          value: true,
        });
        window.localStorage.setItem("AUTH", response.status);
        resolve(response);
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN",
          value: false,
        });
        reject(error);
      });
  });
};

export const logoutApi = () => (dispatch) => {
    dispatch({
      type: "LOGIN",
      value: false,
    });
    window.localStorage.removeItem("AUTH");
};
