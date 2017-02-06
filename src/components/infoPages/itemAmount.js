import React from 'react';

import {connect} from 'react-redux'
import {investAmount} from '../../Redux/actions/index'
import {Button, Icon} from 'antd';


class ItemAmount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: false,
            product: {
                currentVal: 10000
            }
        }
    }

    shouldComponentUpdate(nextprops, nextState) {
        const {dispatch} = this.props
        if (this.props.getsProfile.invest_amount == undefined) {
            dispatch(investAmount(nextState.product.currentVal))
        } else if (this.props.getsProfile.invest_amount != nextState.product.currentVal) {
            dispatch(investAmount(nextState.product.currentVal))

        }
        return true
    }

    onChange = (e) => {
        if (!Number(e.target.value) && e.target.value != '') {
            alert('not a number')
        } else {
            this.setState({
                product: {
                    currentVal: e.target.value,
                }
            })
/*            if (e.target.value >= this.props.minimum_invest_amount) {
                if (e.target.value % this.props.invest_par_value != 0) {
                    let invest_par_value = this.props.invest_par_value
                    alert('投资金额必须为' + invest_par_value + '的整数倍')
                } else {
                    this.setState({
                        product: {
                            currentVal: e.target.value,
                        }
                    })
                }
            } else {
                this.setState({
                    product: {
                        currentVal: e.target.value,
                    }
                })
            }*/
        }
        e.preventDefault();
    }

    add() {
        this.setState({
            product: {
                currentVal: parseInt(this.state.product.currentVal) + parseInt(this.props.invest_par_value),
            }
        })
    }

    sub(e) {
        this.setState({
            product: {
                currentVal: parseInt(this.state.product.currentVal) - parseInt(this.props.invest_par_value),
            }
        })
    }

    render() {
        return (
            <div style={{
                width: '500px',
                height: '160px',
                border: '1px solid #cccccc',
                borderTop: '5px solid #4760a1',
                borderRadius: '5px',
                background: '#ffffff'
            }}>
                <div style={{width: '340px', height: '100px', margin: '10px auto', textAlign: 'center'}}>
                  <p style={{color: '#4760a1', fontSize: '18px'}}>投资金额</p>

                    {/*<div style={{marginTop:'10px',color:'#ff6600',fontSize:'20px'}}>*/}
                    {/*$<span style={{width:'200px',height:'37px'}}>1234567</span>*/}
                    {/*</div>*/}
                    {/*<div style={{color:'#159bd6',fontSize:'16px'}}>投资确认</div>*/}

                    <div style={{margin: '10px 0'}}>
                    <Button type="ghost"
                            disabled={this.state.product.currentVal > this.props.minimum_invest_amount ? false : true}
                            onClick={this.sub.bind(this)} shape="circle" icon="minus" style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid #4760a1',
                        color: '#4760a1',
                        fontWeight: '900',
                        marginRight: '10px'
                    }} />
                    <span style={{
                        display: 'inline-block',
                        width: '220px',
                        height: '40px',
                        color: '#ff6600',
                        fontSize: '18px',
                        border: '1px solid #cccccc',
                        borderRadius: '5px'
                    }}>
                      &nbsp;$<input type="text" value={this.state.product.currentVal}
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}
                                    style={{
                                        display: 'inline',
                                        width: '200px',
                                        height: '37px',
                                        fontSize: '18px',
                                        color: '#ff6600',
                                        border: 'none',
                                        outline: 'none',
                                        textAlign: 'center'
                                    }} />
                    </span>
                    <Button type="ghost" onClick={this.add.bind(this)} shape="circle" icon="plus" style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid #4760a1',
                        color: '#4760a1',
                        fontWeight: '900',
                        marginLeft: '10px'
                    }} />
                  </div>

                  <p style={{color: '#4760a1'}}>投资金额为{this.props.invest_par_value}美元的整数倍</p>

                </div>

                {this.state.a ?
                    <div style={{borderTop: '1px dashed #4760a1', color: '#4760a1', lineHeight: '32px'}}>
                  <p style={{marginLeft: '10px', float: 'left'}}>优惠福利：体验金$<span>1000</span></p>
                  <i style={{float: 'right', marginRight: '10px', cursor: 'pointer'}}>
                    <Icon type="question-circle-o" style={{fontSize: '16px'}} />
                  </i>
                </div>
                    :
                    ''

                }

              </div>
        );
    }
}

ItemAmount
    .defaultProps = {};
const
    mapStateToProps = (state) => {
        return {
            getsProfile: state.getsProfile
        }
    }


export
default

connect(mapStateToProps)

(
    ItemAmount
)
