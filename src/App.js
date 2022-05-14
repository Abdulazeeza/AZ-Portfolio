import "./Fontawesome";
import "./assets/styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { layouts } from "./layouts";
import { pages } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <layouts.MainLayout>
        <Helmet>
          <title>Abdulazeez Aiyeleso Portfolio</title>
          <meta name="description" content="Abdulazeez Aiyeleso Portfolio" />
        </Helmet>
        <Routes>
          {/* This is a sample route*/}
          <Route path="/" element={<pages.Home/> } />
        </Routes>
      </layouts.MainLayout>
    </BrowserRouter>
  );
};

export default App;
