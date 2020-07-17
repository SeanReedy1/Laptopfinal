import React, { Component } from 'react'
import FeatureItem from './FeatureItem';

class FeaturesList extends Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {

            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                
                return (
                    <FeatureItem
                        features={this.props.features}
                        key={Math.random()}
                        name={"Feature-item"}
                        selected={this.props.selected}
                        onSelect={this.props.onSelect}
                        item={item}
                        feature={feature}
                    />
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
            <form className="main__form">
                <h2> Customize your laptop</h2>
                {features}

            </form>
        )
    }
}

export default FeaturesList