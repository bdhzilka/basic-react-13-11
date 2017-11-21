import React, {Component} from 'react'

export default class Accordion extends Component {
    state = {
        openId: null
    }

    isOpen = id => this.state.openId === id

    toggleOpen = openId => this.setState({openId})
}