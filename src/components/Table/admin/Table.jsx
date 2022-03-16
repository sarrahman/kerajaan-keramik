import DataTable from "react-data-table-component";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function TableAdmin(props) {
  const navigate = useNavigate();
  const [filterText, setFilterText] = React.useState("");

  const columns = [
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
      width: "50%",
    },
    {
      name: "Harga",
      selector: (row) => row.harga,
      format: (value) => `Rp. ${value.harga}`,
    },
    {
      name: "",
      width: "10%",
      cell: (row) => (
        <>
          <Button
            onClick={() => navigate(`/edit/${row._id}`)}
            size="small"
            color="primary"
            sx={{ mr: 1 }}
          >
            <ModeEditIcon />
          </Button>
          <Button onClick={() => console.log(row)} size="small" color="primary">
            <DeleteIcon />
          </Button>
        </>
      ),
    },
  ];

  React.useState(false);
  const filteredItems = props.data.filter(
    (item) =>
      item.nama && item.nama.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <TextField
        sx={{
          width: {xs: '50%', md: '30%'},
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

export default TableAdmin;
