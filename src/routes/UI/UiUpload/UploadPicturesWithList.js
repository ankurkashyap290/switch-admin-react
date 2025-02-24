import React from 'react';
import { Icon, Upload, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class UploadPicturesWithList extends React.Component {
  render() {
    const fileList = [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: '/images/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: '/images/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: '/images/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: '/images/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ];

    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      defaultFileList: [...fileList],
    };

    const props2 = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      defaultFileList: [...fileList],
      className: 'upload-list-inline',
    };
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> <IntlMessages id="ui.uiUpload.upload" />
          </Button>
        </Upload>
        <br />
        <br />
        <Upload {...props2}>
          <Button>
            <Icon type="upload" /> <IntlMessages id="ui.uiUpload.upload" />
          </Button>
        </Upload>
      </div>
    );
  }
}
export default UploadPicturesWithList;
