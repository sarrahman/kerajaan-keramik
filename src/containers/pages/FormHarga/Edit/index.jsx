import AppBarComp from "../../../../components/AppBar";
import Footer from "../../../../components/Footer";
import FormProduct from "../../../../components/FormProduct";
import { Box, Collapse } from "@mui/material";
import { connect } from "react-redux";
import {
  getProductByIdApi,
  updateProductApi,
} from "../../../../redux/actions/products";
import { useState, useEffect } from "react";
import AlertComp from "../../../../components/Alert";
import { useNavigate, useParams } from "react-router-dom";

const EditHarga = (props) => {
  const { id } = useParams();
  const [value, setValue] = useState({
    nama: "",
    harga: "",
    isPromo: false,
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    props
      .getProduct(id)
      .then((res) =>
        setValue({
          nama: res.data.nama,
          harga: res.data.harga,
          isPromo: res.data.isPromo,
        })
      )
      .catch((err) => console.log(err));
  }, [id, props]);

  const handleSubmit = (product) => {
    props
      .editProduct(product, id)
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
        <FormProduct
          onSubmit={handleSubmit}
          nama={value.nama}
          harga={value.harga}
          isPromo={value.isPromo}
        />
      </Box>
      <Footer />
    </div>
  );
};

const reduxActions = (dispatch) => ({
  editProduct: (product, id) => dispatch(updateProductApi(product, id)),
  getProduct: (id) => dispatch(getProductByIdApi(id)),
});

export default connect(null, reduxActions)(EditHarga);
