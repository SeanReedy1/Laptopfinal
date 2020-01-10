import React, {Component} from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});



class Total extends Component{
  

  

  
  render(props){
    let totalSum = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

        return(
        <div>

          
    {USCurrencyFormat.format(totalSum)}    
          </div>
        
        )};

    }


export default Total

