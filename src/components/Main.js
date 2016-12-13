require ('../../node_modules/antd/dist/antd.min.css')
import React from 'react';
import DatePickerComponent from 'components/datePicker/datePicker'
import PicturesWall from 'components/uploader/uploader'
import Avatar from 'components/Avatar/Avatar'

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <DatePickerComponent />
                <PicturesWall />
                <Avatar />
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
