import React,{Component} from 'react';
// importing components
import First from "./components/First";
import Second from "./components/Second";


class App extends Component{
  render(){
    return(
      <div>
        <p>App Component</p>
        <First color="red" size={10} />
        <Second secondName="This is second name prop speaking" />
      </div>
    )
  }
}

export default App;