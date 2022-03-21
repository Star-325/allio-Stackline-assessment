import dataFromJson from '../assets/stackline_frontend_assessment_data_2021.json'

const payloadList = dataFromJson.map(item => item)

export function getRetailData(dispatch) {
  const retailDataList = payloadList[0].sales
  return (
    dispatch({ type: 'GET_RETAIL', retailData: retailDataList})
  )
}

export function getProfileData(dispatch) {
    const profilePayload = {
      title: payloadList[0].title,
      image: payloadList[0].image,
      subtitle: payloadList[0].subtitle,
      tags: payloadList[0].tags,
    }
    return (
      dispatch({ type: 'GET_PROFILE', profileData: profilePayload })
    )
}
