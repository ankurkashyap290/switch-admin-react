import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends Component {
  static defaultProps = {
    position: 'bottom',
  };

  constructor(props) {
    super();
    this.state = {
      displayColorPicker: false,
      color: props.color,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.color });
  }

  handleClick = () => {
    this.setState({ displayColorPicker: true });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeComplete = color => {
    const { onChangeComplete } = this.props;
    this.setState({ color: color.hex });
    const { rgb } = color;

    const o = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);

    const textColor = o > 125 ? '#7e7e7e' : 'white';
    onChangeComplete(color.hex, textColor);
  };

  render() {
    const { displayColorPicker, color } = this.state;

    const swatch = (
      <div className="swatch" onClick={this.handleClick}>
        <div style={{ background: color }} className="swatchColor" />
      </div>
    );
    const picker = displayColorPicker ? (
      <div className="colorPickerPopover">
        <div className="colorPickerCover" onClick={this.handleClose} />
        <div className="colorPickerWrapper">
          <SketchPicker color={color} onChangeComplete={this.handleChangeComplete} />
        </div>
      </div>
    ) : null;

    return (
      <React.Fragment>
        {swatch}
        {picker}
      </React.Fragment>
    );
  }
}
export default ColorPicker;
