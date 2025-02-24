import React from 'react';
import { Form, Input, Button, Row, Col, Upload, Icon } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import IntlMessages from '../Misc/intlMessages';
import SimpleEditorToHtml from '../RichTextEditor';

const FormItem = Form.Item;

class Reply extends React.Component {
  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - 75;
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
    const { emailData } = this.props;
    const { Dragger } = Upload;
    return (
      <div>
        <Scrollbars
          style={{ height: this.calculateHeight() }}
          renderThumbVertical={this.renderThumb}
        >
          <Form onSubmit={this.handleSubmit} className="compose-mail">
            <FormItem>
              <Input value={emailData.from} />
            </FormItem>
            <FormItem>
              <Input value={emailData.subject} />
            </FormItem>
            <FormItem>
              <SimpleEditorToHtml textArea={false} />
            </FormItem>
            <FormItem>
              <Dragger>
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
                <Col xl={2} sm={24} md={22} lg={2} />
              </Row>
            </FormItem>
          </Form>
        </Scrollbars>
      </div>
    );
  }
}
export default Reply;
