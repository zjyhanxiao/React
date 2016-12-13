require ('../../node_modules/antd/dist/antd.min.css')
import React from 'react';
import DatePickerComponent from 'components/datePicker'
import PicturesWall from 'components/uploader'

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <DatePickerComponent />
                <PicturesWall />
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
