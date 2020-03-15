import React from 'react';
import author from './author';
import ReactDOM from 'react-dom';
import { FaTwitter } from 'react-icons/fa';
import {FaQuoteLeft} from 'react-icons/fa';
import style from './style.css';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            colors:["red", "yellow", "blue", "green", "purple", "pink"]
        }
    }
    componentWillMount() {
        this.handleClick();
    }
    componentDidMount() {
        this.applyColor();
      }
    
      componentDidUpdate (prevProps, prevState) {
        this.applyColor();
      }
    
      formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
      }
    
      isBackDark() {
        var rgb = this.state.color;
        return rgb.reduce(function(a,b){ return a+b;}) < 127 * 3;
      }
    
      applyColor() {
        var color = this.formatColor(this.state.color);
        document.body.style.background = color;
        document.getElementById("new-quote").style.background = color;
        document.getElementById("tweet-quote").style.background = color;
        document.getElementById("text").style.color = color;
        document.getElementById("author").style.color = color;
        
      }
    
      chooseColor() {
        for (var i = 0, random = []; i < 3; i++) {
          random.push(Math.floor(Math.random()*256));
        }
        return random; 
      }
      
      

 handleClick = event => {
    const auth = Object.keys(author);
    const authors = auth[Math.floor(Math.random()*auth.length)]
    if(this.state.quote === author[authors].quote){
        this.handleClick();
        return;
    }

    this.setState(author[authors]);
    this.setState({
        color: this.chooseColor()
      });
}
 render() {
    
         return (
    <div>
      <header>
      <h1> Random quote Machine</h1>
     </header>
     
    <div id="quote-box">
      <h1 id="text"><FaQuoteLeft /> {this.state.quote}</h1>
      <p id="author">
       <span>- {this.state.Author}</span>
      </p>
      <button id="new-quote" onClick={this.handleClick.bind(this)} light={this.isBackDark()}>New Quote</button>
      <a id="tweet-quote" href="http://twitter.com/intent/tweet"><FaTwitter /></a>
      
</div>
</div>

    )
    };
}
    


ReactDOM.render(<App />, document.getElementById('root'));
