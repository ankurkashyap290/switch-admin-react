import React from 'react';
import { Form, Input, Button, Row, Col, Upload, Icon, message } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import SimpleEditorToHtml from '../RichTextEditor';
import ComposeAutoComplete from './Mail/composeAutoComplete';
import IntlMessages from '../Misc/intlMessages';

const FormItem = Form.Item;

class Composed extends React.Component {
  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - 65;
    return adjustHeight;
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    const props = {
      name: 'file',
      multiple: true,
      action: '',
      onChange(info) {
        const {
          file: { status },
        } = info;
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
    const { allMails } = this.props;
    const ComposeAutoCompleteTO = {
      allMails,
      updateData: () => {},
      placeholder: 'To',
    };
    const ComposeAutoCompleteCC = {
      allMails,
      updateData: () => {},
      placeholder: 'CC',
    };
    const { Dragger } = Upload;
    return (
      <div
        style={{
          margin: '5px 10px',
        }}
      >
        <Scrollbars
          style={{ height: this.calculateHeight() }}
          renderThumbVertical={this.renderThumb}
        >
          <Form onSubmit={this.handleSubmit} className="composeMail">
            <FormItem>
              <ComposeAutoComplete {...ComposeAutoCompleteTO} />
              <ComposeAutoComplete {...ComposeAutoCompleteCC} />
            </FormItem>
            <FormItem>
              <Input placeholder="Subject" />
            </FormItem>
            <FormItem>
              <SimpleEditorToHtml textArea={false} />
            </FormItem>
            <FormItem>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  <IntlMessages id="email.uploadText" />
                </p>
                <p className="ant-upload-hint">
                  <IntlMessages id="email.uploadHint" />
                </p>
              </Dragger>
            </FormItem>
            <FormItem>
              <Row>
                <Col xl={6} sm={24} md={6} lg={6}>
                  <Button type="primary" className="login-form-button">
                    <IntlMessages id="email.discard" />
                  </Button>
                </Col>
                <Col xl={2} sm={0} md={2} lg={2} />

                <Col xl={6} sm={24} md={6} lg={6}>
                  <Button type="primary" className="login-form-button">
                    <IntlMessages id="email.saveToDraft" />
                  </Button>
                </Col>
                <Col xl={2} sm={0} md={2} lg={2} />

                <Col xl={6} sm={24} md={6} lg={6}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ float: 'right' }}
                  >
                    <IntlMessages id="email.send" />
                  </Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </Scrollbars>
      </div>
    );
  }
}
export default Composed;
