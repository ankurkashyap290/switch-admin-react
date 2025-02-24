import React from 'react';
import gtmParts from 'react-google-tag-manager';

class GoogleTagManager extends React.Component {
  componentDidMount() {
    const { dataLayerName, scriptId } = this.props;
    const propDataLayerName = dataLayerName || 'dataLayer';
    const propScriptId = scriptId || 'react-google-tag-manager-gtm';

    if (!window[propDataLayerName]) {
      const gtmScriptNode = document.getElementById(propScriptId);
      /* eslint-disable no-eval */
      eval(gtmScriptNode.textContent);
    }
  }

  render() {
    const { gtmId, dataLayerName, additionalEvents, previewVariables, scriptId } = this.props;
    const gtm = gtmParts({
      id: gtmId,
      dataLayerName: dataLayerName || 'dataLayer',
      additionalEvents: additionalEvents || {},
      previewVariables: previewVariables || false,
    });

    return (
      <div>
        <div>{gtm.noScriptAsReact()}</div>
        <div id={scriptId || 'react-google-tag-manager-gtm'}>{gtm.scriptAsReact()}</div>
      </div>
    );
  }
}

// GoogleTagManager.propTypes = {
//   gtmId: React.PropTypes.string.isRequired,
//   dataLayerName: React.PropTypes.string,
//   additionalEvents: React.PropTypes.object,
//   previewVariables: React.PropTypes.string,
//   scriptId: React.PropTypes.string
// };

export default GoogleTagManager;
