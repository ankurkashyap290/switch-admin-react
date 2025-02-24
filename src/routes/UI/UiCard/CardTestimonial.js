import React from 'react';
import { Row, Col } from 'antd';
import TestimonialCard from '../../../components/Widgets/Testimonials/TestimonialCard';
import QuotesCard from '../../../components/Widgets/Cards/QuotesCard';
import FullBackgroundCard from '../../../components/Widgets/Cards/FullBackgroundCard/FullBackgroundCard';

class CardTestimonial extends React.Component {
  simpleClick = () => {
    console.log('Button Click');
  };

  render() {
    return (
      <Row style={{ marginTop: '40px' }} gutter={16}>
        <Col xl={8} sm={8} lg={8} md={8}>
          <FullBackgroundCard
            label="Focus on Your Employees"
            desc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            // width={400}
            // height={300}
            buttonColor="#f44336"
            textColor="#fff"
            buttonText="Read Article"
            backgroundImage="https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            onClick={this.simpleClick}
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <QuotesCard
            quotes="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            authorName="Gaurav"
            textColor="#fff"
            backgroundImage="https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            // width={400}
            height={400}
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <TestimonialCard
            // width={300}
            height={450}
            review="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            clientImage="https://source.unsplash.com/150x200/?people"
            clientName="Rahul"
            clientContact="@rahul"
            backgroundImage="https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            backgroundColor="#011529"
            textColor="#fff"
          />
        </Col>
      </Row>
    );
  }
}
export default CardTestimonial;
