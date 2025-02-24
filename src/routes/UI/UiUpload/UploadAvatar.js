import React from 'react';
import { message, Icon, Upload } from 'antd';

class UploadAvatar extends React.Component {
  state = {};

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  beforeUpload = file => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  };

  handleChange = info => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <Upload
        className="avatar-uploader"
        name="avatar"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="" className="avatar" />
        ) : (
          <Icon type="plus" className="avatar-uploader-trigger" />
        )}
      </Upload>
    );
  }
}
export default UploadAvatar;
