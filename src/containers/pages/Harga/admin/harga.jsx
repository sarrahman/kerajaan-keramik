import { Box ,Button } from "@mui/material";
import AppBarComp from "../../../../components/AppBar";
import TableAdmin from "../../../../components/Table/admin/Table";
import { connect } from "react-redux";
import { getProductsApi } from "../../../../redux/actions/products/index.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mr: { xs: 1, md: 3 },
          mt: { xs: 1, md: 3 },
        }}
      >
        <Button variant="contained" onClick={() => navigate("/product")} color="primary">
            Produk Baru
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
