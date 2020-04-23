import React from 'react';
import marked from "marked";



const Previewer =({text})=>{

  function createMarkup() {
    return {__html: marked(text)};
  }

  return (
    
    <div id="preview">
      <h1>Previewer</h1>
      <hr/>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default Previewer;