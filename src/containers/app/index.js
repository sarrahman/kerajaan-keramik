import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Ongkir from "../pages/Ongkir";
import Harga from "../pages/Harga";
import Kalkulator from "../pages/Kalkulator";
import NotFound from "../pages/NotFound";
import HargaAdmin from "../pages/Harga/admin/harga";
import { connect } from "react-redux";
import { checkIsAdmin } from "../../redux/actions/auth";
import { useEffect } from "react";
import Store from "../../redux/store";

const state =  Store.getState();

function App(props) {

  useEffect(() => {
    props.checkIsAdmin();
  }, [props])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={state.isAdmin ? <Harga /> : <HargaAdmin />}
        />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ongkir" element={<Ongkir />} />
        <Route path="/kalkulator" element={<Kalkulator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const reduxState = (state) => ({
  isLogin: state.isLogin,
});

const reduxAction = (dispatch) => ({
  checkIsAdmin: () => dispatch(checkIsAdmin()),
});

export default connect(reduxState, reduxAction)(App);
