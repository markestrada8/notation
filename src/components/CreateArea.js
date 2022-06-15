import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={props.title}
            onChange={props.changeFunction}
          />
        )}
        <textarea
          onClick={() => setIsExpanded(true)}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={props.content}
          onChange={props.changeFunction}
        />
        <Zoom in={true}>
          <IconButton className="icon-button" onClick={props.clickFunction}>
            <AddIcon />
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
