import { Box, Button, Typography } from "@mui/material";
import AppBarComp from "../../../components/AppBar";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import maintenance from "../../../assets/maintenance-web.json";
import { useNavigate } from "react-router-dom";
import Copyright from "../../../components/Footer";

const Repair = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBarComp title="500 {perbaikan}" />
      <Box sx={{ p: 2, m: 2, boxShadow: 4, borderRadius: 5 }}>
        <Typography sx={{ textAlign: "center" }} variant="h6">
          masih dalam perbaikan
        </Typography>
        <Lottie
          loop
          animationData={maintenance}
          play
          style={{ width: "80%" }}
        />
        <Button
          onClick={() => navigate("/")}
          sx={{ width: "80%", m: { xs: 1, md: 3 } }}
          variant="contained"
        >
          Kembali
        </Button>
      </Box>
      <Copyright />
    </div>
  );
};

export default Repair;
