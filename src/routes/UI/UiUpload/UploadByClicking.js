import React from 'react';
import { message, Icon, Upload, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class UploadByClicking extends React.Component {
  render() {
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <Upload {...props}>
        <Button>
          <Icon type="upload" />
          <IntlMessages id="ui.uiUpload.clickUpload" />
        </Button>
      </Upload>
    );
  }
}
export default UploadByClicking;
