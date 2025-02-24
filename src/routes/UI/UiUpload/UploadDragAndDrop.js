import React from 'react';
import { Icon, Upload, message } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const Dragger = Upload.Dragger;

class UploadDragAndDrop extends React.Component {
  render() {
    const props = {
      name: 'file',
      multiple: true,
      showUploadList: false,
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div style={{ marginTop: 16, height: 180 }}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            <IntlMessages id="ui.uiUpload.uploadText" />
          </p>
          <p className="ant-upload-hint">
            <IntlMessages id="ui.uiUpload.uploadHint" />
          </p>
        </Dragger>
      </div>
    );
  }
}
export default UploadDragAndDrop;
