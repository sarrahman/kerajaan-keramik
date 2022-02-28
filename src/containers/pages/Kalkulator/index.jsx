import AppBarComp from "../../../components/AppBar";
import { Box } from "@mui/material";
import FormCalculator from "../../../components/FormCalculator";
import CalculatorDetail from "../../../components/CalculatorDetail";
import { useState } from "react";
import Copyright from "../../../components/Footer";

const Kalkulator = (props) => {
  const [value, setValue] = useState({
    kebutuhan: "",
    diameter: "",
    ukuran: "",
    pcs: "",
    diameterPerDus: "",
  });

  const handleCalculate = (data) => {
    let { panjang, lebar, tinggi, ukuran, type } = data;
    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);
    tinggi = parseFloat(tinggi);
    if (type === "keramik lantai") {
      switch (ukuran) {
        case "25 x 25":
          setValue({
            ...value,
            kebutuhan: Math.round(panjang * lebar),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 16,
            diameterPerDus: 1,
          });
          break;
        case "20 x 40":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang * lebar) / 0.96),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 12,
            diameterPerDus: 0.96,
          });
          break;
        case "25 x 40":
          setValue({
            ...value,
            kebutuhan: Math.round(panjang * lebar),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 10,
            diameterPerDus: 1,
          });
          break;
        case "25 x 50":
          setValue({
            ...value,
            kebutuhan: Math.round(panjang * lebar),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 8,
            diameterPerDus: 1,
          });
          break;
        case "30 x 30":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang * lebar) / 0.99),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 11,
            diameterPerDus: 0.99,
          });
          break;
        case "40 x 40":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang * lebar) / 0.96),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 6,
            diameterPerDus: 0.96,
          });
          break;
        case "50 x 50":
          setValue({
            ...value,
            kebutuhan: Math.round(panjang * lebar),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 4,
            diameterPerDus: 1,
          });
          break;
        case "60 x 60":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang * lebar) / 1.44),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 4,
            diameterPerDus: 1.44,
          });
          break;
        case "30 x 60":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang * lebar) / 1.08),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 6,
            diameterPerDus: 1.08,
          });
          break;
        default:
          setValue({
            ...value,
            kebutuhan: Math.round(panjang * lebar),
            diameter: (panjang * lebar).toFixed(2),
            ukuran: ukuran,
            pcs: 0,
            diameterPerDus: 1,
          });
          break;
      }
    } else if (type === "keramik dinding") {
      switch (ukuran) {
        case "25 x 25":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang + panjang + lebar + lebar) * tinggi),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 16,
            diameterPerDus: 1,
          });
          break;
        case "20 x 40":
          setValue({
            ...value,
            kebutuhan: Math.round(
              ((panjang + panjang + lebar + lebar) * tinggi) / 0.96
            ),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 12,
            diameterPerDus: 0.96,
          });
          break;
        case "25 x 40":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang + panjang + lebar + lebar) * tinggi),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 10,
            diameterPerDus: 1,
          });
          break;
        case "25 x 50":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang + panjang + lebar + lebar) * tinggi),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 8,
            diameterPerDus: 1,
          });
          break;
        case "30 x 30":
          setValue({
            ...value,
            kebutuhan: Math.round(
              ((panjang + panjang + lebar + lebar) * tinggi) / 0.99
            ),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 11,
            diameterPerDus: 0.99,
          });
          break;
        case "40 x 40":
          setValue({
            ...value,
            kebutuhan: Math.round(
              ((panjang + panjang + lebar + lebar) * tinggi) / 0.96
            ),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 6,
            diameterPerDus: 0.96,
          });
          break;
        case "50 x 50":
          setValue({
            ...value,
            kebutuhan: Math.round((panjang + panjang + lebar + lebar) * tinggi),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 4,
            diameterPerDus: 1,
          });
          break;
        case "60 x 60":
          setValue({
            ...value,
            kebutuhan: Math.round(
              ((panjang + panjang + lebar + lebar) * tinggi) / 1.44
            ),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 4,
            diameterPerDus: 1.44,
          });
          break;
        case "30 x 60":
          setValue({
            ...value,
            kebutuhan: Math.round(
              ((panjang + panjang + lebar + lebar) * tinggi) / 1.08
            ),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 6,
            diameterPerDus: 1.08,
          });
          break;
        default:
          setValue({
            ...value,
            kebutuhan: Math.round((panjang + panjang + lebar + lebar) * tinggi),
            diameter: ((panjang + panjang + lebar + lebar) * tinggi).toFixed(2),
            ukuran: ukuran,
            pcs: 0,
            diameterPerDus: 1,
          });
          break;
      }
    }
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
        <FormCalculator
          isLoading={props.loading}
          onClick={(data) => handleCalculate(data)}
        />
      </Box>
      <Box
        sx={{
          m: { xs: 1, md: 3 },
          boxShadow: 4,
          p: { xs: 2, md: 3 },
          borderRadius: 5,
        }}
      >
        <CalculatorDetail
          kebutuhan={value.kebutuhan}
          diameter={value.diameter}
          ukuran={value.ukuran}
          pcs={value.pcs}
          diameterPerDus={value.diameterPerDus}
        />
      </Box>
      <Copyright />
    </div>
  );
};

export default Kalkulator;
