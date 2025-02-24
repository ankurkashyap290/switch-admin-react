import React from 'react';
import { Row, Col } from 'antd';
import SimplePriceCard from '../../../components/Widgets/Cards/PricingCards/SimplePriceCard';
import AdvancePriceCard from '../../../components/Widgets/Cards/PricingCards/AdvancePriceCard';

class CardPricing extends React.Component {
  render() {
    return (
      <Row gutter={16}>
        <Col xl={8} sm={8} lg={8} md={8}>
          <SimplePriceCard
            label="Basic"
            image="https://source.unsplash.com/100x100/?faces&1"
            price={30}
            // height={600}
            desc="This is good if your company size is between 2 and 10 Persons."
            buttonText="Choose Plan"
            fontColor="#173f5f"
            buttonColor="#011529"
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <AdvancePriceCard
            label="Premium"
            image="https://source.unsplash.com/100x100/?faces&2"
            price={30}
            buttonText="Choose Plan"
            height={600}
            fontColor="#173f5f"
            buttonColor="#011529"
            type="info"
            desc={['100 Projects', '5 Team Members', '55 PersonalContacts', '5,000 Messages']}
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <AdvancePriceCard
            label="Platinum"
            image="https://source.unsplash.com/100x100/?faces&3"
            price={70}
            buttonText="Choose Plan"
            height={600}
            fontColor="#173f5f"
            buttonColor="#011529"
            type="product"
            included={['Sharing Tools', 'Design Tools']}
            excluded={[' Private Messages', 'Personal Brand']}
          />
        </Col>
      </Row>
    );
  }
}
export default CardPricing;
