import { Fragment } from "react";
import { Typography, Skeleton } from "@mui/material";

function CalculatorDetail(props) {
  if (props.statusLoading) {
    return (
      <Fragment>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Typography variant="h5" gutterBottom>
          Jumlah Kebutuhan : {props.kebutuhan} Dus
        </Typography>
        <Typography variant="subtitle1">
          Diameter Ruangan: {props.diameter} M<sup>2</sup>
        </Typography>
        <Typography variant="subtitle1">
          Diameter Keramik: {props.diameterPerDus} M<sup>2</sup> / Dus
        </Typography>
        <Typography variant="subtitle1">
          Ukuran Keramik : {props.ukuran}
        </Typography>
        <Typography variant="subtitle1">
          Lembar Per Dus : {props.pcs} Lembar
        </Typography>
      </Fragment>
    );
  }
}

export default CalculatorDetail;
