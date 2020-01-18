import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Card extends Component{
    render(){
        return(
            <div>
                    <p>{this.props.marita}</p>
            </div>
        );
    }
}
export default Card;
