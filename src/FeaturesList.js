import React, { Component } from 'react'
import FeatureItem from './FeatureItem';
import FeatureSection from './FeatureSection';

class FeaturesList extends Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            return(
                <FeatureSection
                feature={feature}
                idx={idx}
                features={this.props.features}
                selected={this.props.selected}
                onSelect={this.props.onSelect}
                />
            )
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