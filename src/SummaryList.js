import React, {Component} from 'react'
import SummaryItems from './SummaryItems'
import Total from './Total'

class SummaryList extends Component{
    render(props){
        return(

            <section className="main__summary">
                <h2>Your Cart</h2>
                {Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature]
            return (
                <SummaryItems selected={this.props.selected}
                featureHash={featureHash}
                selectedOption={selectedOption}
                />
            )
                })
        }

                
                <Total total={this.props.total} selected={this.props.selected}  />
            </section>
        )
    }
}

export default SummaryList