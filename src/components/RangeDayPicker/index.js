import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import './style.css'

export default class RangeDayPicker extends React.Component {

    handleDayClick = day => {
        const {from, to} = DateUtils.addDayToRange(day, this.props);
        this.props.onChange(from, to)
    }

    handleResetClick = () => {
        this.props.onChange()
    }

    render() {
        const {from, to} = this.props
        const modifiers = { start: from, end: to }
        return (
            <div>
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}{' '}
                    {from && to && (
                        <button className = "link" onClick = {this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className = "Selectable"
                    selectedDays = {[from, { from, to }]}
                    modifiers = {modifiers}
                    onDayClick = {this.handleDayClick}
                />
            </div>
        )
    }
}
