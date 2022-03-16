import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ButtonLoading from "../ButtonLoading";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function FormOngkir(props) {
  const [value, setValue] = useState({
    nama: "",
    harga: null,
    isPromo: false,
  });

  const handleClick = () => {
    props.onSubmit(value);
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      isPromo: e.target.checked,
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(n) => {
              setValue({
                ...value,
                nama: n.target.value,
              });
            }}
            id="nama"
            name="nama"
            label="Nama Product"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(n) => {
              setValue({
                ...value,
                harga: n.target.value,
              });
            }}
            required
            id="harga"
            name="harga"
            label="Harga"
            type="number"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch onChange={handleChange} />}
            label="Promo"
          />
        </Grid>
      </Grid>
      <ButtonLoading
        statusLoading={props.isLoading}
        title="Submit"
        onClick={handleClick}
      />
    </React.Fragment>
  );
}
