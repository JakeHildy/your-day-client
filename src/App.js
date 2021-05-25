import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import QRCodePage from "./pages/QRCodePage/QRCodePage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/qr-code" component={QRCodePage} />
          <Redirect from="/" to="/gallery" />
        </Switch>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
