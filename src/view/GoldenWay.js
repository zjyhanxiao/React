import React from 'react';
import {Row,Col,Button} from 'antd';
import IndexAWC from '../components/payment/indexAWC'
import IndexAW from '../components/payment/indexAW'
import IndexW from '../components/payment/indexW'

class GoldenWay extends React.Component {

  constructor() {
    super();
    this.state = {
      a:true,
      profile:{}
    }
  }

  handleSubmit(e) {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', JSON.stringify(values));
        /*const {dispatch} = this.props
         dispatch(updateProfile(values, this.success))*/
      }
    });
    e.preventDefault();
  }


  render() {
    return (
      <div style={{width: '100%', background: 'gray', overflow: 'hidden',display: this.props.three == true ? 'block' : 'none'}}>
        <p style={{width: '100%', textAlign:'center',color:'#159bd6',fontSize:'20px',margin:'50px 0'}}>选择入金方式</p>
        <IndexAWC/>
        <IndexW/>
        <IndexAW/>

        <div style={{width:'900px',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
          <Row style={{paddingTop: '50px', paddingBottom: '40px'}}>
            <Col span={8} offset={8}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#223976',
                color: '#fff',
                fontSize: '18px'
              }} type="primary" htmlType="submit"  onClick={this.handleSubmit.bind(this)} size="large">完成</Button>
            </Col>
          </Row>
        </div>

        <p style={{width: '100%', textAlign:'center'}}>如有疑问，请邮件联系invest@meixinfinance.com。</p>



        {this.state.a ?
          ''
          :
          ''}

      </div>
    );
  }
}

GoldenWay.defaultProps = {};

export default GoldenWay;
