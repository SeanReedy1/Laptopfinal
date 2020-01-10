import React, {Component} from 'react';
import { render } from '@testing-library/react';
import slugify from 'slugify';


class FeatureItem extends Component {
   render(){
    const features = Object.keys(this.props.features).map((feature, idx) => {
        
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(this.props.name)}
                checked={item.name === this.props.selected[feature].name}
                onChange={e => this.props.onSelect(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({(item.cost)})
              </label>
            </div>
         );
        });
    
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });


    return (
        <div>       
        {features}
        </div>
      )
    }
}

export default FeatureItem