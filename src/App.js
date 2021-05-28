import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import { getPosts } from "./utils/postAPI";

import NavBar from "./components/NavBar/NavBar";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import QRCodePage from "./pages/QRCodePage/QRCodePage";

import UploadContext from "./context/uploadContext";

import io from "socket.io-client";
const ENDPOINT = "http://192.168.1.70:8080";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentUpload, setCurrentUpload] = useState({
    currentImage: "",
    currentAuthor: localStorage.getItem("author")
      ? localStorage.getItem("author")
      : "",
    currentDescription: "",
  });
  let socket = useRef(null);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.on("connectedToServer", (data) => {
      console.log(data.payload);
    });
    socket.current.on("imageWasUploaded", (data) => {
      console.log(data.payload);
      getPosts(setPosts);
    });
  }, []);

  return (
    <UploadContext.Provider value={{ currentUpload, setCurrentUpload }}>
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/gallery"
              render={(routerProps) => (
                <GalleryPage posts={posts} {...routerProps} />
              )}
            />
            <Route
              path="/upload"
              render={(routerProps) => (
                <UploadPage socket={socket.current} {...routerProps} />
              )}
            />
            <Route path="/qr-code" component={QRCodePage} />
            <Redirect from="/" to="/gallery" />
          </Switch>
          <NavBar />
        </Router>
      </div>
    </UploadContext.Provider>
  );
}

export default App;
