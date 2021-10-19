// importacion de librerias y componentes
import React from "react";
import style from "./components/App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import  LandingPages  from "../src/pages/LandingPages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// componente y rutas
export const App = () => {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={style.title}>
          MOVIES <br />
          NOW <br />
        </h1></Link>
        <Link to="/movies"></Link>
      </header>
      <main>
      <Switch>
          <Route exact path="/movies/:movieId"><MovieDetails /></Route>
          <Route  path="/"><LandingPages/></Route>
        </Switch>
      </main>
      </Router>
  );
};

