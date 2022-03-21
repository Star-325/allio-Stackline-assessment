interface IAction {
  type: string,
  retailData: any[]
}

type IState = any[]

const initialState: any[] = []

export default function dataReducer(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case 'GET_RETAIL':
      return action.retailData
    default:
      return state
  }
}