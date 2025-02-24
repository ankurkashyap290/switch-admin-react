import React, { Component } from 'react';
import Popconfirm from '../feedback/popconfirm';
import notification from '../notification';

class DeleteButton extends Component {
  render() {
    return (
      <Popconfirm
        title="Sure to delete This mail?"
        okText="DELETE"
        cancelText="No"
        onConfirm={() => {
          notification('error', `Deleted selected mail`, '');
        }}
      >
        <button type="button" className="mailDelete">
          <i className="ion-android-delete" />
        </button>
      </Popconfirm>
    );
  }
}

export default DeleteButton;
