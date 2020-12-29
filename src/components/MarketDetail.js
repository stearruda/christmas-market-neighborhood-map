import React, { Component } from "react";

class MarketDetail extends Component {
  state = { locations: [] };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/markets/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Sorry, can't get information from Markets...`);
        }
      })
      .then((responseParsed) => {
        this.setState({
          locations: responseParsed[0],
        });
      })
      .catch((error) => {
        console.log(`Info didn't load due to error: ${error}`);
      });
  }

  render() {
    const { title } = this.state.locations;
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <div className="market-img"></div>
        <div style={{ flex: "1", padding: "20px" }}>
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

export default MarketDetail;
