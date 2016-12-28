require('../uploader/index.css')
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Upload, message} from 'antd';
import { updateUploader } from '../../Redux/actions/index'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isLt8M = file.size / 1024 / 1024 < 8;
    if (!isLt8M) {
        message.error('Image must smaller than 8MB!');
    }
    return isLt8M;
}

class Avatar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: {
                //url: 'https://s1.meixinglobal.com/static/version_1.6/dist/meixin_invest/img/upload_id_placeholder_518x348.png',
                url: 'images/shengfenzhen.png',
                thumbUrl:''
            }
        };
    }


    handleChange = (info) => {
        console.log(JSON.stringify(this.props))
        const { dispatch } = this.props
        if (info.file.status === 'done') {
            let resData=info.fileList[0].response.body
            this.setState({fileList: {thumbUrl: resData}})
            dispatch(updateUploader(this.props.id,resData))
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({imageUrl}));
            // console.log(this.props.id)
        }
    }

    render() {
        // console.log(JSON.stringify(this.props))
        const imageUrl = this.state.fileList.imageUrl
        const newImage = this.state.fileList.thumbUrl?this.state.fileList.thumbUrl:this.props.value ? this.props.value : this.state.fileList.url;
        return (
            <Upload
                className="avatar-uploader"
                name="file"
                showUploadList={false}
                action="https://api1.meixinglobal.com/web/upload/private"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {
                    imageUrl ? <img src={imageUrl} role="presentation" className="avatar"/> :
                        <img src={newImage} role="presentation" className="avatar"/>}
                <div type="plus" className="avatar-uploader-trigger">上传证件
                </div>
            </Upload>
        );
    }
}

Avatar.defaultProps = {};
function mapDispatchToProps(dispatch) {
    return {
        updateUploader: bindActionCreators(updateUploader, dispatch)
    }
}
export default connect( mapDispatchToProps)(Avatar);
