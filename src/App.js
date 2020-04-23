import React from "react";

import Editor from './components/Editor';
import Previewer from './components/Previewer.jsx';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      markdown: editSpace
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
     markdown: e.target.value
    })
  }
  render(){
    return (
    <div className="App">
      
      <Editor text = {this.state.markdown} handleChange= {this.handleChange} />
      <Previewer text = {this.state.markdown} />
    </div>
  );
  }
  
}


let editSpace = `# Hi!

## Welcome to my React previewer

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**
Or _italic_.
Or **_both!_**
And  ~~cross stuff out~~ if you want to.

There's also [links](https://codepen.io/bmansk14/), and
> Block Quotes

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`
export default App;
