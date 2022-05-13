/* eslint-disable no-unused-vars */
import "./assets/styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { layouts } from "./layouts/index";
import { appPages } from "./pages/appPages/index";
import "./Fontawesome";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    // <BrowserRouter>
    //   <layouts.MainLayout>
    //     <Helmet>
    //       <title>Lumi Merchant</title>
    //       <meta name="description" content="Lumi Merchant" />
    //     </Helmet>
    //     <Routes>
    //       {/* This is a sample route*/}
    //       <Route path="/" element={<appPages.Home />} />
    //     </Routes>
    //   </layouts.MainLayout>
    // </BrowserRouter>
    <div>New portfolio</div>
  );
};

export default App;
