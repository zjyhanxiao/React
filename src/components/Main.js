require ('../../node_modules/antd/dist/antd.min.css')
import React from 'react';
import DatePickerComponent from 'components/datePicker/index'
import Avatar from 'components/uploder/index'
import select from 'components/select/index'



class AppComponent extends React.Component {
    render() {
        return (
            <div>
              <DatePickerComponent />
                <Avatar />
                <select />
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
