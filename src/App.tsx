import React from 'react'
import Topbar from './components/Topbar'
import LeftPad from './components/LeftPad'
import GraphPad from './components/GraphPad'
import DataTable from './components/DataTable'
import { MainBack, RightSector } from './AppStyles'

const App: React.FC = () => {
  return (
    <>
      <Topbar />
      <MainBack>
        <LeftPad />
        <RightSector>
          <GraphPad />
          <DataTable />
        </RightSector>
      </MainBack>
    </>
  )
}

export default App
