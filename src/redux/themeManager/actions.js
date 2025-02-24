const themeActions = {
  CHANGE_BREADCRUMB_TYPE: 'CHANGE_BREADCRUMB_TYPE',
  CHANGE_THEME_MANAGER_FIELD: 'CHANGE_THEME_MANAGER_FIELD',
  changeBreadcrumbType: value => ({
    type: themeActions.CHANGE_BREADCRUMB_TYPE,
    value,
  }),
  changeThemeManagerField: (fieldName, value) => ({
    type: themeActions.CHANGE_THEME_MANAGER_FIELD,
    payload: { fieldName, value },
  }),
};

export default themeActions;
