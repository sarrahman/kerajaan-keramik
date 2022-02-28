import { Fragment } from "react";
import { Typography, Skeleton } from "@mui/material";
import NumberFormat from "react-number-format";

function OngkirDetail(props) {
  if (props.statusLoading) {
    return (
      <Fragment>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Typography variant="h5" gutterBottom>
          Ongkos Kirim :
          <NumberFormat
            value={props.ongkir}
            displayType={"text"}
            thousandSeparator={true}
            prefix={" Rp. "}
          />
        </Typography>
        <Typography variant="subtitle1">
          Alamat tujuan: {props.alamat}
        </Typography>
        <Typography variant="subtitle1">
          Radius Jarak : {props.jarak} KM
        </Typography>
      </Fragment>
    );
  }
}

export default OngkirDetail;
