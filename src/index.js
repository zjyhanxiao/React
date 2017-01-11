// import 'core-js/fn/object/assign'
import 'antd/dist/antd.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Redux/stores/index'
import CapacityShow from './components/CapacityShow'

ReactDOM.render(

    <div>
        <Provider store={store}>
            <CapacityShow />
        </Provider>
    </div>

    , document.getElementById('app'));

ReactDOM.render(

  <div>
    <Provider store={store}>
      <CapacityShow />
    </Provider>
  </div>

  , document.querySelector('.a'));

