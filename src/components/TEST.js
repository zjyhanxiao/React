/**
 * Created by robot on 2016/12/27.
 */

import React from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: {
        ...props.username,
        value: props.username.value,
      },
    };
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form inline>
      <FormItem label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
    </Form>
  );
});

const Demo = React.createClass({
  getInitialState() {
    return {
      fields: {
        username: {
          value: 'benjycui',
        },
      },
    };
  },
  handleFormChange(changedFields) {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  },
  render() {
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    );
  },
});

Demo.defaultProps = {};

export default Demo;
