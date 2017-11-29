import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import 'react-day-picker/lib/style.css'
import {setDateRange} from "../../AC/index";

class DateRange extends Component {
    static propTypes = {
        from: PropTypes.instanceOf(Date),
        to: PropTypes.instanceOf(Date),
        setDateRange: PropTypes.func
    };

    handleDayClick = (day) => {
        const {setDateRange, from, to} = this.props
        setDateRange(DateUtils.addDayToRange(day, {from, to}))
    }

    render() {
        const { from, to } = this.props
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    ...state.filters.dateRange
})

export default connect(mapStateToProps, {
    setDateRange
})(DateRange)
