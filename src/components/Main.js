require ('../../node_modules/antd/dist/antd.min.css')
import React from 'react';
import DatePickerComponent from 'components/datePicker/index'
import PicturesWall from 'components/uploader/index'
import Avatar from 'components/Avatar/index'

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Avatar />
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
