import React from 'react';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
            height: 0
        }
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }

    render() {
        const {title, children} = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        return (
            // Back ticks (``)
            <div className="panel panel-success" onClick={(e) => this.handleToggle(e)}>
                <div className="panel-heading">
                    <h4>{title}</h4>
                </div>
                <div className="panel-collapse" style={{height: currentHeight+'px'}}>
                    <div className="panel-body" ref="inner">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapsible;