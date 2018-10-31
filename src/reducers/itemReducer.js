const initState = {
  items: []
}

const itemReducer = (state = initState, action) => {
  if (action.type === "CREATE_ITEM") {
    console.log(action.payload)
    const newitem = action.payload
    const items = [...state.items, newitem]
    return {...state, items}
  }

  return state
}

export default itemReducer
