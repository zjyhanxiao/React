import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from '../Redux/stores/index'
import BasicInfo from './BasicInformation';
const store = configureStore()
export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <BasicInfo />
            </Provider>
        )
    }
}