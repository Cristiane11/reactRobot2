import React from 'react';
import { robots } from './robots';
import CardList2 from './CardList2';
const App =()=>{
    return(
        <div>
            <h1>Robot Friends</h1>
            <CardList2 robots={robots}/>
        </div>
        );
}
export default App;