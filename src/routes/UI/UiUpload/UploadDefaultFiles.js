import React from 'react';
import { Icon, Upload, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class UploadDefaultFiles extends React.Component {
  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
          console.log(file, fileList);
        }
      },
      defaultFileList: [
        {
          uid: 1,
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
        {
          uid: 2,
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png',
        },
        {
          uid: 3,
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png',
        },
      ],
    };
    return (
      <Upload {...props}>
        <Button>
          <Icon type="upload" />
          <IntlMessages id="ui.uiUpload.upload" />
        </Button>
      </Upload>
    );
  }
}
export default UploadDefaultFiles;
