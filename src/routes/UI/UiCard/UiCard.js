import React from 'react';
import { Tabs, Card, Col, Row, Avatar, Icon } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import IntlMessages from '../../../components/Misc/intlMessages';
import CardPricing from './CardPricing';
import CardBlog from './CardBlog';
import CardProfile from './CardProfile';
import CardRotating from './CardRotating';
import CardTestimonial from './CardTestimonial';

const TabPane = Tabs.TabPane;
const { Meta } = Card;
const { Fragment } = React;
class UiCard extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Card/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiCardBasic />
          </TabPane>
          <TabPane tab="No Border" key="2">
            <UiCardNoBorder />
          </TabPane>
          <TabPane tab="Simple Card" key="3">
            <UiCardSimple />
          </TabPane>
          <TabPane tab="Customized Content" key="4">
            <UiCardCustomized />
          </TabPane>
          <TabPane tab="Card in Column" key="5">
            <UiCardColumn />
          </TabPane>
          <TabPane tab="Loading Card" key="6">
            <UiCardLoading />
          </TabPane>
          <TabPane tab="Grid Card" key="7">
            <UiCardGrid />
          </TabPane>
          <TabPane tab="Pricing Card" key="8">
            <UiCardPricing />
          </TabPane>
          <TabPane tab="Blog Card" key="9">
            <UiCardBlog />
          </TabPane>
          <TabPane tab="Profile Card" key="10">
            <UiCardProfile />
          </TabPane>
          <TabPane tab="Rotating Card" key="11">
            <UiCardRotating />
          </TabPane>
          <TabPane tab="Testimonial Card" key="12">
            <UiCardTestimonial />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiCard;

const CardBasic = () => {
  return (
    <Card
      title={<IntlMessages id="ui.uiCard.cardTitle" />}
      extra={<a href="#/">More</a>}
      style={{ width: 300 }}
    >
      <p>
        <IntlMessages id="ui.uiCard.cardContent" />
      </p>
      <p>
        <IntlMessages id="ui.uiCard.cardContent" />
      </p>
      <p>
        <IntlMessages id="ui.uiCard.cardContent" />
      </p>
    </Card>
  );
};

const UiCardBasic = UiBoxC(
  'Basic Card',
  `A basic card containing a title, content and an extra corner content.
                                                `,
  CardBasic
);

const CardNoBorder = () => {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>
          <IntlMessages id="ui.uiCard.cardContent" />
        </p>
        <p>
          <IntlMessages id="ui.uiCard.cardContent" />
        </p>
        <p>
          <IntlMessages id="ui.uiCard.cardContent" />
        </p>
      </Card>
    </div>
  );
};

const UiCardNoBorder = UiBoxC(
  'No Border',
  `A borderless card on a gray background..
                                                  `,
  CardNoBorder
);

const CardSimple = () => {
  return (
    <Card style={{ width: 300 }}>
      <p>
        <IntlMessages id="ui.uiCard.cardContent" />
      </p>
      <p>
        <IntlMessages id="ui.uiCard.cardContent" />
      </p>
      <p>
        <IntlMessages id="ui.uiCard.cardContent" />
      </p>
    </Card>
  );
};

const UiCardSimple = UiBoxC(
  'Simple Card',
  `A simple card only containing a content area.
                                                    `,
  CardSimple
);

const CardCustomized = () => {
  return (
    <Fragment>
      <Card hoverable style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img alt="example" width="100%" src="/images/QBnOOoLaAfKPirc.png" />
        </div>
        <div className="custom-card">
          <h3>
            <IntlMessages id="ui.uiCard.europeStreet" />
          </h3>
          <p>www.instagram.com</p>
        </div>
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="/images/QBnOOoLaAfKPirc.png" />}
      >
        <Meta
          title={<IntlMessages id="ui.uiCard.europeStreet" />}
          description="www.instagram.com"
        />
      </Card>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src="/images/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src="/images/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<IntlMessages id="ui.uiCard.cardTitle" />}
          description={<IntlMessages id="ui.uiCard.cardDesc" />}
        />
      </Card>
    </Fragment>
  );
};

const UiCardCustomized = UiBoxC(
  'Customized Content',
  `Customizing default width and margin.
                                                      `,
  CardCustomized
);

const CardColumn = () => {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title={<IntlMessages id="ui.uiCard.cardTitle" />} bordered={false}>
            <IntlMessages id="ui.uiCard.cardContent" />
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<IntlMessages id="ui.uiCard.cardTitle" />} bordered={false}>
            <IntlMessages id="ui.uiCard.cardContent" />
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<IntlMessages id="ui.uiCard.cardTitle" />} bordered={false}>
            <IntlMessages id="ui.uiCard.cardContent" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const UiCardColumn = UiBoxC(
  'Card in Column',
  `Cards usually cooperate with grid column layout in overview page.
                                                        `,
  CardColumn
);

const CardLoading = () => {
  return (
    <Card loading title={<IntlMessages id="ui.uiCard.cardTitle" />} style={{ width: '34%' }}>
      <IntlMessages id="ui.uiCard.cardContent" />
    </Card>
  );
};

const UiCardLoading = UiBoxC(
  'Loading Card',
  `Shows a loading indicator while the contents of the card is being fetched.
                                                          `,
  CardLoading
);

const CardGrid = () => {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  return (
    <Card title={<IntlMessages id="ui.uiCard.cardTitle" />} hoverable>
      <Card.Grid style={gridStyle}>
        <IntlMessages id="ui.uiCard.cardContent" />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <IntlMessages id="ui.uiCard.cardContent" />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <IntlMessages id="ui.uiCard.cardContent" />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <IntlMessages id="ui.uiCard.cardContent" />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <IntlMessages id="ui.uiCard.cardContent" />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <IntlMessages id="ui.uiCard.cardContent" />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <IntlMessages id="ui.uiCard.cardContent" />
      </Card.Grid>
    </Card>
  );
};

const UiCardGrid = UiBoxC(
  'Grid Card',
  `Grid style card content.
                                                            `,
  CardGrid
);

const UiCardPricing = UiBoxC(
  'Pricing Card',
  `Shows different types of pricing cards.
                                                          `,
  CardPricing
);

const UiCardBlog = UiBoxC(
  'Blog Card',
  `Shows different types of blog cards.
                                                          `,
  CardBlog
);
const UiCardProfile = UiBoxC(
  'Profile Card',
  `Shows different types of profile cards.
                                                          `,
  CardProfile
);

const UiCardRotating = UiBoxC(
  'Rotating Card',
  `Shows rotating cards.
                                                          `,
  CardRotating
);

const UiCardTestimonial = UiBoxC(
  'Testimonial Card',
  `Shows quotes and testimonial cards.
                                                          `,
  CardTestimonial
);
