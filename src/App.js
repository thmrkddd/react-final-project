import React from "react";
import MyRoutes from "./routes/MyRoutes";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MyRoutes />
      <Footer />
    </>
  );
};

export default App;
