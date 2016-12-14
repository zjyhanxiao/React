import 'antd/dist/antd.min.css';
import React from 'react';
import DatePickerComponent from 'components/datePicker/index'
import Avatar from 'components/uploader/index'

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <DatePickerComponent />
                <Avatar />
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
