import React, { useState } from 'react'
import Input from '../input/InputSimple'
import SearchButtonIcon from '../button/SearchButtonIcon'
import { getMdIdList } from '../../http-client/filter'
import MDIDSearchModal from './MDIDSearchModal'
import './style.scss'

const MDID = () => {
  const [mdId, setMDID] = useState('')
  const [mdName, setMDName] = useState('')
  const [items, setItems] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      handleSearch()
    }
  }

  const handleSelect = (selected) => {
    console.log(selected)
    setMDID(selected.mdId)
    setMDName(selected.mdNm)
  }

  const handleSearch = async () => {
    console.log(`### ${mdId}, ${mdName}`)

    if (!mdId && !mdName) {
      handleOpenModal()
      return
    }

    const result = await getMdIdList({
      mdId: mdId,
      mdNm: mdName
    })

    if (result && result.length === 1) {
      setMDID(result[0].mdId)
      setMDName(result[0].mdNm)
    } else {
      setItems(result.map((item) => ({ _id: item.mdId, ...item })))
      handleOpenModal()
    }
  }

  return (
    <div className='mdid-search-box'>
      <div>
        <Input
          value={mdId}
          onKeyUp={handleKeyUp}
          onChange={(evt) => {
            setMDName('')
            setMDID(evt.target.value)
          }}
        />
      </div>
      <div>
        <Input
          value={mdName}
          onKeyUp={handleKeyUp}
          onChange={(evt) => {
            setMDID('')
            setMDName(evt.target.value)
          }}
        />
      </div>
      <div>
        <SearchButtonIcon onClick={handleSearch} />
      </div>

      <MDIDSearchModal
        mdId={mdId}
        mdName={mdName}
        items={items}
        open={openModal}
        onClose={handleCloseModal}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default MDID
