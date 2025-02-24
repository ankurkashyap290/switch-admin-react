import React, { PureComponent } from 'react';
import { Steps, message, Button, Row, Col } from 'antd';
import UserInfoForm from './userInfoForm';
import CardDetails from './CardDetails';
import Checkbox from '../../UiElements/checkbox';
import Overview from './Overview';
import Finish from './Finish';
import IntlMessages from '../../Misc/intlMessages';

const { Step } = Steps;

class StepsSwitchStep extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      nextWithFormValidation: false,
      userInfo: {},
      cardDetails: {},
    };
  }

  handleUserInfoSubmit = () => {
    // e.preventDefault();
    const { form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleCheckboxClick = value => {
    this.setState({ nextWithFormValidation: value.target.checked });
  };

  userInfoRef = userInfo => {
    this.userInfo = userInfo;
  };

  next = () => {
    const { current, nextWithFormValidation } = this.state;
    let tempCurrent = null;
    if (current === 0 && nextWithFormValidation) {
      this.userInfo.getForm().validateFields((err, values) => {
        if (!err) {
          tempCurrent = current + 1;
          this.setState({ userInfo: values });
        } else {
          tempCurrent = current;
        }
      });
    } else if (current === 1 && nextWithFormValidation) {
      this.cardDetails.getForm().validateFields((err, values) => {
        if (!err) {
          tempCurrent = current + 1;
          this.setState({ cardDetails: values });
        } else {
          tempCurrent = current;
        }
      });
    } else {
      tempCurrent = current + 1;
    }
    this.setState({ current: tempCurrent });
  };

  prev = () => {
    const { current, userInfo, cardDetails } = this.state;
    const tempCurrent = current - 1;

    this.setState({ current: tempCurrent, userInfo, cardDetails });
  };

  render() {
    const { current, cardDetails, userInfo, nextWithFormValidation } = this.state;
    const steps = [
      {
        title: 'User Details',
      },
      {
        title: 'Card Details',
      },
      {
        title: 'Overview',
      },
      {
        title: 'Finish',
      },
    ];
    return (
      <div className="msaStepForm">
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="stepsContent">
          {current === 0 && <UserInfoForm ref={this.userInfoRef} userInfo={userInfo} />}
          {current === 1 && (
            <CardDetails
              ref={ref => {
                this.cardDetails = ref;
              }}
              cardDetails={cardDetails}
            />
          )}
          {current === 2 && <Overview userInfo={userInfo} cardDetails={cardDetails} />}
          {current === 3 && (
            <Finish
              type="success"
              title="Submitted successfully"
              description="he submission results page is used to feed back the results of a series of operational tasks. If it is a simple operation, use the Message global feedback prompt. This text area can show simple supplementary explanations. If there are similar requirements for displaying “documents”, the following gray area can present more complicated content"
            />
          )}
        </div>
        <div className="steps-action">
          <Row>
            <Col xl={12} lg={12} md={12} sm={12}>
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success('Processing complete!')}
                  style={{ float: 'right', marginRight: 8 }}
                >
                  <IntlMessages id="ui.uiSteps.done" />
                </Button>
              )}
              {current > 0 && (
                <Button
                  style={{ marginLeft: 8, marginRight: 8, float: 'right' }}
                  onClick={() => this.prev()}
                >
                  <IntlMessages id="ui.uiSteps.previous" />
                </Button>
              )}
            </Col>
            <Col xl={12} lg={12} md={12} sm={12}>
              {current < steps.length - 1 && (
                <div>
                  {current === 2 ? (
                    <Button type="primary" onClick={() => this.next()}>
                      <IntlMessages id="ui.uiSteps.submit" />
                    </Button>
                  ) : (
                    <div>
                      <Checkbox
                        onChange={this.handleCheckboxClick}
                        checked={nextWithFormValidation}
                      >
                        Next With validation
                      </Checkbox>
                      <Button type="primary" onClick={() => this.next()}>
                        <IntlMessages id="ui.uiSteps.next" />
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default StepsSwitchStep;
