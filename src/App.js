import React, {Component} from 'react'
import FeaturesList from './FeaturesList'
import SummaryList from './SummaryList'




class App extends Component {



  constructor(props) {
    super(props);
    this.state={
      total: null,
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }


    updateFeature = (feature, newValue) => {
      const selected=Object.assign({}, this.state.selected);
      selected[feature]=newValue;
      
      
      
       let total=this.state.total+newValue.cost
    
     
      this.setState({
        selected:selected,
        total,
      }

     

      );
    }
    
    render() {
      return(
          <div className="App">
            <header>
              <h1>ELF Computing | Laptops</h1>
            </header>
            <main>
              <FeaturesList
               features={this.props.features}
               selected={this.state.selected}
               onSelect={this.updateFeature} 
              />
              <SummaryList selected={this.state.selected}  />
            </main>
          </div>
      );
    }
  }


export default App;