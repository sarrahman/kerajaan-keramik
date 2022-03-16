import Harga from "../Harga";
import HargaAdmin from "../Harga/admin/harga";

const Home = () => {
  if (window.localStorage.getItem("ADMIN") === "true") {
    return <HargaAdmin />;
  }
  return <Harga />;
};

export default Home;
