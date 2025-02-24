const globalActions = {
  ACTIVITIES_FETCH_LIST: 'ACTIVITIES_FETCH_LIST',
  ACTIVITIES_FETCH_LIST_SUCCESS: 'ACTIVITIES_FETCH_LIST_SUCCESS',
  ACTIVITIES_FETCH_LIST_ERROR: 'ACTIVITIES_FETCH_LIST_ERROR',
  CONTACTS_FETCH_STARRED: 'CONTACTS_FETCH_STARRED',
  CONTACTS_FETCH_STARRED_SUCCESS: 'CONTACTS_FETCH_STARRED_SUCCESS',
  CONTACTS_FETCH_STARRED_ERROR: 'CONTACTS_FETCH_STARRED_ERROR',
  CHARTS_FETCH_SALES: 'CHARTS_FETCH_SALES',
  CHARTS_FETCH_SALES_SUCCESS: 'CHARTS_FETCH_SALES_SUCCESS',
  CHARTS_FETCH_SALES_ERROR: 'CHARTS_FETCH_SALES_ERROR',
  CHARTS_FETCH_REVENUE: 'CHARTS_FETCH_REVENUE',
  CHARTS_FETCH_REVENUE_SUCCESS: 'CHARTS_FETCH_REVENUE_SUCCESS',
  CHARTS_FETCH_REVENUE_ERROR: 'CHARTS_FETCH_REVENUE_ERROR',
  GLOBAL_FETCH_NOTICES: 'GLOBAL_FETCH_NOTICES',
  GLOBAL_FETCH_NOTICES_SUCCESS: 'GLOBAL_FETCH_NOTICES_SUCCESS',
  GLOBAL_FETCH_NOTICES_ERROR: 'GLOBAL_FETCH_NOTICES_ERROR',
  GLOBAL_CLEAR_NOTICES: 'GLOBAL_CLEAR_NOTICES',

  activitiesFetchList: payload => ({
    type: globalActions.ACTIVITIES_FETCH_LIST,
    payload,
  }),
  activitiesFetchListSuccess: payload => ({
    type: globalActions.ACTIVITIES_FETCH_LIST_SUCCESS,
    payload,
  }),
  activitiesFetchListError: payload => ({
    type: globalActions.ACTIVITIES_FETCH_LIST_ERROR,
    payload,
  }),
  contactsFetchStarred: payload => ({
    type: globalActions.CONTACTS_FETCH_STARRED,
    payload,
  }),
  contactsFetchStarredSuccess: payload => ({
    type: globalActions.CONTACTS_FETCH_STARRED_SUCCESS,
    payload,
  }),
  contactsFetchStarredError: payload => ({
    type: globalActions.CONTACTS_FETCH_STARRED_ERROR,
    payload,
  }),
  chartsFetchSales: payload => ({
    type: globalActions.CHARTS_FETCH_SALES,
    payload,
  }),
  chartsFetchSalesSuccess: payload => ({
    type: globalActions.CHARTS_FETCH_SALES_SUCCESS,
    payload,
  }),
  chartsFetchSalesError: payload => ({
    type: globalActions.CHARTS_FETCH_SALES_ERROR,
    payload,
  }),
  chartsFetchRevenue: payload => ({
    type: globalActions.CHARTS_FETCH_REVENUE,
    payload,
  }),
  chartsFetchRevenueSuccess: payload => ({
    type: globalActions.CHARTS_FETCH_REVENUE_SUCCESS,
    payload,
  }),
  chartsFetchRevenueError: payload => ({
    type: globalActions.CHARTS_FETCH_REVENUE_ERROR,
    payload,
  }),
  globalFetchNotices: payload => ({
    type: globalActions.GLOBAL_FETCH_NOTICES,
    payload,
  }),
  globalFetchNoticesSuccess: payload => ({
    type: globalActions.GLOBAL_FETCH_NOTICES_SUCCESS,
    payload,
  }),
  globalFetchNoticesError: payload => ({
    type: globalActions.GLOBAL_FETCH_NOTICES_ERROR,
    payload,
  }),
  globalClearNotices: payload => ({
    type: globalActions.GLOBAL_CLEAR_NOTICES,
    payload,
  }),
};
export default globalActions;
