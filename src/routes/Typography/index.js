import React from 'react';
import { Row, Col } from 'antd';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import TypographyWidget from '../../components/Widgets/Typography';
import HeaderTypography from './headerTypography';
import Card from '../../components/UiElements/card';

class Typography extends React.Component {
  render() {
    return (
      <PageHeaderLayout title="Typography">
        <Card className="msaTypography" title={<h3>Typography</h3>}>
          <HeaderTypography />
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Paragraph</p>
            </Col>
            <Col span={16}>
              <p>
                I will be the leader of a company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am the nucleus. I think that’s a
                responsibility that I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Quote</p>
            </Col>
            <Col span={16}>
              <TypographyWidget
                type="quote"
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                authorName="Kanye West"
                profession="Musician"
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Muted Text</p>
            </Col>
            <Col span={16}>
              <TypographyWidget
                type="muted"
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Primary Text</p>
            </Col>
            <Col span={16}>
              <TypographyWidget
                type="primary"
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Success Text</p>
            </Col>
            <Col span={16}>
              <TypographyWidget
                type="success"
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Warning Text</p>
            </Col>
            <Col span={16}>
              <TypographyWidget
                type="warning"
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Danger Text</p>
            </Col>
            <Col span={16}>
              <TypographyWidget
                type="danger"
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: '40px' }} gutter={24}>
            <Col span={8}>
              <p style={{ textAlign: 'right', marginTop: '12px' }}>Small Tag</p>
            </Col>
            <Col span={16}>
              <small>
                I will be the leader of a company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am the nucleus. I think that’s a
                responsibility that I have, to push possibilities, to show people, this is the level
                that things could be at.
              </small>
            </Col>
          </Row>
        </Card>
      </PageHeaderLayout>
    );
  }
}
export default Typography;
