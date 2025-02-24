/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Card, Form, Icon, Modal, Calendar, Avatar } from 'antd';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import actions from '../../redux/contacts/actions';

const { Meta } = Card;
const { contactFetch } = actions;
class CalendarItems extends React.Component {
  state = { data: [], refreshData: true };

  componentDidMount() {
    const { contactFetch } = this.props;

    contactFetch({
      currentPage: 1,
      pageSize: 40,
    });
  }

  getRandomData = data => {
    const contact = data[Math.floor(Math.random() * data.length)];
    const types = [{ type: 'normal' }, { type: 'important' }, { type: 'must' }];
    const type = types[Math.floor(Math.random() * types.length)];

    return { ...contact, ...type };
  };

  getListData = value => {
    const { contacts } = this.props;
    const { refreshData, data } = this.state;
    const dateToRender = value.date();
    if (refreshData === false) {
      return data[dateToRender] || [];
    }

    let listData = {};

    if (contacts.list && contacts.list.length > 0) {
      listData = {
        1: [this.getRandomData(contacts.list), this.getRandomData(contacts.list)],
        10: [this.getRandomData(contacts.list), this.getRandomData(contacts.list)],
        20: [
          this.getRandomData(contacts.list),
          this.getRandomData(contacts.list),
          this.getRandomData(contacts.list),
        ],
        27: [
          this.getRandomData(contacts.list),
          this.getRandomData(contacts.list),
          this.getRandomData(contacts.list),
          this.getRandomData(contacts.list),
          this.getRandomData(contacts.list),
          this.getRandomData(contacts.list),
        ],
      };

      if (refreshData === true) {
        this.setState({ refreshData: false, data: listData });
      }
    }

    return listData[dateToRender] || [];
  };

  selectedEvent = (e, data) => {
    e.stopPropagation();
    this.showSelected(
      data.content,
      <Card
        cover={<img alt={data.displayName} src={data.avatar} />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src={data.avatar} />}
          title={data.displayName}
          description={
            <span>
              {data.position_title}
              <br />
              {data.phone}
            </span>
          }
        />
      </Card>
    );
  };

  dateCellRender = value => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.id} onClick={e => this.selectedEvent(e, item)}>
            <span className={[item.type]}>●</span>
            {item.displayName}
          </li>
        ))}
      </ul>
    );
  };

  onSelect = value => {
    console.log(`Selected ${value}`);
  };

  getMonthData = value => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  monthCellRender = value => {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notesMonth">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  showSelected = (title, message) => {
    Modal.success({
      title,
      content: message,
    });
  };

  render() {
    return (
      <PageHeaderLayout title="Calendar with Clickable Items">
        <Card bordered={false}>
          <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    contacts: state.contacts.toJS(),
  }),
  {
    contactFetch,
  }
)(Form.create()(CalendarItems));
