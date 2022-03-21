import { TopBack, TopLogo } from './styles'
import LogoSVG from '../../assets/images/stackline_logo.svg'

const Topbar: React.FC = () => {

  return (
    <TopBack>
      <TopLogo src={LogoSVG} />
    </TopBack>
  )
}

export default Topbar