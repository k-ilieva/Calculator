class Calculator extends React.Component {
  constructor(props) {
    super(props);
      
    this.state = {
      oldDigit: "",
      addDigit: "",
      symbol: "",     
      result: ""  
    };

    this.digitClick = this.digitClick.bind(this);
    this.symbolClick = this.symbolClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.resultClick = this.resultClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  digitClick(digit) { 
      var newNumber = this.state.addDigit + digit;   
      this.setState(
            { 
                oldDigit: newNumber, addDigit: newNumber
            }
      );
  }
  
    
  symbolClick(symbol) {      
      var newSet = this.state.oldDigit + " " + symbol + " "; 
      this.setState(
          {
              oldDigit: newSet, addDigit: newSet
          }
      );  
  }
    
    
  dotClick(dot) {
        var newDigit = this.state.addDigit + dot;
        this.setState(
            { 
                oldDigit: newDigit, addDigit: newDigit
            }
        );  
  }
    
 
  resultClick() {   
    var resultNumber = this.state.addDigit;
    var newResult = resultNumber + " = " + eval(resultNumber);
    this.setState(
        { 
             oldDigit: "", result: newResult
        }
    );
  }
    

  resetClick() {
    this.setState(
        {                        
            oldDigit: "", addDigit: "", result: ""
        }
    );
  }
    

  render() {
    return (
      React.createElement("div", {id: "menu"},
      React.createElement("div", {id: "menu-screen"}, this.state.oldDigit, this.state.result),
      React.createElement("div", {id: "menu-inside"},
                          
      React.createElement("div", {id: "reset", title: "Clear screen", onClick: () => this.resetClick()}, "C"),
      React.createElement("div", {className: "symbol", title: "Divide", onClick: () => this.symbolClick("/")}, "/"),                          
      React.createElement("div", {id: "symbol-multiply", title: "Multiply", onClick: () => this.symbolClick("*")}, "*"),
      React.createElement("div", {className: "symbol", title: "Minus", onClick: () => this.symbolClick("-")}, "-"), 
                          
      React.createElement("div", {id: "symbol-plus", title: "Plus", onClick: () => this.symbolClick("+")}, "+"),                   
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(7)}, "7"),
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(8)}, "8"),
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(9)}, "9"),
                          
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(4)}, "4"),
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(5)}, "5"),
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(6)}, "6"),       React.createElement("div", {id: "result", title: "Result", onClick: () => this.resultClick()}, "="),
                          
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(1)}, "1"),
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(2)}, "2"),
      React.createElement("div", {className: "digit", onClick: () => this.digitClick(3)}, "3"),
                          
      React.createElement("div", {id: "digit-zero", onClick: () => this.digitClick(0)}, "0"),
      React.createElement("div", {id: "dot", onClick: () => this.dotClick(".")}, "."),  
      )));
  }


};

ReactDOM.render(React.createElement(Calculator), document.getElementById("react-numbers"));










