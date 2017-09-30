import * as React from "react";
import * as firebase from "firebase";

interface Props {
  messageRef: firebase.database.Reference;
}

interface Message {
  text: string;
}

interface State {
  messages: Message[];
  message: string;
}

export class Chat extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
    }
    this.props.messageRef.on("value", (snapshot) => {
      const list: Message[] = [];
      snapshot.forEach(message => {
        list.push(message.val());
        return false;
      });
      this.setState({
        messages: list,
      });
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.updateMessageString}/>
          <button onClick={this.sendMessage}>送信</button>
        <ul>
          {this.state.messages.map((message, i) => <li key={i}>{message.text}</li>)}
        </ul>
      </div>
    );
  }

  updateMessageString = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      message: event.target.value,
    });
  }

  sendMessage = () => {
    const post = this.props.messageRef.push();
    post.set({
      text: this.state.message,
    });
  }
}