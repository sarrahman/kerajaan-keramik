import axios from "axios";

export const getProductsApi = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://backend-kerajaan-keramik.vercel.app/api/v1/products")
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
        `https://backend-kerajaan-keramik.vercel.app/api/v1/product/${id}`
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addProductApi = (product) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://backend-kerajaan-keramik.vercel.app/api/v1/product",
        product
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateProductApi = (product, id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `https://backend-kerajaan-keramik.vercel.app/api/v1/product/${id}`,
        product
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteProductApi = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `https://backend-kerajaan-keramik.vercel.app/api/v1/product/${id}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      }
      );
  });
};
