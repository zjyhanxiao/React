// import 'core-js/fn/object/assign'
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
      {/*<ConfirmInvestment></ConfirmInvestment>*/}
      {/*<GoldenWay></GoldenWay>*/}
    </div>

    , document.getElementById('app'));
