import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import MailActions from './Mail/singleMailActions';
import EmailList from './EmailList';

class Mails extends React.Component {
  getSourceData = () => {
    const { emails, type } = this.props;
    return emails[`${type}Data`];
  };

  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - 74;

    return adjustHeight;
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    const { data, onLoadMore, loading, onSelectRow, pagination, emailLayout } = this.props;

    return (
      <div className="mailList">
        <Scrollbars
          style={{ height: this.calculateHeight() }}
          renderThumbVertical={this.renderThumb}
        >
          <div style={{ position: 'absolute', top: '16px', zIndex: 1 }}>{<MailActions />}</div>

          <EmailList
            loading={loading}
            data={data}
            onSelectRow={onSelectRow}
            onLoadMore={onLoadMore}
            baseListPagination={pagination}
            emailLayout={emailLayout}
          />
        </Scrollbars>
      </div>
    );
  }
}
export default Mails;
