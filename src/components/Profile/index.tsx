import React from 'react'
import { AvatarSector, UserAvatarSector, UserName, UserDescribtion } from './styles'

interface Props {
  avatarUrl: string,
  userName: string,
  subTitle: string,
}

const Profile: React.FC<Props> = ({ avatarUrl, userName, subTitle }) => {
  return (
    <AvatarSector>
      <UserAvatarSector>
        <img src={avatarUrl} alt={'User\'s avatar.'} style={{ width: '80%', height: '80%' }} />
      </UserAvatarSector>
      <UserName>{userName}</UserName>
      <UserDescribtion>{subTitle}</UserDescribtion>
    </AvatarSector>
  )
}

export default Profile