/**
 * Created by robot on 2016/12/13.
 */

require ('components/select/index.css')
import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;



class select extends React.Component {

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div>
        <Select size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="yiminghe">Yiminghe</Option>
        </Select>
      </div>
    );
  }
}



select.defaultProps = {
};

export default select;
