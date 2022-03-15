import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AutocompleteComp from "../AutoComplete";
import { useState } from "react";
import ButtonLoading from "../ButtonLoading";

const daftarCabang = ["remaja", "sebrang", "AWS", "sambutan", "pelita"];
const daftarKecamatan = [
  "",
  "sungai pinang",
  "sungai kunjang",
  "loa janan ilir",
  "palaran",
  "samarinda ilir",
  "samarinda kota",
  "samarinda sebrang",
  "samarinda ulu",
  "samarinda utara",
  "sambutan",
];
const daftarKota = [
  "kota samarinda",
  "kota balikpapan",
  "kota bontang",
  "kabupaten kutai kartanegara",
  "kabupaten kutai timur",
  "kabupaten berau",
  "kabupaten paser",
  "kabupaten paser utara",
  "kutai barat",
  "mahakam ulu",
];

export default function FormOngkir(props) {
  const [value, setValue] = useState({
    alamat: "",
    cabang: daftarCabang[0],
    kecamatan: daftarKecamatan[0],
    kota: daftarKota[0],
    qty: "",
  });

  const handleClick = () => {
    props.onClick(value);
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AutocompleteComp
            nilai={(n) => {
              setValue({
                ...value,
                cabang: n,
              });
            }}
            label="Toko Cabang"
            options={daftarCabang}
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        Alamat Pengiriman
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(n) => {
              setValue({
                ...value,
                alamat: n.target.value,
              });
            }}
            id="alamat"
            name="alamat"
            label="Alamat / Tempat Kirim"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AutocompleteComp
            label="kecamatan"
            nilai={(n) => {
              setValue({
                ...value,
                kecamatan: n,
              });
            }}
            options={daftarKecamatan}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AutocompleteComp
            label="kota"
            nilai={(n) => {
              setValue({
                ...value,
                kota: n,
              });
            }}
            options={daftarKota}
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        Qty Barang
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            onChange={(n) => {
              setValue({
                ...value,
                qty: n.target.value,
              });
            }}
            required
            id="qty"
            name="qty"
            label="Qty"
            type="number"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
      <ButtonLoading statusLoading={props.isLoading} title="Cek Ongkir" onClick={handleClick} />
    </React.Fragment>
  );
}
