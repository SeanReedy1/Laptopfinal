import React, {Component} from 'react'

class SummaryItems extends Component {
    render() {
return (
    Object.keys(this.props.selected).map((key, idx) => {
        return(
            <ul key={Math.random()+idx}>
            <li key={Math.random()+idx}>{this.props.selected[key].name}</li>
        
            </ul>
        )
    })
)
}
}

export default SummaryItems