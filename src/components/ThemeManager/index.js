/* eslint-disable no-shadow */
import React, { Fragment } from 'react';
import { Drawer, Icon, Select, Row, Switch, Col } from 'antd';
import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker/index.js';
import actions from '../../redux/themeManager/actions';
import IntlMessages from '../Misc/intlMessages';

const { changeBreadcrumbType, changeThemeManagerField } = actions;
const Option = Select.Option;

const facebookSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path
      d="M125.328 903.904a381.336 81.488 0 1 0 762.672 0 381.336 81.488 0 1 0-762.672 0Z"
      fill="#B8CBCD"
      p-id="1137"
    />
    <path
      d="M423.008 178.96c-55.928-55.928-136.048-72.856-206.672-50.88l136.2 136.2a40.896 40.896 0 0 1 0 57.856l-77.16 77.16a40.92 40.92 0 0 1-57.864 0L81.312 263.104c-21.976 70.624-5.048 150.744 50.88 206.68 67.752 67.76 171.032 78.344 249.888 31.776l438.208 438.208a55.08 55.08 0 1 0 77.896-77.896l-439.68-439.688c42.168-77.944 30.368-177.36-35.496-243.224z"
      fill="#B2EDA6"
      p-id="1138"
    />
    <path
      d="M859.24 979.896a78.568 78.568 0 0 1-55.92-23.16L377.696 531.112A229.792 229.792 0 0 1 277.6 554.016c-61.336 0-119.008-23.888-162.384-67.264-60.512-60.528-82.288-148.96-56.824-230.784a24 24 0 0 1 39.888-9.832L234.48 382.336c6.392 6.376 17.536 6.392 23.928 0l77.16-77.168c3.2-3.192 4.96-7.448 4.96-11.96 0-4.512-1.76-8.768-4.952-11.96L199.36 145.048a24 24 0 0 1 9.84-39.888 230.16 230.16 0 0 1 68.464-10.392c61.32 0 118.96 23.864 162.312 67.216 67 66.992 85.432 169.656 47.616 255.336l427.56 427.568a78.512 78.512 0 0 1 23.168 55.912 78.528 78.528 0 0 1-23.168 55.92 78.504 78.504 0 0 1-55.912 23.176zM382.072 477.552c6.208 0 12.352 2.408 16.976 7.032l438.208 438.208c11.736 11.736 32.216 11.736 43.96 0a30.88 30.88 0 0 0 9.104-21.984 30.848 30.848 0 0 0-9.104-21.968l-439.68-439.696a24.016 24.016 0 0 1-4.144-28.392c37.928-70.096 25.032-158.44-31.352-214.832a180.368 180.368 0 0 0-128.368-53.16c-4.112 0-8.208 0.136-12.288 0.408l104.128 104.136a64.48 64.48 0 0 1 19.008 45.896 64.48 64.48 0 0 1-19.016 45.904l-77.16 77.16a64.48 64.48 0 0 1-45.904 19.016 64.496 64.496 0 0 1-45.904-19.016l-104.168-104.16a181.144 181.144 0 0 0 52.8 140.712 180.456 180.456 0 0 0 128.44 53.2c32.536 0 64.448-8.688 92.272-25.128a23.92 23.92 0 0 1 12.192-3.336z"
      fill="#3C663E"
      p-id="1139"
    />
    <path
      d="M155.576 797.912c-18.64 18.64-13.84 53.672 36.352 103.856 50.192 50.184 85.224 54.992 103.864 36.36l259.664-238.888c18.648-18.64 3.456-64.056-46.736-114.256-50.192-50.184-95.608-65.376-114.248-46.728L155.576 797.912z"
      fill="#F6E89A"
      p-id="1140"
    />
    <path
      d="M270.912 972.152c-28.24 0-60.52-17.968-95.96-53.408-26.52-26.512-43.352-51.384-50.032-73.912-7.336-24.776-2.624-47.288 13.28-63.488L376.8 522.008l0.688-0.72c9.624-9.624 22.728-14.72 37.896-14.72 31.504 0 70.664 21.816 110.296 61.448 59.208 59.216 77.552 117.392 46.736 148.192-0.232 0.24-0.48 0.472-0.72 0.696l-259.344 238.592c-11.096 10.896-25.408 16.656-41.44 16.656z m140.6-416.984L173.24 814.16c-0.224 0.24-0.456 0.488-0.696 0.72-1.36 1.36-4.96 4.96-1.592 16.312 3.008 10.16 12.032 27.696 37.944 53.608 35.52 35.504 55.2 39.344 62.024 39.344 4.336 0 6.432-1.504 7.904-2.992l0.72-0.688 259.056-238.336c2.76-3.656-0.528-33.832-46.856-80.176-34.976-34.968-62.992-47.384-76.352-47.384-2.424 0-3.576 0.432-3.88 0.6z"
      fill="#8D4520"
      p-id="1141"
    />
    <path
      d="M534.68 723.088c-28.584 0-66.192-20.672-104.792-59.272-25.536-25.536-43.792-51.296-52.792-74.488-13.696-35.328-2.088-54.248 6.048-62.384a16 16 0 0 1 22.632 22.624c-4.344 4.344-3.896 15.144 1.16 28.184 7.296 18.808 23.48 41.328 45.576 63.432 48.888 48.888 83.8 54.552 91.624 46.744a16 16 0 0 1 22.624 22.624c-8.432 8.432-19.368 12.536-32.08 12.536z"
      fill="#8D4520"
      p-id="1142"
    />
    <path
      d="M505.416 632.864l306.784-304.632c0.584-0.584 1-1.264 1.536-1.88 24.56 6.648 51.888 0.4 71.168-18.888L968 224.376l-103.864-103.864L781.04 203.592c-19.28 19.288-25.536 46.608-18.888 71.176-0.616 0.528-1.296 0.944-1.88 1.52l-306.792 304.64"
      fill="#F6E89A"
      p-id="1143"
    />
    <path
      d="M505.416 656.864a24 24 0 0 1-16.912-41.032l305.936-303.792a24.024 24.024 0 0 1 25.56-8.864 49.648 49.648 0 0 0 47.928-12.696l66.12-66.12-69.92-69.928-66.128 66.12a49.64 49.64 0 0 0-12.696 47.944 24 24 0 0 1-8.952 25.624l-305.984 303.84a24 24 0 0 1-33.824-34.064l299.632-297.528a97.744 97.744 0 0 1 27.864-79.752l83.096-83.088a24 24 0 0 1 33.944 0l103.864 103.864a23.976 23.976 0 0 1-0.008 33.936l-83.088 83.088c-21.056 21.072-50.656 31.112-79.84 27.856l-299.68 297.624a23.928 23.928 0 0 1-16.912 6.968z"
      fill="#8D4520"
      p-id="1144"
    />
    <path
      d="M255.608 957.984a23.984 23.984 0 0 1-16.968-40.968l227.672-227.672a23.984 23.984 0 0 1 33.936 0 23.984 23.984 0 0 1 0 33.936l-227.672 227.672a23.928 23.928 0 0 1-16.968 7.032z"
      fill="#8D4520"
      p-id="1145"
    />
  </svg>
);
const initialValue = {
  'primary-color': '#4F565A',
  'text-color': '#7e7e7e',
  'heading-color': '#4f565e',
  'layout-header-background': '#363636',
  'layout-sider-background': '#363639',
  'layout-body-background': '#f0f2f5',
  'layout-footer-background': '#ffffff',
};
let vars = Object.assign({}, initialValue);
const varModifiedDarkTheme = {
  'primary-color': ' Base Color',
  'text-color': 'Text Color',
  'heading-color': 'Headings (h1-h6) ',
  'layout-header-background': ' Topbar ',
  'layout-sider-background': ' Sidebar ',
  'layout-body-background': '  Background ',
  'layout-footer-background': ' Footer  ',
};

const varModifiedLightTheme = {
  'primary-color': ' Base Color',
  'text-color': 'Text Color',
  'heading-color': 'Headings (h1-h6) ',
  'layout-header-background': ' Topbar ',
  'layout-sider-background': ' Logo background ',
  'layout-body-background': '  Background ',
  'layout-footer-background': ' Footer  ',
};

const FacebookIcon = props => <Icon component={facebookSvg} {...props} />;
class ThemeManager extends React.Component {
  state = {
    visible: false,
    vars,
  };

  handleColorChange = (varname, color, textColor) => {
    if (varname) vars[varname] = color;
    if (varname === 'layout-header-background') {
      vars['msa-header-icon-color'] = textColor;
    }
    if (varname === 'layout-sider-background') {
      vars['msa-sider-text-color'] = textColor;
    }
    if (varname === 'layout-footer-background') {
      vars['msa-footer-text-color'] = textColor;
    }
    window.less
      .modifyVars(vars)
      .then(() => {
        console.log(vars);
      })
      .catch(error => {
        console.error(error);
      });
  };

  getColorPicker = varName => {
    const {
      theme: { themeColor },
    } = this.props;
    const { vars } = this.state;
    return (
      <Fragment key={varName}>
        <Col xs={20}>
          {themeColor ? varModifiedDarkTheme[varName] : varModifiedLightTheme[varName]}
        </Col>

        <ColorPicker
          color={vars[varName]}
          position="top"
          onChangeComplete={(color, textColor) => this.handleColorChange(varName, color, textColor)}
        />
      </Fragment>
    );
  };

  resetTheme = () => {
    vars = Object.assign({}, initialValue);
    this.setState({
      vars: initialValue,
    });
    window.less.modifyVars(vars).catch(error => {
      console.error(error);
    });
  };

  showDrawer = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleBreadcrumbOnOff = (field, value) => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField(field, value);
  };

  handleBreadcrumbChange = value => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField('breadcrumbType', value);
  };

  handleFontChange = (field, value) => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField(field, value);
  };

  handlePageTitleChange = (field, value) => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField(field, value);
  };

  handleFixedHeaderFooter = (field, value) => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField(field, value);
  };

  handleThemeColor = (field, value) => {
    const { changeThemeManagerField } = this.props;

    changeThemeManagerField(field, value);
  };

  handleChangeEmailLayout = (field, value) => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField(field, value);
  };

  handleChatLayoutChange = (field, value) => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField(field, value);
  };

  handleTodoLayoutChange = (field, value) => {
    const { changeThemeManagerField } = this.props;
    changeThemeManagerField(field, value);
  };

  render() {
    const { visible } = this.state;

    const {
      theme: {
        breadcrumbVisible,
        breadcrumbType,
        pageTitleClassName,
        emailLayout,
        chatLayout,
        todoLayout,
      },
      direction,
    } = this.props;

    const currentUrl = window.location.href;
    const urlArr = currentUrl.split('/');
    const activePage = urlArr[urlArr.length - 1];
    const colorPickers = Object.keys(varModifiedDarkTheme).map(varName =>
      this.getColorPicker(varName)
    );

    return (
      <Fragment>
        <Drawer
          title="Theme Settings"
          placement={direction === 'rtl' ? 'left' : 'right'}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          className="themeDrawerHeader"
          handler={
            <div className={direction === 'rtl' ? 'leftHandle' : 'rightHandle'}>
              <FacebookIcon
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}
              />
            </div>
          }
          onHandleClick={() => this.showDrawer()}
        >
          <div>
            <h4 className="themeFont">
              <IntlMessages id="theme.BREADCRUMB" />
            </h4>
            <div>
              <Col xs={18}>
                <IntlMessages id="theme.breadcrumb" />
              </Col>
              <Col xs={6}>
                <Switch
                  defaultChecked
                  unCheckedChildren={<IntlMessages id="theme.yes" />}
                  checkedChildren={<IntlMessages id="theme.no" />}
                  onChange={checked => this.handleBreadcrumbOnOff('breadcrumbVisible', checked)}
                />
              </Col>
            </div>
            {breadcrumbVisible ? (
              <Select
                defaultValue={breadcrumbType}
                style={{ width: '100%', margin: '10px 0 40px 0' }}
                className="themeDropdown"
                onChange={this.handleBreadcrumbChange}
              >
                <Option value="default" className="themeDropdown">
                  <IntlMessages id="theme.defaultBreadcrumb" />
                </Option>
                <Option value="breadcrumb_with_icon" className="themeDropdown">
                  <IntlMessages id="theme.breadcrumbWithIcon" />
                </Option>
                <Option value="with_configure_separator" className="themeDropdown">
                  <IntlMessages id="theme.breadcrumbWithConfigureSeparator" />
                </Option>
                <Option value="without_background" className="themeDropdown">
                  <IntlMessages id="theme.breadcrumbWithoutBackground" />
                </Option>
              </Select>
            ) : (
              <Select
                defaultValue={breadcrumbType}
                style={{ width: '100%', margin: '10px 0 40px 0' }}
                className="themeDropdown"
                disabled
              />
            )}
          </div>
          {/* <Divider className="themeDivider" /> */}
          <div>
            <h4 className="themeFont">
              {' '}
              <IntlMessages id="theme.pageTitle" />
            </h4>
            <Row>
              <Select
                defaultValue={pageTitleClassName}
                style={{ width: '100%', margin: '0 0 40px 0' }}
                className="themeDropdown"
                onChange={value => this.handlePageTitleChange('pageTitleClassName', value)}
              >
                <Option value="pageTitleStyleOne" className="themeDropdown">
                  <IntlMessages id="theme.styleOne" />
                </Option>
                <Option value="pageTitleStyleSecond" className="themeDropdown">
                  <IntlMessages id="theme.styleTwo" />
                </Option>
                <Option value="pageTitleStyleThree" className="themeDropdown">
                  <IntlMessages id="theme.styleThree" />
                </Option>
              </Select>
            </Row>
          </div>
          {/* <Divider className="themeDivider" /> */}
          <div>
            <h4 className="themeFont">
              <IntlMessages id="theme.header" />
            </h4>

            <Col xs={18} style={{ margin: '0 0 10px 0' }}>
              {' '}
              <IntlMessages id="theme.fixedHeader" />
            </Col>
            <Col xs={6} style={{ margin: '0 0 40px 0' }}>
              <Switch
                defaultChecked
                unCheckedChildren={<IntlMessages id="theme.yes" />}
                checkedChildren={<IntlMessages id="theme.no" />}
                onChange={checked => this.handleFixedHeaderFooter('fixedHeader', checked)}
              />
            </Col>
          </div>
          {/* <Divider className="themeDivider" /> */}
          <div>
            <h4 className="themeFont">
              <IntlMessages id="theme.footer" />
            </h4>

            <Col xs={18} style={{ margin: '0 0 10px 0' }}>
              {' '}
              <IntlMessages id="theme.fixedFooter" />
            </Col>
            <Col xs={6} style={{ margin: '0 0 40px 0' }}>
              <Switch
                unCheckedChildren={<IntlMessages id="theme.yes" />}
                checkedChildren={<IntlMessages id="theme.no" />}
                onChange={checked => this.handleFixedHeaderFooter('fixedFooter', checked)}
              />
            </Col>
          </div>
          {/* <Divider className="themeDivider" /> */}
          <div>
            <h4 className="themeFont">
              <IntlMessages id="theme.customizeTheme" />
            </h4>

            <Col xs={18} style={{ margin: '0 0 10px 0' }}>
              {' '}
              <IntlMessages id="theme.darkLight" />
            </Col>
            <Col xs={6} style={{ margin: '0 0 10px 0' }}>
              <Switch
                defaultChecked
                unCheckedChildren={<IntlMessages id="theme.dark" />}
                checkedChildren={<IntlMessages id="theme.light" />}
                onChange={checked => this.handleThemeColor('themeColor', checked)}
              />
            </Col>

            {/* <Divider className="themeDivider" /> */}
            {colorPickers}

            <Col xs={20} style={{ margin: '0 0 10px 0' }}>
              <IntlMessages id="theme.resetToDefault" />
            </Col>
            <Col xs={4} style={{ margin: '0 0 40px 0' }}>
              <div className="swatch" onClick={this.resetTheme}>
                <Icon type="close" style={{ color: 'red' }} className="swatchColor" />
              </div>
            </Col>
          </div>
          {/* <Divider className="themeDivider" /> */}
          {activePage === 'email' ? (
            <div>
              <h4 className="themeFont">
                <IntlMessages id="theme.emailLayout" />
              </h4>
              <Row>
                <Select
                  className="themeDropdown"
                  defaultValue={emailLayout}
                  style={{ width: '100%' }}
                  onChange={value => this.handleChangeEmailLayout('emailLayout', value)}
                >
                  <Option value="default" className="themeDropdown">
                    <IntlMessages id="theme.defaultEmailLayout" />
                  </Option>
                  <Option value="layoutOne" className="themeDropdown">
                    <IntlMessages id="theme.secondEmailLayout" />
                  </Option>
                </Select>
              </Row>
            </div>
          ) : (
            ''
          )}

          {activePage === 'chats' ? (
            <div>
              {' '}
              <h4 className="themeFont">
                <IntlMessages id="theme.chatLayout" />
              </h4>
              <Select
                defaultValue={chatLayout}
                style={{ width: '100%' }}
                className="themeDropdown"
                onChange={value => this.handleChatLayoutChange('chatLayout', value)}
              >
                <Option value="default" className="themeDropdown">
                  <IntlMessages id="theme.defaultChatLayout" />
                </Option>
                <Option value="secondChatLayout" className="themeDropdown">
                  <IntlMessages id="theme.secondChatLayout" />
                </Option>
              </Select>
            </div>
          ) : (
            ''
          )}
          {activePage === 'todos' ? (
            <div>
              <h4 className="themeFont">
                <IntlMessages id="theme.todoLayout" />
              </h4>
              <Row>
                <Select
                  defaultValue={todoLayout}
                  style={{ width: '100%' }}
                  className="themeDropdown"
                  onChange={value => this.handleTodoLayoutChange('todoLayout', value)}
                >
                  <Option value="default" className="themeDropdown">
                    <IntlMessages id="theme.defaultTodoLayout" />
                  </Option>
                  <Option value="secondTodoLayout" className="themeDropdown">
                    <IntlMessages id="theme.secondTodoLayout" />
                  </Option>
                </Select>
              </Row>
            </div>
          ) : (
            ''
          )}
        </Drawer>
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    theme: state.theme.toJS(),
  }),
  {
    changeBreadcrumbType,
    changeThemeManagerField,
  }
)(ThemeManager);
