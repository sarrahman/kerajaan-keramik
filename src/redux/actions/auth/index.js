import axios from "axios";

export const RegisterApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://backend-kerajaan-keramik.vercel.app/api/auth/register",
        data
      )
      .then((response) => {
        dispatch({
          type: "LOGIN",
          value: true,
        });
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
      .post(
        "https://backend-kerajaan-keramik.vercel.app/api/auth/login",
        data
      )
      .then((response) => {
        dispatch({
          type: "LOGIN",
          value: true,
        });
        dispatch({
          type: "ADMIN",
          value: response.data.admin,
        });
        window.localStorage.setItem("AUTH", response.data.id);
        window.localStorage.setItem("ADMIN", response.data.admin);
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
  window.localStorage.removeItem("ADMIN");
};
