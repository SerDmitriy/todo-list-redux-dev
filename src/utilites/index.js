export const genKey = () => {
  return Math.random().toString(16).slice(3, 10);
}

export const actionsCreator = (statuses, actionTypes) => {
  const actions = {};
  actionTypes.forEach(actionType => {
    actions[actionType] = {};
    statuses.forEach(status => 
      actions[actionType][status] = (payload, callback, options) => ({
        type: `${actionType}_${status}`.toUpperCase(),
        payload,
        callback,
        options
      })
    )
  })
  
  console.dir(actions)
  return actions;
}