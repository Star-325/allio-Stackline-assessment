import React, { useEffect, useState } from 'react'
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from 'recharts'
import { connect } from 'react-redux'
import { getRetailData } from '../../actions'
import { GraphBack, GraphTitlePad, GraphSector } from './styles'
import moment from 'moment'
import { MenuItem, FormControl, Select } from '@mui/material'

const XAxisList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

type IViewData = {
  month: string,
  RS: number,
  WS: number,
  US: number,
  RM: number,
}

interface Props {
  retailData: any[],
  getSalesData: () => void
}

const GraphPad: React.FC<Props> = ({ getSalesData, retailData }) => {

  const [viewMode, setViewMode] = useState('RS')
  const [viewData, setViewData] = useState<IViewData[]>([])

  useEffect(() => {
    getSalesData()
  }, [getSalesData])

  useEffect(() => {
    let data = XAxisList.map(item => {
      const retails = retailData.filter(retailItem => moment(retailItem.weekEnding).month() === XAxisList.indexOf(item))
      console.log(retails)
      const itemValues = retails.reduce((pre, cur) => ({
        RS: pre.RS + cur.retailSales,
        WS: pre.WS + cur.wholesaleSales,
        US: pre.US + cur.unitsSold,
        RM: pre.RM + cur.retailerMargin,
      }), { RS: 0, WS: 0, US: 0, RM: 0 })
      itemValues.month = item
      return itemValues
    })

    setViewData(data)
  }, [retailData])

  const handleSelectChange = (e) => {
    setViewMode(e.target.value)
  }

  return (
    <GraphBack>
      <GraphTitlePad>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            value={viewMode}
            onChange={handleSelectChange}
          >
            <MenuItem value={'RS'}>Retail Sales</MenuItem>
            <MenuItem value={'WS'}>Wholesale Sales</MenuItem>
            <MenuItem value={'US'}>Units Sold</MenuItem>
            <MenuItem value={'RM'}>Retailer Margin</MenuItem>
          </Select>
        </FormControl>
      </GraphTitlePad>
      <GraphSector>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={viewData} margin={{ top: 5, right: 20, bottom: 5, left: 30 }}>
            <Line type="monotone" dataKey={viewMode} stroke="#8884d8" strokeWidth={4} />
            <Tooltip />
            <XAxis dataKey="month" tickLine={false} height={30} />
          </LineChart>
        </ResponsiveContainer>
      </GraphSector>
    </GraphBack>
  )
}

const mapStateToProps = state => {
  return { retailData: state.retailState }
}

const mapDispatchToProps = dispatch => {
  return { getSalesData: () => getRetailData(dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphPad)
