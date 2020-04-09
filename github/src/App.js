import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/dcdavis3920")
      .then((response) => {
        this.setState({
          user: response.data,
        });
      })

      .catch((err) => console.error(err));
    axios
      .get("https://api.github.com/users/dcdavis3920/followers")
      .then((response) => {
        this.setState({
          followers: response.data,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>GitHub User Info</h1>
        <CardList data={this.state} />
      </div>
    );
  }
}

export default App;
