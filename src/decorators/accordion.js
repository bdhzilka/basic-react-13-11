import React from 'react'

export default (OriginalComponent) => class AccordionComponent extends React.Component {
    state = {
        openId: null
    }

    render() {
        return (
            <OriginalComponent {...this.props}
                               {...this.state}
                               toggleOpen = {this.toggleOpen}
                               isOpen = {this.isOpen}
            />
        )
    }

    toggleOpen = openId => {
        if (this.state.openId === openId) {
            openId = null;
        }
        this.setState({openId})
    }

    isOpen = id => this.state.openId === id
}
