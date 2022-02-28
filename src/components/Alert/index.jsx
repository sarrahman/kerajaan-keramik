import { Alert, AlertTitle } from "@mui/material";

const AlertComp = (props) => {
  if (props.status) {
    return (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Welcome ! <strong>Kamu Berhasil Masuk</strong>
      </Alert>
    );
  }

  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Maaf ya ! <strong>Kamu Gagal Masuk</strong>
    </Alert>
  );
};

export default AlertComp;
