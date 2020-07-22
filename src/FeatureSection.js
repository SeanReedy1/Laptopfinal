import React, {Component} from 'react';
import FeatureItem from './FeatureItem';


class FeatureSection extends Component {
    render() {
    
        const featureHash = this.props.feature + '-' + this.props.idx;
            const options = this.props.features[this.props.feature].map(item => {
                
                return (
                    <FeatureItem
                        features={this.props.features}
                        key={Math.random()}
                        name={"Feature-item"}
                        selected={this.props.selected}
                        onSelect={this.props.onSelect}
                        item={item}
                        feature={this.props.feature}
                    />
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{this.props.feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
    
}
}

export default FeatureSection