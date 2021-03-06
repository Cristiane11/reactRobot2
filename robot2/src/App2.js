// here is a App component with STATE
import React,{Component} from 'react';
import { robots } from './robots';
import CardList2 from './CardList2';
import SearchBox from './SearchBox';


class App2 extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield:''  
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})   
    }
    render(){ 
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        }) 
        return(
        <div className='tc'>
        <h1>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList2 robots={filteredRobots}/>
        {/*before state<CardList2 robots={robots}/>*/}
    </div>
    );
  }   
}
export default App2;
