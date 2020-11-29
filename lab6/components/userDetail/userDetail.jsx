import React from "react";
import { Typography, Button } from "@material-ui/core";
import "./userDetail.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import axios from "axios";
/**
 * Define UserDetail, a React componment of CS142 project #5
 */

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userId,
      userDetail: [],
    };
    axios
      .get("/user/" + this.props.match.params.userId)
      .then((res) => this.setState({ userDetail: res.data }));
  }
  componentDidUpdate(prevProps) {
    let prevId = prevProps.match.params.userId;
    let currId = this.props.match.params.userId;
    if (prevId !== currId) {
      this.state.userId = currId;

      axios
        .get("/user/" + this.state.userId)
        .then((res) => this.setState({ userDetail: res.data }));
    }
  }
  render() {
    return (
      <div className="card">
        <Typography variant="h5">
          {this.state.userDetail.first_name} {this.state.userDetail.last_name}
        </Typography>
        <Typography variant="subtitle2" className="item">
          Desctiption: {this.state.userDetail.description}
        </Typography>
        <div className="occu item">
          Occupation: {this.state.userDetail.occupation}
        </div>
        <div className="loc item">
          Location: {this.state.userDetail.location}
        </div>
        <Link to={"/photos/" + this.state.userId}>
          <Button variant="outlined" color="primary">
            View Pictures
          </Button>
        </Link>
      </div>
    );
  }
}

export default UserDetail;
