import axios from "axios";

export const getProductsApi = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://backend-kerajaan-keramik.herokuapp.com/api/v1/products")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProductByIdApi = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://backend-kerajaan-keramik.herokuapp.com/api/v1/product/${id}`
      )
      .then((res) => {
        resolve(res.data);
      });
  });
};

export const addProductApi = (product) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://backend-kerajaan-keramik.herokuapp.com/api/v1/product",
        product
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      }
      );
  });
};

export const updateProductApi = (product) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        `https://backend-kerajaan-keramik.herokuapp.com/api/v1/product/${product.id}`,
        product
      )
      .then((res) => {
        resolve(res.data);
      });
  });
};

export const deleteProductApi = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `https://backend-kerajaan-keramik.herokuapp.com/api/v1/product/${id}`
      )
      .then((res) => {
        resolve(res.data);
      });
  });
};
