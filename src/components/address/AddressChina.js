import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd';
import {saveFields, getState,getCity} from '../Redux/actions/index'
const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
    if(value.split('_')!=''){
        console.log(value.split('_')[1])
    }
}
let regionData
class AddressChina extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.getFieldDecorator;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        if (this.props.getsProfile.region!=undefined) {
            regionData = this.props.getsProfile.region.map((region)=><Option value={region.encode+'_'+region.id} key={region.id}>{region.name}</Option>)
        }

        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        return (
            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

                <Row>
            <Col span={12}>
             <Row> <FormItem
                 {...formItemLayout}
                 label="省/直辖市"
                 labelCol={{span: 4, offset: 4}}
                 wrapperCol={{span: 14}}
             >
               {getFieldDecorator('region', {
                   //initialValue: 'CN',
                   rules: [{
                       type: 'string',
                       required: false,
                       message: '请选择您所在的省或直辖市！'
                   }],
               })(
                   //<Cascader options={residences} />
                   <Select size="large" style={{width: 240}} onChange={handleChange}>
                       {regionData}
                 </Select>
               )}
             </FormItem></Row>
              <Row><FormItem
                  {...formItemLayout}
                  label="市/州/地区"
                  labelCol={{span: 4, offset: 4}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('city', {
                    initialValue: 'CN',
                    rules: [{
                        type: 'string',
                        required: false,
                        message: '请选择您所在的市！'
                    }],
                })(
                    //<Cascader options={residences} />
                    <Select size="large" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="CN">中国</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}
              </FormItem></Row>
              <Row><FormItem
                  {...formItemLayout}
                  label="县/区"
                  labelCol={{span: 4, offset: 4}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('district', {
                    initialValue: 'CN',
                    rules: [{
                        type: 'string',
                        required: false,
                        message: '请选择您所在的区或县！'
                    }],
                })(
                    //<Cascader options={residences} />
                    <Select size="large" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="CN">中国</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}
              </FormItem></Row>
            </Col>
            <Col span={12}>
              <Row><FormItem
                  {...formItemLayout}
                  label="详细地址"
                  labelCol={{span: 4, offset: 2}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('detail', {
                    initialValue: 'yang',
                    rules: [{
                        required: false, message: '请填写您的详细地址!'
                    }, {
                        validator: this.checkConfirm,
                    }],
                })(
                    <Input type="textarea" style={{width: 240, height: 88, resize: 'none'}} />
                )}
              </FormItem></Row>
              <Row><FormItem
                  {...formItemLayout}
                  label="邮编"
                  labelCol={{span: 4, offset: 2}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('postal_code', {
                    rules: [{
                        required: false, message: '请输入邮编!',
                    }],
                })(
                    <Input type="text" size="large" style={{width: 240}} onBlur={this.handlePasswordBlur} />
                )}
              </FormItem></Row>
            </Col>
          </Row>


      </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}
AddressChina.defaultProps = {};
export default connect(mapStateToProps)(AddressChina)


/*<FormItem {...tailFormItemLayout}>
 <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
 <Col span={8} offset={7}>
 <Button style={{
 width: '120px',
 height: '50px',
 borderRadius: '30px',
 background: '#223976',
 color: '#fff',
 fontSize: '18px'
 }} type="primary" htmlType="submit" onClick= {this.handleSubmit.bind(this)} size="large">下一步</Button>
 </Col>
 </Row>
 </FormItem>*/
