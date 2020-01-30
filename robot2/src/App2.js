// here is a App component with STATE
import React,{Component} from 'react';
import { robots } from './robots';
import CardList2 from './CardList2';
import SearchBox from './SearchBox';

const state = {
    robots: robots,
    searchfield:''
}
class App2 extends Component{
    render(){  
        return(
        <div className='tc'>
        <h1>Robot Friends</h1>
        <SearchBox/>
        <CardList2 robots={robots}/>
    </div>
    );
  }   
}
export default App2;
