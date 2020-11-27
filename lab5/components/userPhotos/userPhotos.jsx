import React from "react";
import { Typography, Divider } from "@material-ui/core";
import "./userPhotos.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
const Card = (props) => {
  const [flag, setFlag] = React.useState(false);
  return (
    <div>
      <div className="userPhotos">
        <div className="date">{props.data.date_time}</div>
        <img
          src={"./../../images/" + props.data.file_name}
          alt="Photos of user"
        />
        <div>
          <div onClick={() => setFlag(!flag)}>Comments</div>
          {!props.data.comments ? (
            <div style={{ display: flag ? "block" : "none" }}>No comment</div>
          ) : (
            props.data.comments.map((el, ind) => {
              return (
                <div
                  className="commCont"
                  key={ind}
                  style={{ display: flag ? "block" : "none" }}
                >
                  <div className="title">
                    <span>
                      <Link to={"/users/" + el.user._id}>
                        {el.user.first_name} {el.user.last_name}
                      </Link>
                    </span>
                    <span>{el.date_time}</span>
                  </div>
                  <div className="comm">{el.comment}</div>
                  <Divider />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
  // return <div>Hello its card</div>;
};
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    // Problem 1
    // let photos = window.cs142models.photoOfUserModel(
    //   this.props.match.params.userId
    // );
    fetchModel("/PhotosOfUser/" + this.props.match.params.userId).then((res) =>
      this.setState({ photos: res.data })
    );
    this.state = {
      photos: [],
    };
  }

  render() {
    return (
      <div className="upcont">
        {this.state.photos.map((el) => {
          return <Card key={el._id} data={el} />;
        })}
      </div>
    );
  }
}

export default UserPhotos;
