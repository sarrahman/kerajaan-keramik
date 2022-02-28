import { Box, Button, Typography } from "@mui/material";
import AppBarComp from "../../../components/AppBar";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import webError from "../../../assets/website-error-animation.json";
import { useNavigate } from "react-router-dom";
import Copyright from "../../../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBarComp title="404 {Not Found}" />
      <Box sx={{ p: 2, m: 2, boxShadow: 4, borderRadius: 5 }}>
        <Typography sx={{ textAlign: "center" }} variant="h6">
          Kamu Tersesat
        </Typography>
        <Lottie loop animationData={webError} play style={{ width: "80%" }} />
        <Button
          onClick={() => navigate("/")}
          sx={{ width: "80%", m: { xs: 1, md: 3 } }}
          variant="contained"
        >
          Yuk Pulang !
        </Button>
      </Box>
      <Copyright />
    </div>
  );
};

export default NotFound;
