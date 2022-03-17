import DataTable from "react-data-table-component";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {Button, Collapse} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProductApi } from "../../../redux/actions/products";
import AlertComp from "../../Alert";

function TableAdmin(props) {
  const navigate = useNavigate(props);
  const [filterText, setFilterText] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState(false);

  const handleRemove = (id) => {
    props
      .removeData(id)
      .then((res) => {
        setMessage(res.message);
        setStatus(true);
      })
      .catch((err) => {
        setStatus(false);
        setMessage(err.response.data.message);
      });
  };

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
          <Button
            onClick={() => handleRemove(row._id)}
            size="small"
            color="primary"
          >
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
          width: { xs: "50%", md: "30%" },
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
    <>
      <Collapse sx={{ mt: 1, mb: 2 }} in={message !== ""}>
        <AlertComp status={status} text={message} />
      </Collapse>
      <DataTable
        title="Daftar Produk"
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    </>
  );
}

const reduxAction = (dispatch) => ({
  removeData: (id) => dispatch(deleteProductApi(id)),
});

export default connect(null, reduxAction)(TableAdmin);
