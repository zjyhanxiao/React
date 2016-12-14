require('components/uploader/index.css')
import React from 'react';
import {Upload, message} from 'antd';

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
    state = {
        fileList: {
            //url: 'https://s1.meixinglobal.com/static/version_1.6/dist/meixin_invest/img/upload_id_placeholder_518x348.png',
          url:'images/shengfenzhen.png'
        }
    };

    handleChange = (info) => {
        if (info.file.status === 'done') {
            this.setState({fileList:{url:info.fileList[0].response.body}})
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({imageUrl}));
        }
    }

    render() {
        const imageUrl = this.state.imageUrl;
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
                        <img src={this.state.fileList.url} role="presentation" className="avatar"/>}
                <div type="plus" className="avatar-uploader-trigger">上传证件
                </div>
            </Upload>
        );
    }
}

Avatar.defaultProps = {};

export default Avatar;
