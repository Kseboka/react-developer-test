const initState = {
  storeCart: [],
  currencySwitch: '',
  categorySwitch: '',
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'SWITCH_CATEGORY') {
    return {
      ...state,
      categorySwitch: action.name,
    }
  }
  return state
}

export default rootReducer
