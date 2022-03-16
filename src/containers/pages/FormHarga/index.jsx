import AppBarComp from "../../../components/AppBar";
import Footer from "../../../components/Footer";
import FormProduct from "../../../components/FormProduct";
import { Box, Collapse } from "@mui/material";
import { connect } from "react-redux";
import { addProductApi } from "../../../redux/actions/products";
import { useState } from "react";
import AlertComp from "../../../components/Alert";
import { useNavigate } from "react-router-dom";

const FormHarga = (props) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    props
      .addProduct(data)
      .then((res) => {
        if (res.status === 201) {
          setMessage(res.data.message);
          setStatus(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        setStatus(false);
        setMessage(err.response.data.message);
      });
  };

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
        <Collapse sx={{ mt: 1, mb: 2 }} in={message !== ""}>
          <AlertComp status={status} text={message} />
        </Collapse>
        <FormProduct onSubmit={handleSubmit} nama="" harga="" isPromo={false} />
      </Box>
      <Footer />
    </div>
  );
};

const reduxActions = (dispatch) => ({
  addProduct: (product) => dispatch(addProductApi(product)),
});

export default connect(null, reduxActions)(FormHarga);
