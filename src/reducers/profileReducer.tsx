interface IAction {
  type: string,
  profileData: any
}

interface IState {
  title: string,
  image: string,
  subtitle: string,
  tags: string[]
}

const initialState: any = {
  title: '',
  image: '',
  subtitle: '',
  tags: [],
}

export default function dataReducer(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        title: action.profileData.title,
        image: action.profileData.image,
        subtitle: action.profileData.subtitle,
        tags: action.profileData.tags,
      }
      default:
      return state
  }
}