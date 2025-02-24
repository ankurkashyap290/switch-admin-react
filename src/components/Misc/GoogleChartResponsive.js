import React from 'react';
import WindowResizeListener from 'react-window-size-listener';

class GoogleChartResponsive extends React.Component {
  state = {
    containerWidth: 0,
    containerHeight: 0,
  };

  componentDidMount() {
    this.setState({ containerWidth: 10, containerHeight: 10 });
  }

  ref = node => {
    this.container = node;
  };

  render() {
    const { style, className, children } = this.props;
    const { containerWidth, containerHeight } = this.state;

    const updatedChildren = React.Children.map(children, child => {
      const childProps = { ...child.props };
      if (childProps.options) {
        childProps.options.width = containerWidth;
        childProps.options.height = containerHeight;
      } else {
        childProps.width = containerWidth;
        childProps.height = containerHeight;
      }

      return React.cloneElement(child, { ...childProps });
    });

    return (
      <div style={{ ...style }} className={className} ref={this.ref}>
        <WindowResizeListener
          onResize={() => {
            this.setState({
              containerWidth: this.container.clientWidth,
              containerHeight: this.container.clientHeight,
            });
          }}
        />
        {updatedChildren}
      </div>
    );
  }
}

export default GoogleChartResponsive;
