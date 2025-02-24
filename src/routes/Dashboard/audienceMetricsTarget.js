import React, { Component } from 'react';
import { Row, Col } from 'antd';
import TargetReportSlider from '../../components/Widgets/SocialMedia/TargetReportSlider';
import IntlMessages from '../../components/Misc/intlMessages';

class AudienceMetricsTarget extends Component {
  render() {
    const { usersTargetMarks, sessionsTargetMarks, pageViewsTargetMarks } = this.props;
    return (
      <div className="audienceMetricsTarget">
        <Row gutter={24} className="audienceTarget">
          <Col span={8}>
            <TargetReportSlider
              label={<IntlMessages id="dashboard.analytic.users" />}
              marks={usersTargetMarks}
              defaultValue={88}
            />
          </Col>
          <Col span={8} className="sessionsTarget">
            <TargetReportSlider
              label={<IntlMessages id="dashboard.analytic.sessions" />}
              marks={sessionsTargetMarks}
              defaultValue={93}
            />
          </Col>
          <Col span={8} className="pageViewTarget">
            <TargetReportSlider
              label={<IntlMessages id="dashboard.analytic.pageViews" />}
              marks={pageViewsTargetMarks}
              defaultValue={98}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default AudienceMetricsTarget;
