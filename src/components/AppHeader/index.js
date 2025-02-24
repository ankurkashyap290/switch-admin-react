import React from 'react';
import Navbar from '../Widgets/Navbars';
import NavbarData from '../Widgets/Navbars/navBarData';
import HeaderSearch from '../HeaderSearch';
import NotificationBar from '../HeaderNotification';
import ProfileBar from '../HeaderProfile';
import LanguageBar from '../HeaderLanguage';

class AppHeader extends React.Component {
  render() {
    const {
      currentUser,
      SiderMenuCollapsed,
      SiderMenuCollapsedOnClick,
      fixed,
      notices,
      switchLocale,
      locale,
      direction,
      notifyCount,
      onClear,
    } = this.props;

    return (
      <React.Fragment>
        <Navbar
          isMobile={false}
          SiderMenuCollapsed={SiderMenuCollapsed}
          SiderMenuCollapsedOnClick={SiderMenuCollapsedOnClick}
          fixedHeader={fixed}
          direction={direction}
        >
          <HeaderSearch
            placeholder="Search in Site"
            dataSource={['One', 'Two', 'Three']}
            onSearch={value => {
              console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={value => {
              console.log('enter', value); // eslint-disable-line
            }}
            direction={direction}
          />
          <NotificationBar notices={notices} count={notifyCount} onClear={onClear} />
          <ProfileBar currentUser={currentUser} profileMenuData={NavbarData.profileMenu} />
          <LanguageBar switchLocale={switchLocale} locale={locale} direction={direction} />
        </Navbar>
      </React.Fragment>
    );
  }
}
export default AppHeader;
