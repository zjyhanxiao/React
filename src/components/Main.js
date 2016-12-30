import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from '../Redux/stores/index'
import AsyncApp from './BasicInformation.js'
import CapacityShow from './CapacityShow'
const store = configureStore()
export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
              {/*<CapacityShow />*/}
              <AsyncApp></AsyncApp>
            </Provider>
        )
    }
}
