import {Component} from "react";
import PropTypes from 'prop-types'
import {dictionary} from "../dictionary";

export default class Localization extends Component {
    static childContextTypes = {
        localize: PropTypes.func,
    }

    static propTypes = {
        lang: PropTypes.string.isRequired
    }

    getChildContext() {
        return {
            localize: this.localize(),
        }
    }

    localize() {
        return (key) => {
            if (dictionary[this.props.lang]) {
                return dictionary[this.props.lang][key]
            }
            return key;
        }

    }

    render() {
        return this.props.children
    }
}