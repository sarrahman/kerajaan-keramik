import DataTable from "react-data-table-component";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  {
    name: "Nama",
    selector: (row) => row.nama,
    sortable: true,
    width: "65%",
  },
  {
    name: "Harga",
    selector: (row) => row.harga,
    format: (value) => `Rp. ${value.harga}`,
  },
];

function TableComp(props) {
  const [filterText, setFilterText] = React.useState("");
  React.useState(false);
  const filteredItems = props.data.filter(
    (item) =>
      item.nama && item.nama.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <TextField
      sx={{
        width: "50%",
      }}
        label="Pencarian"
        onChange={(e) => setFilterText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    );
  }, []);

  return (
    <DataTable
      title="Daftar Produk"
      columns={columns}
      data={filteredItems}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  );
}

export default TableComp;
