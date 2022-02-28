import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../../components/Footer";
import { LoginApi } from "../../../redux/actions/auth";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AlertComp from "../../../components/Alert";
import Collapse from "@mui/material/Collapse";
import Logo from "../../../assets/logo.png";

const theme = createTheme();

function Login(props) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props
      .loginUser({
        username: data.get("username"),
        password: data.get("password"),
      })
      .then((res) => {
        if (res.status === 200) {
          setStatus(true);
          setShow(true);
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      });
      setTimeout(() => {
        setShow(true);
      }, 800);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} style={{width: '120px'}} alt="logo" />
          <Typography component="h1" variant="h5">
            Masuk
          </Typography>
          <Collapse in={show}>
            <AlertComp status={status} />
          </Collapse>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
              <Button onClick={() => navigate('/register')} variant="text">
                Belum Punya Akun? Daftar
              </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

const reduxState = (state) => ({
  isLogin: state.isLogin,
});

const reduxActions = (dispatch) => ({
  loginUser: (data) => dispatch(LoginApi(data)),
});

export default connect(reduxState, reduxActions)(Login);
