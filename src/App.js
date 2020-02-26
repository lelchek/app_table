import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ContentPage from "./pages/contentPage/ContentPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import DefaultPage from "./pages/defaultPage/DefaultPage";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/content" component={ContentPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route component={DefaultPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;