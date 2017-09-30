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
    this.state = { email: "", password: "" };
  }

  public render() {
    return (
      <div>
        <h1>ログイン</h1>
        <div>ユーザー名<input type="text" value={this.state.email} onChange={this.updateEmail}/></div>
        <div>パスワード<input type="password" value={this.state.password} onChange={this.updatePassword}/></div>
        <button onClick={this.login}>ログイン</button><button>新規登録はこちら</button>
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