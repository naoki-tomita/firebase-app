import * as React from "react";

interface Props {
  addImages: (data: string[]) => void;
}

// declare const FileReader: any;
// declare const btoa: any;

export class ImageAcceptable extends React.Component<Props> {
  public render() {
    return (
      <div className="row">
        <div className="col s12">
          <label className="waves-effect waves-light btn-large" htmlFor="upload">
            ファイルを選択する<input style={{ display: "none" }} type="file" onChange={this.setFiles} id="upload" multiple/>
          </label>
        </div>
        <div className="col s12">
          <div style={{ 
            border: "1px solid #eee",
            margin: "7px 0",
            lineHeight: "50px",
            fontSize: "28px",
            backgroundColor: "tomato",
            color: "white",
            padding: "0",
            height: "100px",
          }} onDrop={this.dropFiles} onDragOver={this.dragOver}>ここにファイルをドロップ</div>
        </div>
      </div>
    );
  }

  private setFiles = async (evt: any) => {
    evt.stopPropagation();
    evt.preventDefault();

    const files: any[] = Array.prototype.slice.call(evt.target.files);; // FileList object.
    const arr = [];
    for (let i = 0; i < files.length; i++) {
      const a: string = await this.convertFileToBase64(files[i]) as string;
      arr.push(a);
    }
    this.props.addImages(arr);
  }

  private dragOver(evt: any) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  private dropFiles = async (evt: any) => {
    evt.stopPropagation();
    evt.preventDefault();

    const files: any[] = Array.prototype.slice.call(evt.dataTransfer.files);; // FileList object.
    const arr = [];
    for (let i = 0; i < files.length; i++) {
      const a: string = await this.convertFileToBase64(files[i]) as string;
      arr.push(a);
    }
    this.props.addImages(arr);
  }

  private async convertFileToBase64(file: any) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binary = reader.result;
        const base64 = btoa(binary);
        resolve(`data:${file.type};base64,${base64}`);
      };
      reader.readAsBinaryString(file);
    });
  }
}