import React from 'react'
import AddProduct from './Comps/AddProduct'
import DataTable from './Comps/DataTable'
import "./MainSec.css"

function Main(props) {
  return (
    <div className='mainSec'>
        <div className='loginSect'>
            <p>test</p>
        </div>
        <div className='data'>
        <DataTable cols={props.cols} rows={props.rows}/>
        </div>
    </div>
  )
}

export default Main;