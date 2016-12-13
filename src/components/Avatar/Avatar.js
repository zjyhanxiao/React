require ('components/Avatar/index.css')
import React from 'react';
import { Upload, Icon, message } from 'antd';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  //const isJPG = file.type === 'image/jpeg';
  //if (!isJPG) {
  //  message.error('You can only upload JPG file!');
  //}
  //const isLt2M = file.size / 1024 / 1024 < 2;
  //if (!isLt2M) {
  //  message.error('Image must smaller than 2MB!');
  //}
  //return isLt2M && isJPG;
}

class Avatar extends React.Component {
  state = {};

  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
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
          imageUrl ?
            <img src={imageUrl} role="presentation" className="avatar" /> :
            <Icon type="plus" className="avatar-uploader-trigger" />
        }
      </Upload>
    );
  }
}

Avatar.defaultProps = {
};

export default Avatar;
