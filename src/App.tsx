import React,{Component} from 'react';
// importing components
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";


class App extends Component{
  render(){
    return(
      <div>
        <p>App Component</p>
        <First color="red" size={10} />
        <Second secondName="This is second name prop speaking" />
        <Third ThirdName="Piyal the ThirdName" ThirdAge={998} />
        <Fourth />
      </div>
    )
  }
}

export default App;