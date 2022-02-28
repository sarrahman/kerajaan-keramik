import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AutocompleteComp from "../AutoComplete";
import { useState } from "react";
import ButtonLoading from "../ButtonLoading";
import InputAdornment from "@mui/material/InputAdornment";

const ukuran = [
  "25 x 25",
  "30 x 30",
  "40 x 40",
  "50 x 50",
  "60 x 60",
  "20 x 40",
  "25 x 40",
  "25 x 50",
  "30 x 60",
];

const type = ["keramik lantai", "keramik dinding"];

export default function FormCalculator(props) {
  const [value, setValue] = useState({
    type: type[0],
    ukuran: ukuran[0],
    panjang: "",
    lebar: "",
    tinggi: "",
  });

  const handleClick = () => {
    props.onClick(value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Calculator
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AutocompleteComp
            nilai={(n) => {
              setValue({
                ...value,
                type: n,
              });
            }}
            label="Type"
            options={type}
          />
        </Grid>
        <Grid item xs={12}>
          <AutocompleteComp
            nilai={(n) => {
              setValue({
                ...value,
                ukuran: n,
              });
            }}
            label="Ukuran"
            options={ukuran}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="panjang"
            onChange={(n) => {
              setValue({
                ...value,
                panjang: n.target.value,
              });
            }}
            name="panjang"
            label="Panjang"
            type="number"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>
                    M<sup>2</sup>
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="lebar"
            onChange={(n) => {
              setValue({
                ...value,
                lebar: n.target.value,
              });
            }}
            name="lebar"
            label="lebar"
            type="number"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>
                    M<sup>2</sup>
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled={value.type === "keramik lantai"}
            id="tinggi"
            onChange={(n) => {
              setValue({
                ...value,
                tinggi: n.target.value,
              });
            }}
            name="tinggi"
            label="tinggi"
            type="number"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography>
                    M<sup>2</sup>
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <ButtonLoading statusLoading={props.isLoading} onClick={handleClick} />
    </React.Fragment>
  );
}
