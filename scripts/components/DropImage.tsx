import * as React from "react";

interface Props {
  addImages: (data: string[]) => void;
}

// declare const FileReader: any;
// declare const btoa: any;

export class DropImage extends React.Component<Props> {
  public render() {
    return (
      <div>
        <div style={{ 
          backgroundColor: "#cccccc", 
          border: "dotted 2px black", 
          width: "100%", 
          height: "100px",
          borderRadius: "10px",
        }} onDragOver={this.dragover} onDrop={this.drop}>Drop files here</div>
      </div>
    );
  }
  private dragover = (evt: any) => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  private drop = async (evt: any) => {
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