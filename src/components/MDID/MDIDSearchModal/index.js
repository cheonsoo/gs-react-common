import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import ColoredButton from '../../button/ColoredButton'
import { MUITable } from 'react-mui-data-table'
import Input from '../../input/InputSimple'
import ComboBox from '../../Combobox/ComboboxMaterial'
import SearchButton from '../../button/SearchButton'
import { getMdIdList } from '../../../http-client/filter'
import COLUMNS from './columns'
import './style.scss'

const MDIDSearchModel = ({
  mdId = '',
  mdName = '',
  items = [],
  open,
  onClose = () => {},
  onSelect = () => {}
}) => {
  const [keyword, setKeyword] = useState('')
  const [selectedKey, setSelectedKey] = useState('id')
  const [rowSelected, setRowSelected] = useState('')
  const [searched, setSearched] = useState([])

  useEffect(() => {
    if (mdId) {
      setSelectedKey('id')
      setKeyword(mdId)
    } else if (mdName) {
      setSelectedKey('name')
      setKeyword(mdName)
    }
  }, [mdId, mdName])

  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = async () => {
    const result = await getMdIdList({
      mdId: selectedKey === 'id' ? keyword : '',
      mdNm: selectedKey === 'name' ? keyword : ''
    })

    if (result && result.length > 0) {
      console.log(result)
      setSearched(result.map((item) => ({ _id: item.mdId, ...item })))
    }
  }

  const handleCheck = (_selected) => {
    console.log(_selected)
    setRowSelected(_selected)
  }

  const handleSelect = () => {
    if (!rowSelected) {
      alert('MD 를 선택해주세요.')
      return
    }

    onSelect(searched.filter((item) => item.mdId === rowSelected)[0])
    onClose()
  }

  const handleClose = () => {
    setSearched([])
    onClose()
  }

  return (
    <Dialog
      className='mdid-search-box-modal'
      open={open}
      onClose={handleClose}
      aria-labelledby='draggable-dialog-title'
    >
      <DialogTitle
        className='mdid-search-box-modal-title'
        id='draggable-dialog-title'
      >
        <div style={{ display: 'flex' }}>
          <div className='mdid-search-box-modal-title-inner'>
            <span>MDID 검색</span>
            <CloseIcon onClick={handleClose} />
          </div>
        </div>
      </DialogTitle>
      <DialogContent className='mdid-search-box-modal-content'>
        <div className='mdid-search-box-modal-content-inner'>
          <div>
            <ComboBox
              selectedKey={selectedKey}
              comboboxItems={[
                { key: 'id', value: 'ID' },
                { key: 'name', value: 'NAME' }
              ]}
              onSelect={(selected) => setSelectedKey(selected.key)}
            />
          </div>
          <div>
            <Input
              value={keyword}
              onKeyUp={handleKeyUp}
              onChange={(evt) => setKeyword(evt.target.value)}
            />
          </div>
          <div>
            <SearchButton onClick={handleSearch} />
          </div>
        </div>
        <div className='component-app'>
          <MUITable
            checkBox
            singleSelection
            border
            columns={COLUMNS}
            items={searched.length > 0 ? searched : items}
            labelRowsPerPage={({ rowsPerPage }) => `${rowsPerPage}개씩보기`}
            labelItemCount={(items, rowsPerPage, page) =>
              `전체 ${items.length}건 중 ${rowsPerPage * page + 1} ~ ${
                rowsPerPage * page + rowsPerPage
              }`
            }
            labelDisplayedRows={({ page, rowsPerPage }) =>
              `${Math.ceil(
                (searched.length > 0 ? searched.length : items.length) /
                  rowsPerPage
              )} 페이지 중 ${page + 1}`
            }
            onCheck={handleCheck}
          />
        </div>
      </DialogContent>
      <DialogActions className='mdid-search-box-modal-actions'>
        <div className='mdid-search-box-modal-actions-inner'>
          <div>
            <Button variant='outlined' onClick={handleClose}>
              닫기
            </Button>
          </div>
          <div>
            <ColoredButton onClick={handleSelect} label='선택' />
          </div>
        </div>
      </DialogActions>
    </Dialog>
  )
}

export default MDIDSearchModel
