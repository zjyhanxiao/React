import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd';
import {getCity,getCounty} from '../../Redux/actions/index'
const FormItem = Form.Item;
const Option = Select.Option;
function handleChange(value) {
    console.log(`selected ${value}`);
}
let regionData,cityData,countyData
class AddressChina extends React.Component {
    constructor(props) {
        super(props)
    }

    regionChange(value) {
        console.log(`selected ${value}`);
        if (value.split('_').length > 0) {
            console.log(value.split('_')[0])
            const {dispatch} = this.props
            dispatch(getCity({country:this.props.getsProfile.country.split('_')[0],region:value.split('_')[0]}))
        }
        this.props.form.setFieldsValue({
            city:'',
            district:''
        })
    }
    cityChange(value) {
        console.log(`selected ${value}`);
        console.log(value.split('_').length);
        if (value.split('_').length > 0) {
            console.log(value.split('_')[1])
            const {dispatch} = this.props
            dispatch(getCounty({country:this.props.getsProfile.country.split('_')[0],region:this.props.getsProfile.region.split('_')[0],city:value.split('_')[0]}))
        }

        this.props.form.setFieldsValue({
            district:''
        })
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
        if (this.props.getsProfile.region != undefined) {
            regionData = this.props.getsProfile.region.map((region) => <Option key={region.id} value={region.encode + '_' + region.name}>{region.name}</Option>)
        }
        if (this.props.getsProfile.city != null) {
            cityData = this.props.getsProfile.city.map((city) =><Option key={city.id} value={city.encode + '_' + city.name}>{city.name}</Option>)
        }
        if (this.props.getsProfile.county != null) {
            countyData = this.props.getsProfile.county.map((county) =><Option key={county.id} value={county.encode + '_' + county.name}>{county.name}</Option>)
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
                   rules: [{
                       type: 'string',
                       required: true,
                       message: '请选择您所在的省或直辖市！'
                   }],
               })(
                   //<Cascader options={residences} />
                   <Select size="large" style={{width: 240}} onChange={this.regionChange.bind(this)}>
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
                    rules: [{
                        type: 'string',
                        required: true,
                        message: '请选择您所在的市！'
                    }],
                })(
                    //<Cascader options={residences} />
                    <Select size="large" style={{width: 240}} onChange={this.cityChange.bind(this)}>
                        {cityData}
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
                    rules: [{
                        type: 'string',
                        required: true,
                        message: '请选择您所在的区或县！'
                    }],
                })(
                    //<Cascader options={residences} />
                    <Select size="large" style={{width: 240}} onChange={handleChange}>
                        {countyData}
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
                    rules: [{
                        required: true, message: '请填写您的详细地址!'
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
                        required: true, message: '请输入邮编!',
                    }],
                })(
                    <Input type="text" size="large" style={{width: 240}} />
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
