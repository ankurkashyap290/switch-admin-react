const rulesActions = {
  RULES_FETCH: 'RULES_FETCH',
  RULES_ADD: 'RULES_ADD',
  RULES_REMOVE: 'RULES_REMOVE',
  RULES_SAVE: 'RULES_SAVE',
  RULES_CHANGELOADING: 'RULES_CHANGELOADING',
  rulesFetch: payload => ({
    type: rulesActions.RULES_FETCH,
    payload,
  }),
  rulesAdd: payload => ({
    type: rulesActions.RULES_ADD,
    payload,
  }),
  rulesRemove: payload => ({
    type: rulesActions.RULES_REMOVE,
    payload,
  }),
  rulesSave: payload => ({
    type: rulesActions.RULES_SAVE,
    payload,
  }),
  rulesChangeLoading: payload => ({
    type: rulesActions.RULES_CHANGELOADING,
    payload,
  }),
};

export default rulesActions;
