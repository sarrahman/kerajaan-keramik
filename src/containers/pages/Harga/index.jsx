import { Alert, AlertTitle, Box } from "@mui/material";
import AppBarComp from "../../../components/AppBar";
import TableComp from "../../../components/Table";
import { connect } from "react-redux";
import { getProductsApi } from "../../../redux/actions/products/index.js";
import { useEffect, useState } from "react";
import Copyright from "../../../components/Footer";
import { useNavigate } from "react-router-dom";

const Harga = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!props.isLogin) {
      navigate("/login");
    }
    props.getDataProducts().then((res) => setData(res));
  }, [navigate, props]);

  return (
    <div>
      <AppBarComp title="kerajaan keramik" />
      <Alert severity="warning" sx={{
        mt: 2,
        mx: 2
      }}>
        <AlertTitle>Warning !</AlertTitle>
        Mulai 28 November 2022, Situs ini akan ditutup dikarenakan server tidak tersedia lagi,  Anda harus meningkatkan versi ke paket berbayar sebelum tanggal ini untuk memastikan aplikasi Anda terus berjalan dan untuk mempertahankan data Anda — <strong>Sarrahman Group</strong>
      </Alert>
      <Box
        sx={{
          display: "flex",
          m: { xs: 1, md: 3 },
          flexDirection: "column",
          boxShadow: 4,
          p: { xs: 1, md: 3 },
          borderRadius: "10px",
        }}
      >
        <TableComp data={data} />
      </Box>
      <Copyright />
    </div>
  );
};

const reduxState = (state) => ({
  isLogin: state.isLogin,
});

const reduxAction = (dispatch) => ({
  getDataProducts: () => dispatch(getProductsApi()),
});

export default connect(reduxState, reduxAction)(Harga);
