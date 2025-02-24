import React, { PureComponent, Fragment } from 'react';
import { Card, Button } from 'antd';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import Result from '../../components/Result';
import IntlMessages from '../../components/Misc/intlMessages';

const extra = (
  <div>
    <IntlMessages id="result.error.failedSubmission" />
  </div>
);

const actions = (
  <Fragment>
    <Button type="primary">
      <IntlMessages id="result.error.backToReview" />
    </Button>
  </Fragment>
);

class Error extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title={<IntlMessages id="result.errorPage" />}>
        <Card bordered={false}>
          <Result
            type="error"
            title={<IntlMessages id="result.submissionFailed" />}
            description="Please check and amend the following information before resubmitting."
            extra={extra}
            actions={actions}
            style={{ marginTop: 48, marginBottom: 16 }}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default Error;
