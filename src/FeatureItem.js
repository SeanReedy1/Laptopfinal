import React, {Component} from 'react';
import slugify from 'slugify';

class FeatureItem extends Component {
   render(){
     const {item, feature} = this.props
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
    }
}

export default FeatureItem