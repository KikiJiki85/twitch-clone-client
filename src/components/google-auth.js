import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "932103381506-ft7fil3006o0vdr6p65u7o3t6tt5rsff.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
