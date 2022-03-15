import AppBarComp from "../../../components/AppBar";
import FormOngkir from "../../../components/Form";
import { Box } from "@mui/material";
import OngkirDetail from "../../../components/OngkirDetail";
import { connect } from "react-redux";
import { getOngkirApi } from "../../../redux/actions/Ongkir";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Copyright from "../../../components/Footer";

const Ongkir = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [tujuan, setTujuan] = useState("");


  const handleCheckOngkir = (data) => {
    props.getOngkir(data).then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    if (!props.isLogin) {
      navigate("/login");
    }
    if(data !== ""){
      const [alamat1, alamat2, alamat3] = data.detailTujuan;
      const tujuan = `${alamat1}, ${alamat2}, ${alamat3}`;
      setTujuan(tujuan);
    }
  }, [data, navigate, props.isLogin]);

  return (
    <div>
      <AppBarComp title="Kerajaan Keramik" />
      <Box
        sx={{
          m: { xs: 1, md: 3 },
          boxShadow: 4,
          p: { xs: 2, md: 3 },
          borderRadius: 5,
        }}
      >
        <FormOngkir
          isLoading={props.loading}
          onClick={(data) => handleCheckOngkir(data)}
        />
      </Box>
      <Box
        sx={{
          m: { xs: 1, md: 3 },
          boxShadow: 4,
          p: { xs: 2, md: 3 },
          borderRadius: 5,
        }}
      >
        <OngkirDetail
          jarak={data.jarak}
          statusLoading={props.loading}
          ongkir={data.cost}
          alamat={tujuan}
        />
      </Box>
      <Copyright />
    </div>
  );
};

const reduxState = (state) => ({
  isLogin: state.isLogin,
  loading: state.isLoading,
});

const reduxAction = (dispatch) => ({
  getOngkir: (data) => dispatch(getOngkirApi(data)),
});

export default connect(reduxState, reduxAction)(Ongkir);
