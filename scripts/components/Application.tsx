import * as React from "react";
import * as firebase from "firebase";
import { Login } from "./Login";
import { Images } from "./Images";

interface Props {
  firebase: typeof firebase;
}

interface State {
  loggedin: boolean;
}

export class Application extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      loggedin: false,
    }
  }

  public render() {
    return (
      <div>
        {this.createComponent()}
      </div>
    );
  }

  private createComponent() {
    if (!this.state.loggedin) {
      return (<Login login={this.handleLogin}/>);
    }
    return (<Images imageRef={this.props.firebase.database().ref("images")}/>);
  }

  private handleLogin = (email: string, password: string) => {
    this.props.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // login succeeded.
        this.setState({
          loggedin: true
        });
      } else {
        // login failed...
      }
    });
    this.props.firebase.auth().signInWithEmailAndPassword(email, password);
  }
}