import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import UploadByClicking from './UploadByClicking';
import UploadDefaultFiles from './UploadDefaultFiles';
import UploadCompleteControl from './UploadCompleteControl';
import UploadPicturesWithList from './UploadPicturesWithList';
import UploadDragAndDrop from './UploadDragAndDrop';
import UploadPicturesWall from './UploadPicturesWall';
import UploadAvatar from './UploadAvatar';

const TabPane = Tabs.TabPane;

class UiUpload extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Uploader/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Upload By Clicking" key="1">
            <UiUploadByClicking />
          </TabPane>
          <TabPane tab="Default Files" key="2">
            <UiUploadDefaultFiles />
          </TabPane>
          <TabPane tab="Complete control over the file list" key="3">
            <UiUploadCompleteControl />
          </TabPane>
          <TabPane tab="Pictures with list styles" key="4">
            <UiUploadPicturesWithList />
          </TabPane>
          <TabPane tab="Drag & Drop" key="5">
            <UiUploadDragAndDrop />
          </TabPane>
          <TabPane tab="Pictures Wall" key="6">
            <UiUploadPicturesWall />
          </TabPane>
          <TabPane tab="Avatar" key="7">
            <UiUploadAvatar />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiUpload;

const UiUploadByClicking = UiBoxC(
  'Upload By Clicking',
  `Classic mode. File selection dialog pops up when upload button is clicked.
                                            `,
  UploadByClicking
);

const UiUploadDefaultFiles = UiBoxC(
  'Default Files',
  `Use defaultFileList for uploaded files when page init..
                                              `,
  UploadDefaultFiles
);

const UiUploadCompleteControl = UiBoxC(
  'Complete control over the file list',
  `You can gain full control over file List by configuring fileList. You can accomplish all kinds of customed functions. The following shows three circumstances:
    1) limit the number of uploaded files.
    2) read from response and show file link.
    3) filter successfully uploaded files according to response from server.
                                                `,
  UploadCompleteControl
);

const UiUploadPicturesWithList = UiBoxC(
  'Pictures with list style',
  `If uploaded file is a picture, the thumbnail can be shown. IE8/9 do not support local thumbnail show. Please use thumbUrl instead.
                                                  `,
  UploadPicturesWithList
);

const UiUploadDragAndDrop = UiBoxC(
  'Drag and Drop',
  `You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.
    We can upload several files at once in modern browsers by giving the input the multiple attribute.
                                                    `,
  UploadDragAndDrop
);

const UiUploadPicturesWall = UiBoxC(
  'Pictures Wall',
  `After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.
                                                      `,
  UploadPicturesWall
);

const UiUploadAvatar = UiBoxC(
  'Avatar',
  `Click to upload user's avatar, and validate size and format of picture with beforeUpload.
                                                        `,
  UploadAvatar
);
