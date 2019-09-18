import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" render={this.getMovie} />
            <Route path="/search/:query" component={Search} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }

  getMovie = ({ match }) => {
    const { id } = match.params;

    return <Movie id={id} />;
  };
}

export default App;
