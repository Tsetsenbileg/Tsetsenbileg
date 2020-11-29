import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
} from "@material-ui/core";
import "./userList.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import axios from "axios";
/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userListModel: [],
    };
  }
  componentDidMount() {
    axios
      .get("/user/list")
      .then((res) => this.setState({ userListModel: res.data }));
  }
  render() {
    return (
      // <div>
      <List component="nav" className="userList">
        <Typography variant="h6" align="center">
          Users of Photo App
        </Typography>
        {this.state.userListModel.map((el) => {
          return (
            <React.Fragment key={el._id}>
              <Link to={"/users/" + el._id}>
                <ListItem>
                  <Avatar color="purple">
                    {el.first_name.charAt(0)}
                    {el.last_name.charAt(0)}
                  </Avatar>
                  <ListItemText>
                    {el.first_name + "  "}
                    {el.last_name}
                  </ListItemText>
                </ListItem>
              </Link>

              <Divider />
            </React.Fragment>
          );
        })}
      </List>
      // </div>
    );
  }
}

export default UserList;
