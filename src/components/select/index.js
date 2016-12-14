/**
 * Created by robot on 2016/12/13.
 */

require ('components/select/index.css')
import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}


class select extends React.Component {



  render() {
    return (
      <div>
        <Select size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled">Disabled</Option>
          <Option value="yiminghe">Yiminghe</Option>
        </Select>
      </div>
    );
  }
}



select.defaultProps = {
};

export default select;
