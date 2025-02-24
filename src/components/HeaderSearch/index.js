import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';

export default class HeaderSearch extends PureComponent {
  static defaultProps = {
    defaultActiveFirstOption: false,
    onPressEnter: () => {},
    onSearch: () => {},
    className: '',
    placeholder: '',
    dataSource: [],
  };

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    onPressEnter: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    dataSource: PropTypes.array,
  };

  state = {
    searchMode: false,
    value: '',
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onKeyDown = e => {
    const { onPressEnter } = this.props;
    const { value } = this.state;
    if (e.key === 'Enter') {
      this.timeout = setTimeout(() => {
        onPressEnter(value); // Fix duplicate onPressEnter
      }, 0);
    }
  };

  onChange = value => {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange) {
      onChange();
    }
  };

  enterSearchMode = () => {
    this.setState({ searchMode: true });
    this.input.focus();
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    });
  };

  render() {
    const { className, placeholder, direction, ...restProps } = this.props;
    const { searchMode, value } = this.state;
    const inputClass = classNames('input', {
      show: searchMode,
    });

    return (
      <span
        className={direction === 'rtl' ? 'headerSearch rtlpadding' : 'headerSearch ltrpadding'}
        onClick={this.enterSearchMode}
      >
        <Icon type="search" key="Icon" />
        <AutoComplete
          key="AutoComplete"
          {...restProps}
          className={inputClass}
          value={value}
          onChange={this.onChange}
        >
          <Input
            placeholder={placeholder}
            ref={node => {
              this.input = node;
            }}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
    );
  }
}
