import React, { PureComponent, Fragment } from 'react';
import { Card, Button } from 'antd';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import Result from '../../components/Result';
import IntlMessages from '../../components/Misc/intlMessages';

const extra = (
  <div>
    {' '}
    <IntlMessages id="result.success.info" />
  </div>
);

const actions = (
  <Fragment>
    <Button type="primary">
      <IntlMessages id="result.back" />
    </Button>
    <Button>
      <IntlMessages id="result.viewItem" />
    </Button>
    <Button>
      <IntlMessages id="result.downloadPrint" />
    </Button>
  </Fragment>
);

class Success extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="result.successPage" />}>
        <Card bordered={false}>
          <Result
            type="success"
            title={<IntlMessages id="result.submittedSuccessfully" />}
            description="The submission results page is used to feed back the results of a series of operational tasks. If it is a simple operation, use the Message global feedback prompt. This text area can show simple supplementary explanations. If there are similar requirements for displaying “documents”, the following gray area can present more complicated content"
            extra={extra}
            actions={actions}
            style={{ marginTop: 48, marginBottom: 16 }}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default Success;
