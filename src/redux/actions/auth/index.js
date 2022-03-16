import axios from "axios";

export const RegisterApi = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://backend-kerajaan-keramik.herokuapp.com/api/auth/register",
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
        "https://backend-kerajaan-keramik.herokuapp.com/api/auth/login",
        data
      )
      .then((response) => {
        dispatch({
          type: "LOGIN",
          value: true,
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

export const checkIsAdmin = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const id = window.localStorage.getItem("AUTH");
    axios
      .get("https://backend-kerajaan-keramik.herokuapp.com/api/v1/users")
      .then((response) => {
        // eslint-disable-next-line array-callback-return
        response.data.data.map((item) => {
          if (item.id === id) {
            dispatch({
              type: "ADMIN",
              value: item.admin,
            });
            return console.log("welcome admin");
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
