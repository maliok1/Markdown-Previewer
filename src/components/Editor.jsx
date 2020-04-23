import React from 'react';

const Editor =({text, handleChange})=>{

  return (
    <div id="editor">
      <h1>Editor</h1>
      <hr/>
      <textarea onChange={handleChange} id="" cols="60" rows="25">{text}</textarea>
    </div>
  )
  
}

export default Editor;
