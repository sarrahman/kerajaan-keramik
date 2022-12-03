import axios from "axios";

export const getOngkirApi = (data) => (dispatch) => {
  dispatch({
    type: "LOADING",
    value: true,
  });
  return new Promise((resolve, reject) => {
    let tujuan = "";

    let { alamat, cabang, kecamatan, kota, qty } = data;

    if (cabang === "remaja") {
      cabang = "-0.476863, 117.165573";
    } else if (cabang === "AWS") {
      cabang = "-0.451947, 117.141021";
    } else if (cabang === "pelita") {
      cabang = "-0.482450, 117.163399";
    } else if (cabang === "sambutan") {
      cabang = "-0.507769, 117.168949";
    } else if(cabang === 'sebrang'){
      cabang = "-0.516372, 117.124765";
    }else{
      cabang = "-0.476863, 117.165573";
    }

    if (kecamatan === "") {
      tujuan = `${alamat}, ${kota}`;
    } else {
      tujuan = `${alamat}, ${kecamatan}, ${kota}`;
    }

    axios
      .post("https://backend-kerajaan-keramik.vercel.app/api/v1/ongkir", {
        cabang,
        tujuan,
        qty,
      })
      .then((res) => {
        dispatch({
          type: "LOADING",
          value: false,
        });
        const data = res.data;
        let newData = {
          ...data,
          cabang
        }
        resolve(newData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
