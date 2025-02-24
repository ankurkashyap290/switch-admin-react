const navBarData = {
  mainMenu: [
    {
      id: 'home',
      name: 'Home',
      path: '',
    },
    {
      id: 'aboutUs',
      name: 'About Us',
      path: '',
    },
    {
      id: 'contactUs',
      name: 'ContactUs',
      path: '',
    },
    {
      id: 'withSubmenu',
      name: 'With Submenu',
      subMenu: [
        {
          id: 'option1',
          name: 'Option 1',
          path: '',
        },
        {
          id: 'option2',
          name: 'Option 2',
          path: '',
        },
        {
          id: 'option3',
          name: 'Option 3',
          path: '',
        },
        {
          id: 'option4',
          name: 'Option 4',
          path: '',
        },
      ],
    },
  ],
  profileMenu: [
    {
      id: 'user',
      name: 'User',
      path: '',
      icon: 'user',
    },
    {
      id: 'setting',
      name: 'Setting',
      path: '',
      icon: 'setting',
    },
    {
      id: 'signOut',
      name: 'Sign out',
      path: '',
      icon: 'logout',
    },
    {
      id: 'lock',
      name: 'Lock',
      path: '',
      icon: 'lock',
    },
  ],
  utilityMenu: [
    {
      id: 'wishlist',
      name: 'Wishlist',
      path: '',
    },
    {
      id: 'discover',
      name: 'Discover',
      path: '',
    },
  ],
};
export default navBarData;
