import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

class CheckBoxCheckAll extends React.Component {
  plainOptions = ['Apple', 'Pear', 'Orange'];

  defaultCheckedList = ['Apple', 'Orange'];

  state = {
    checkedList: this.defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < this.plainOptions.length,
      checkAll: checkedList.length === this.plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    const { indeterminate, checkAll, checkedList } = this.state;
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={this.onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={this.plainOptions} value={checkedList} onChange={this.onChange} />
      </div>
    );
  }
}
export default CheckBoxCheckAll;
