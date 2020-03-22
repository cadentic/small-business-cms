import React, { Component } from "react";
import Files from "./File/File";
import Buttons from "./Buttons/Buttons";
import "./FileUpload.scss";

export default class FileUpload extends Component {
  state = {
    files: []
  };

  onChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      let readers = [];
      let fileNames = [];
      let self = this;
      for (let i = 0, length = e.target.files.length; i < length; i++) {
        fileNames = fileNames.concat(e.target.files[i].name);
        readers[i] = new FileReader();
        // eslint-disable-next-line no-loop-func
        readers[i].onload = function(e) {
          self.setState(
            {
              files: self.state.files.concat({
                file: e.target.result,
                fileName: fileNames[i]
              })
            },
            () => {
              self.props.changeModel({ files: self.state.files });
            }
          );
        };
      }

      for (let i = 0, length = e.target.files.length; i < length; i++) {
        readers[i].readAsDataURL(e.target.files[i]);
      }
    }
  };

  removeFile = index => {
    this.setState(
      {
        files: [
          ...this.state.files.slice(0, index),
          ...this.state.files.slice(index + 1)
        ]
      },
      () => {
        this.props.changeModel({
          files: this.state.files
        });
      }
    );
  };

  render() {
    const { files } = this.state;

    return (
      <div className="upload-file-component">
        {files.length > 0 && (
          <Files files={files} removeFile={this.removeFile} />
        )}
        <Buttons onChange={this.onChange} />
      </div>
    );
  }
}
