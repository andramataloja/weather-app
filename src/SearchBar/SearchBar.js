import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherQuery: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendLocation = this.sendLocation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  sendLocation = () => {
    this.props.searchLocation(this.state.weatherQuery);
  };

  handleChange(event) {
    event.preventDefault();
    this.setState({ weatherQuery: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.sendLocation();
    this.setState({ weatherQuery: "" });
  }

  render() {
    return (
      <form className="my-5">
        <div className="row">
          <div className="col-auto mt-2">
            <label className="form-label">Search weather for</label>
          </div>
          <div className="col-auto">
            <input
              className="form-control input"
              type="search"
              placeholder="City..."
              name="city"
              value={this.state.weatherQuery}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto mt-2">
            <button className="btn" onClick={this.handleClick}>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
