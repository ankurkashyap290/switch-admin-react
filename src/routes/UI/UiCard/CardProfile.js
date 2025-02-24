import React from 'react';
import { Row, Col } from 'antd';
import ProfileCardWithAvatar from '../../../components/Widgets/Cards/ProfileCard/ProfileCardWithAvatar';
import ProfileCardWithCover from '../../../components/Widgets/Cards/ProfileCard/ProfileCardWithCover';
import ProfileCardWithAvatarSecond from '../../../components/Widgets/Cards/ProfileCard/ProfileCardWithAvatarSecond';

class CardProfile extends React.Component {
  render() {
    return (
      <Row style={{ marginTop: '40px' }} gutter={16}>
        <Col xl={8} sm={8} lg={8} md={8}>
          <ProfileCardWithAvatar
            avatarImage="https://source.unsplash.com/480x480/?people&1"
            // width={400}
            // height={600}
            designation="CEO/CO-FOUNDER"
            name="Alec Thompson"
            twitterButtonColor="#55acee"
            facebookButtonColor="#3b5998"
            instagramButtonColor="#ea4c89"
            desc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <ProfileCardWithCover
            coverImage="https://source.unsplash.com/480x480/?people&2"
            // width={400}
            // height={600}
            designation="CEO/CO-FOUNDER"
            name="Alec Thompson"
            desc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
            twitterButtonColor="#55acee"
            facebookButtonColor="#3b5998"
            instagramButtonColor="#ea4c89"
          />
        </Col>
        <Col xl={8} sm={8} lg={8} md={8}>
          <ProfileCardWithAvatarSecond
            avatarImage="https://source.unsplash.com/480x480/?people&3"
            buttonText="Follow"
            // width={400}
            height={300}
            designation="CEO/CO-FOUNDER"
            backgroundImage="https://images.unsplash.com/photo-1501236570302-906143a7c9f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=480&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            name="Gaurav"
            textColor="#fff"
            desc="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
          />
        </Col>
      </Row>
    );
  }
}
export default CardProfile;
