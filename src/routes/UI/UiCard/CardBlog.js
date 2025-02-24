import React from 'react';
import { Row, Col } from 'antd';
import SimpleBlogCard from '../../../components/Widgets/Cards/BlogCard/SimpleBlogCard';
import AdvanceBlogCard from '../../../components/Widgets/Cards/BlogCard/AdvanceBlogCard';
import AdvanceBlogCardSecond from '../../../components/Widgets/Cards/BlogCard/AdvanceBlogCardSecond';

class CardBlog extends React.Component {
  simpleClick = () => {
    console.log('Button Click');
  };

  render() {
    return (
      <Row style={{ marginTop: '40px' }} gutter={16}>
        <Col xl={8} sm={8} lg={8} md={8}>
          <SimpleBlogCard
            label="Focus on Your Employees"
            desc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            // width={400}
            // height={400}
            buttonColor="#011529"
            buttonText="Read Article"
            authorImage="https://source.unsplash.com/480x480/?people&1"
            authorName="Rahul"
            onClick={this.simpleClick}
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <AdvanceBlogCard
            buttonText="Read Article"
            // width={400}
            // height={550}
            label="Fashion"
            desc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            authorImage="https://source.unsplash.com/480x480/?people&2"
            authorName="Rahul"
            backgroundImage="https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            onClick={this.simpleClick}
            backgroundColor="#011529"
            textColor="#fff"
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <AdvanceBlogCardSecond
            coverImage="https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=480&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            // coverImageWidth={370}
            // coverImageHeight={300}

            buttonText="Read Article"
            // width={400}
            // height={550}
            label="Shoes"
            buttonColor="#8956ff"
            desc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            authorImage="https://source.unsplash.com/480x480/?people&3"
            authorName="Saurabh"
            backgroundImage="https://images.unsplash.com/photo-1501236570302-906143a7c9f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=480&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            onClick={this.simpleClick}
            backgroundColor="#011529"
            textColor="#fff"
          />
        </Col>
      </Row>
    );
  }
}
export default CardBlog;
