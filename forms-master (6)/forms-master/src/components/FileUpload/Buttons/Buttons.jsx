import React from "react";
import Typography from "@material-ui/core/Typography";
import NoteAdd from "@material-ui/icons/NoteAdd";

export default props => (
  <div className="button-component">
    <div className="file-button">
      <label htmlFor="multi">
        <Typography component="p" className="upload-button">
          <NoteAdd /> Upload document
        </Typography>
        <Typography component="p" className="text">
          Drag &amp; drop any files that better explain your needs
        </Typography>
      </label>
      <input
        type="file"
        id="multi"
        onChange={props.onChange}
        multiple
        accept=""
      />
    </div>
  </div>
);
