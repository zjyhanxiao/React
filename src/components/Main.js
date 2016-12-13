import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';

class App extends React.Component {
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

App.defaultProps = {
};

export default App;
