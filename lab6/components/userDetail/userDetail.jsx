import React from "react";
import { Typography, Button } from "@material-ui/core";
import "./userDetail.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
/**
 * Define UserDetail, a React componment of CS142 project #5
 */

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    // Problem 1
    // let userDetail = window.cs142models.userModel(
    //   this.props.match.params.userId
    // );
    fetchModel("/user/" + this.props.match.params.userId).then((res) =>
      this.setState({ userDetail: res.data })
    );
    this.state = {
      userId: this.props.match.params.userId,
      userDetail: [],
    };
  }
  componentDidUpdate(prevProps) {
    let prevId = prevProps.match.params.userId;
    let currId = this.props.match.params.userId;
    if (prevId !== currId) {
      this.state.userId = currId;
      // Problem 1
      // let userDetail1 = window.cs142models.userModel(currId);
      // this.setState({ userDetail: userDetail1 });
      fetchModel("user/" + this.state.userId).then((res) =>
        this.setState({ userDetail: res.data })
      );
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
