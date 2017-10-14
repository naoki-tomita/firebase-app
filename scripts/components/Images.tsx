import * as React from "react";
import { DropImage } from "./DropImage";

interface Props {
  imageRef: firebase.database.Reference;
}

interface State {
  images: string[];
}

export class Images extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);
    this.props.imageRef.on("value", (snapshot) => {
      const list: string[] = [];
      snapshot.forEach((i) => {
        list.push(i.val());
        return false;
      });
      this.setState({
        images: list,
      })
    });
    this.state = {
      images: [],
    };
  }
  public render() {
    return (
      <div>
        <ul>
          {this.createImages()}
        </ul>
        <DropImage addImages={this.addImages}/>
      </div>
    );
  }
  
  addImages = (images: string[]) => {
    images.forEach((image) => {
      const post = this.props.imageRef.push();
      post.set(image);
    });
  }

  createImages() {
    return this.state.images.map((i, j) => <li key={j}><img src={i}></img></li>);
  }
}