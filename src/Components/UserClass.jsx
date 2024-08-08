import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        image: "dummy avatar",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/users/rabindramanohar"
    );
    const data = await response.json();
    console.log("rm-data about: ", data);
    this.setState(data);
  }

  render() {
    const { name, avatar_url } = this.state;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
      </div>
    );
  }
}

export default UserClass;
