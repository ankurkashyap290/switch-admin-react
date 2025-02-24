import React from 'react';
import { Form, Tabs } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import HorizontalLoginForm from './HorizontalLoginForm';
import NormalLoginForm from './NormalLoginForm';
import RegistrationForm from './RegistrationForm';
import AdvancedSearchForm from './AdvancedSearchForm';

const TabPane = Tabs.TabPane;

class UiForm extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<Form/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Login" key="1">
            <UiNormalLoginForm />
          </TabPane>
          <TabPane tab="Login Horizontal" key="2">
            <UiHorizontalLoginForm />
          </TabPane>

          <TabPane tab="Registration" key="3">
            <UiRegistrationForm />
          </TabPane>
          <TabPane tab="Advanced Search Form" key="4">
            <UiAdvancedSearchForm />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiForm;

const UiHorizontalLoginForm = UiBoxC(
  'Horizontal Login Form',
  'Horizontal login form is often used in navigation bar',
  Form.create()(HorizontalLoginForm)
);

export { UiHorizontalLoginForm };

const UiNormalLoginForm = UiBoxC(
  'Normal Login Form',
  'Normal login form which can contain more elements.',
  Form.create()(NormalLoginForm)
);

export { UiNormalLoginForm };

const UiRegistrationForm = UiBoxC(
  'Registration Form',
  'Fill in this form to create a new account for you.',
  Form.create()(RegistrationForm)
);

export { UiRegistrationForm };

const UiAdvancedSearchForm = UiBoxC(
  'Advanced Search Form',
  'Fill in this form to search',
  Form.create()(AdvancedSearchForm)
);

export { UiAdvancedSearchForm };
