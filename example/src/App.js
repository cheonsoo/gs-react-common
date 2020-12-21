import React from 'react'

import {
  ExampleComponent,
  InputSimple,
  ProductClassification,
  MDID
} from 'gs-react-common'
import 'gs-react-common/dist/index.css'
import './index.css'

const App = () => {
  return (
    <div>
      <div className='row'>
        <ExampleComponent text='Create React Library Example 😄' />
      </div>
      <div className='row'>
        <InputSimple label='test' />
      </div>
      <div className='row'>
        <div>상품분류</div>
        <div>
          <ProductClassification />
        </div>
      </div>
      <div className='row'>
        <div>MDID</div>
        <div>
          <MDID />
        </div>
      </div>
    </div>
  )
}

export default App
