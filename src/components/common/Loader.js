import React from 'react'
import PropTypes from "prop-types";

function Loader(props, context) {

    return (
        <h2>{context.localize('Loading')}...</h2>
    )
}

Loader.propTypes = {
}

Loader.contextTypes = {
    localize: PropTypes.func
}

export default Loader