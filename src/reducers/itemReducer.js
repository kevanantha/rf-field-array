const initState = {
  items: [
    {
      clubName: "Sky",
      members: [
        {
          firstName: "kevin",
          lastName: "anantha",
          hobbies: [
            "a"
          ]
        }
      ]
    }
  ]
}

const itemReducer = (state = initState, action) => {
  console.log(state.items)
  if (action.type === "CREATE_ITEM") {
    const newitem = action.payload
    const items = [...state.items, newitem]
    return {...state, items}
  }

  return state
}

export default itemReducer
