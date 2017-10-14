import * as React from "react";
import { app } from "firebase";

interface Props {
  login: (email: string, password: string) => void;
}

interface State {
  email: string;
  password: string;
}

export class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { email: "user@example.co.jp", password: "password" };
  }

  public render() {
    return (
      <div className={"container"}>
        <h1>ログイン</h1>
        <label htmlFor="email">メールアドレス</label><input type="text" value={this.state.email} onChange={this.updateEmail} id="email"/>
        <label htmlFor="password">パスワード</label><input type="password" value={this.state.password} onChange={this.updatePassword} id="password"/>
        <button className={"waves-effect waves-light btn"} onClick={this.login}>ログイン</button>
      </div>
    );
  }

  private updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  }

  private updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  }

  private login = () => {
    this.props.login(this.state.email, this.state.password);
  }
}