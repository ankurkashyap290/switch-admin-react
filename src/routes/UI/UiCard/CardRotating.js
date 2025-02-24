import React from 'react';
import { Row, Col } from 'antd';
import RotatingCard from '../../../components/Widgets/Cards/RotatingCard/RotatingCard';

class CardRotating extends React.Component {
  render() {
    return (
      <Row style={{ marginTop: '40px' }} gutter={16}>
        <Col xl={8} sm={8} lg={8} md={8}>
          <RotatingCard
            cardFrontTitle="This Card is doing a full rotation on hover"
            cardFrontDesc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            textColor="#fff"
            backgroundImage="https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            authorImage="https://source.unsplash.com/100x100/?faces&1"
            authorName="Rahul"
            // width={400}
            height={300}
            cardBackType="postShare"
            cardBackTitle="Share Post"
            cardBackDesc="As admin you can edit, view or delete post"
            viewButtonColor="#12acc1"
            editButtonColor="#4caf50"
            deleteButtonColor="#f44336"
            readButtonColor="#f44336"
            twitterButtonColor="#55acee"
            facebookButtonColor="#3b5998"
            instagramButtonColor="#ea4c89"
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <RotatingCard
            cardFrontTitle="This Card is doing a full rotation on hover"
            cardFrontDesc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            textColor="#fff"
            backgroundImage="https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            authorImage="https://source.unsplash.com/100x100/?faces&2"
            authorName="Rahul"
            // width={400}
            height={300}
            cardBackType="postControls"
            cardBackTitle="Manage Post"
            cardBackDesc="As admin you can edit, view or delete post"
            viewButtonColor="#12acc1"
            editButtonColor="#4caf50"
            deleteButtonColor="#f44336"
            readButtonColor="#f44336"
            bookmarkButtonColor="#4caf50"
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <RotatingCard
            cardFrontTitle="This Card is doing a full rotation on hover"
            cardFrontDesc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            textColor="#fff"
            backgroundImage="https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            authorImage="https://source.unsplash.com/100x100/?faces&3"
            authorName="Rahul"
            // width={400}
            height={300}
            cardBackType="postRead"
            cardBackTitle="Read post"
            cardBackDesc="As admin you can edit, view or delete post"
            viewButtonColor="#12acc1"
            editButtonColor="#4caf50"
            deleteButtonColor="#f44336"
            readButtonColor="#f44336"
            bookmarkButtonColor="#4caf50"
          />
        </Col>
      </Row>
    );
  }
}
export default CardRotating;
