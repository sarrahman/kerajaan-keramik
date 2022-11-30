import { Box ,Button, AlertTitle, Alert } from "@mui/material";
import AppBarComp from "../../../../components/AppBar";
import TableAdmin from "../../../../components/Table/admin/Table";
import { connect } from "react-redux";
import { getProductsApi } from "../../../../redux/actions/products/index.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../../components/Footer";
import AddIcon from '@mui/icons-material/Add';

const HargaAdmin = (props) => {
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
        <Alert sx={{
    m: 2
    }} severity="error">
  <AlertTitle>Free dynos are no longer available</AlertTitle>
 As of November 28th, 2022, Heroku started converting all free dynos to Eco and scaling them to 0. To ensure your apps continue to run, upgrade to Eco or another paid plan — <strong>salesforce team</strong>
</Alert>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mr: { xs: 1, md: 3 },
          mt: { xs: 1, md: 3 },
        }}
      >
        <Button variant="contained" onClick={() => navigate("/product")} color="primary">
            <AddIcon /> Produk Baru
        </Button>
      </Box>
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
        <TableAdmin data={data} />
      </Box>
      <Footer />
    </div>
  );
};

const reduxState = (state) => ({
  isLogin: state.isLogin,
});

const reduxAction = (dispatch) => ({
  getDataProducts: () => dispatch(getProductsApi()),
});

export default connect(reduxState, reduxAction)(HargaAdmin);
