import React, { useEffect } from 'react'
import Profile from '../Profile'
import OperatingButton from '../OperatingButton'
import { connect } from 'react-redux'
import { Background, OperatingBack, OtherBack } from './styles'
import { getProfileData } from '../../actions'

interface IProfileData {
  title:string,
  subtitle: string,
  image: string,
  tags: string[]
}

interface Props {
  profileData: IProfileData,
  getProfile: () => void
}

const LeftPad: React.FC <Props> = ({ profileData, getProfile }) => {
  const {title, subtitle, image, tags} = profileData

  useEffect(() => {
    getProfile()   
  }, [getProfile])

  return (
    <Background>
      <Profile userName={title} avatarUrl={image} subTitle={subtitle} />
      <OperatingBack>
        {tags.map((item, index) => <OperatingButton key={index}>{item}</OperatingButton>)}
      </OperatingBack>
      <OtherBack />
    </Background>
  )
}

const mapStateToProps = state => {
  return { profileData: state.profileState }
}

const mapDispatchToProps = dispatch => {
  return { getProfile: () => getProfileData(dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPad)