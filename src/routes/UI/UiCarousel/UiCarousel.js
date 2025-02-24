import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import CarouselBasic from '../../../components/Widgets/Carousels/CarouselBasic';
import CarouselVertical from '../../../components/Widgets/Carousels/CarouselVertical';
import TestimonialCarousel from '../../../components/Widgets/Testimonials/TestimonialsCrousel';
import CarouselCustomized from '../../../components/Widgets/Carousels/CarouselCustomized';

const TabPane = Tabs.TabPane;

class UiCarousel extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<Carousel/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <CarouselBasic slides={Slides} />
          </TabPane>
          <TabPane tab="Fade IN" key="2">
            <CarouselBasic slides={Slides} effect="fade" />
          </TabPane>
          <TabPane tab="Vertical" key="3">
            <CarouselVertical slides={Slides} vertical />
          </TabPane>
          <TabPane tab="Scroll Automatically" key="4">
            <CarouselBasic slides={Slides} effect="fade" autoplay />
          </TabPane>
          <TabPane tab="Testimonial Carousel" key="5">
            <TestimonialCarousel testimonialSlide={testimonialSlide} />
          </TabPane>
          <TabPane tab="Customized Carousel" key="6">
            <CarouselCustomized slides={Slides} />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiCarousel;

const Slides = {
  slide1: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    legend: 'Slide 1',
  },
  slide2: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    legend: 'Slide 2',
  },
  slide3: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    legend: 'Slide 3',
  },
  slide4: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    legend: 'Slide 4',
  },
  slide5: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    legend: 'Slide 5',
  },
};

const testimonialSlide = {
  slide1: {
    image: '',
    slideColor: '#333333',
    textColor: '#ffff',
    clientImage: 'https://source.unsplash.com/480x480/?people',
    clientImageWidth: '100px',
    clientImageHeight: '100px',
    review:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
    clientName: 'Kendall Thompson',
    clientDesignation: 'CEO @ Marketing Digital Ltd.',
    rate: 5,
  },
  slide2: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    slideColor: '#333333',
    textColor: '#ffff',
    clientImage: 'https://source.unsplash.com/480x480/?people',
    clientImageWidth: '100px',
    clientImageHeight: '100px',
    review:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
    clientName: 'Christian Louboutin',
    clientDesignation: 'Designer @ Louboutin & Co.',
    rate: 4,
  },
  slide3: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    slideColor: '#333333',
    textColor: '#ffff',
    clientImage: 'https://source.unsplash.com/480x480/?people',
    clientImageWidth: '100px',
    clientImageHeight: '100px',
    review:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
    clientName: 'Gina Andrew',
    clientDesignation: 'CEO @ Marketing Digital Ltd.',
    rate: 3,
  },
  slide4: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    slideColor: '#333333',
    textColor: '#ffff',
    clientImage: 'https://source.unsplash.com/480x480/?people',
    clientImageWidth: '100px',
    clientImageHeight: '100px',
    review:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
    clientName: 'George West',
    clientDesignation: 'CEO @ Marketing Digital Ltd.',
    rate: 5,
  },
  slide5: {
    image:
      'https://images.unsplash.com/photo-1530482817083-29ae4b92ff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    slideColor: '#333333',
    textColor: '#ffff',
    clientImage: 'https://source.unsplash.com/480x480/?people',
    clientImageWidth: '100px',
    clientImageHeight: '100px',
    review:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
    clientName: 'Alec Thompson',
    clientDesignation: 'CEO @ Marketing Digital Ltd.',
    rate: 4,
  },
};
