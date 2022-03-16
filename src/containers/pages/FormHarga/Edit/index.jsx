import AppBarComp from "../../../../components/AppBar";
import Footer from "../../../../components/Footer";
import FormProduct from "../../../../components/FormProduct";
import { Box } from "@mui/material";

const EditHarga = () => {
  const handleSubmit = (data) => {
    console.log(data);
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
        <FormProduct onSubmit={handleSubmit} />
      </Box>

      <Footer />
    </div>
  );
};

export default EditHarga;
