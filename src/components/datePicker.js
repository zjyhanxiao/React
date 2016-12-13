import React from 'react';
import { DatePicker } from 'antd';

class DatePickerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        this.setState({ date });
    }
    render() {
        return (
            <div style={{ width: 400}}>
                <DatePicker onChange={value => this.handleChange(value)} />
            </div>
        );
    }
}

DatePickerComponent.defaultProps = {
};

export default DatePickerComponent;
