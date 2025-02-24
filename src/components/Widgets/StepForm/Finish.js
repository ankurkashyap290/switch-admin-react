import React from 'react';
import Icon from '../../UiElements/icon';

class Finish extends React.Component {
  render() {
    const { type, title, description, extra, actions } = this.props;
    const iconMap = {
      error: <Icon className="error" type="close-circle" />,
      success: <Icon className="success" type="check-circle" />,
    };
    return (
      <div className="msaStepFormFinish">
        <div className="icon">{iconMap[type]}</div>
        <div className="title">{title}</div>
        {description && <div className="description">{description}</div>}
        {extra && <div className="extra">{extra}</div>}
        {actions && <div className="actions">{actions}</div>}
      </div>
    );
  }
}
export default Finish;
