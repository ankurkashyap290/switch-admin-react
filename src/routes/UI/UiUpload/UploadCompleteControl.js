import React from 'react';
import { Icon, Upload, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class UploadCompleteControl extends React.Component {
  state = {
    fileList: [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ],
  };

  handleChange = info => {
    let fileList = info.fileList;
    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter(file => {
      if (file.response) {
        return file.status === 'done';
      }
      return true;
    });
    this.setState({ fileList });
  };

  render() {
    const { fileList } = this.state;
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <Upload {...props} fileList={fileList}>
        <Button>
          <Icon type="upload" /> <IntlMessages id="ui.uiUpload.upload" />
        </Button>
      </Upload>
    );
  }
}
export default UploadCompleteControl;
