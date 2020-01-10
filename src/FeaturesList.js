import React, {Component} from 'react'
import FeatureItem from './FeatureItem';


class FeaturesList extends Component{

render(){


        return(
        <FeatureItem
        features={this.props.features}
        key={Math.random()}
        name={"Joe"}
        selected={this.props.selected}
        onSelect={this.props.onSelect}
      
        
        />
        )
    }

    
    
}

export default FeaturesList