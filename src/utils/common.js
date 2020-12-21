import isEmpty from 'lodash/isEmpty'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import trim from 'lodash/trim'
import has from 'lodash/has'
import { parse, format, isValid } from 'date-fns'
import each from 'lodash/each'
import XLSX from 'xlsx'
import { X_SESSION_INFO } from 'constants/index.js'

import { MILLISECOND_TIMESTAMP } from 'constants/dateTimeFormat'
import { decodeURIParam } from './cipher'

import noImage from 'assets/imgs/no_image.png'

export const isOnlyNumber = (val) => {
  const regex = /^[0-9\b]+$/
  if (val === '' || regex.test(val)) return true
  return false
}

export const focusNScroll = (id) => {
  try {
    const bodyRect = document.body.getBoundingClientRect()
    const location = document.getElementById(id)
    const elemRect = location.getBoundingClientRect()
    const locationScrolly = elemRect.top - bodyRect.top
    const scrollY = locationScrolly - 20 // add a bit space

    setTimeout(() => {
      window.scrollTo(0, scrollY)

      if (location && location.nodeName === 'INPUT') {
        setTimeout(() => {
          location.focus()
          location.selectionStart = 0
          location.selectionEnd = location.value.length
        }, 399)
      }
    }, 499)
  } catch (e) {
    console.log(`error: ${e.message}`)
  }
}

export const tbodyScrollDown = (selector) => {
  try {
    const tableTbody = document.querySelector(selector)
    const divHeight = tableTbody.scrollHeight
    tableTbody.scrollTop = divHeight
  } catch (e) {
    console.log(`error: ${e.message}`)
  }
}

export const focusOnLastRow = (selector) => {
  try {
    const rows = document.querySelectorAll(selector)
    const lastOne = rows[rows.length - 1]
    lastOne.focus()
  } catch (e) {
    console.log(`error: ${e.message}`)
  }
}

export const generateID = () => {
  let d = new Date().getTime()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export function* generateIncrementID() {
  let i = 1
  while (true) {
    yield ++i
  }
}

export const getBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  const appName = navigator.appName.toLowerCase()
  let browser = ''
  if (
    (appName == 'Netscape' && userAgent.search('Trident') != -1) ||
    userAgent.indexOf('msie') != -1
  ) {
    browser = 'ie'
  } else {
    if (userAgent.indexOf('chrome') >= 0) browser = 'chrome'
    else if (userAgent.indexOf('safari') >= 0) browser = 'safari'
    else if (userAgent.indexOf('firefox') >= 0) browser = 'firefox'
  }
  return browser
}

export const isBrowserIE = () => {
  const browser = getBrowser()
  if (browser === 'ie') return true
  else return false
}

export const isBlank = (value) => {
  if (isString(value)) {
    return trim(value) === ''
  }

  return !isNumber(value) && isEmpty(value)
}

export const flattenObject = (ob) => {
  let toReturn = {}

  for (const i in ob) {
    if (!has(ob, i)) continue

    if (Array.isArray(ob[i]) && ob[i].length === 0) {
      toReturn[i] = ''
    } else if (typeof ob[i] == 'object') {
      const flatObject = flattenObject(ob[i])
      for (const x in flatObject) {
        if (!has(flatObject, x)) continue

        toReturn[i + '.' + x] = flatObject[x]
        //toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i]
    }
  }
  return toReturn
}

export const getQueryParams = (queryString) => {
  const queries = {}
  try {
    const queryArr = queryString.replace('?', '').split('&')
    queryArr.forEach((item) => {
      const o = item.split('=')
      queries[o[0]] = o[1]
    })
  } catch (e) {
    console.log(e)
  }

  return queries
}

export const formatNumber = (inputNumber) => {
  if (inputNumber !== '' && inputNumber !== null && inputNumber !== undefined) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return inputNumber
}

export const numberFormat = (val) => {
  try {
    return new Intl.NumberFormat().format(val)
  } catch (e) {
    return val
  }
}

export const setUserInfo = (info) => {
  let userInfo = {}
  try {
    userInfo = decodeURIParam(info.uidata)
    userInfo = JSON.parse(userInfo)
    userInfo.roles = []
    try {
      const rolesTmp = userInfo.sessionFuncAuthList.split('##')
      const roles = rolesTmp.map((r) => {
        return r.replace(/#/gi, '').replace(/SEP/gi, '')
      })

      /* Roles added temporarily */
      roles.push('2001')
      roles.push('2028')
      /* Roles added temporarily */

      userInfo.roles = roles
    } catch (e) {
      console.log(e.message)
    }
  } catch (e) {
    console.log(e.message)
  }

  sessionStorage.setItem('uiData', decodeURIComponent(info.uidata))
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
}

export const getUserInfo = (key) => {
  const userInfo = sessionStorage.getItem('userInfo')

  if (userInfo) {
    const userInfoObj = JSON.parse(userInfo)
    return userInfoObj[key]
  }

  return undefined
}

export const getUiData = () => {
  const uiData = sessionStorage.getItem('uiData')
  if (!uiData) return X_SESSION_INFO
  else return uiData
}

export const convertDateFormat = (
  inputStringValue,
  inputFormat,
  outputFormat
) => {
  let outputStringValue = ''
  if (inputStringValue) {
    const inputDateValue =
      inputFormat === MILLISECOND_TIMESTAMP
        ? new Date(parseInt(inputStringValue))
        : parse(inputStringValue, inputFormat, new Date())

    if (isValid(inputDateValue)) {
      outputStringValue = format(inputDateValue, outputFormat)
    }
  }

  return outputStringValue
}

export function convertTableToExcel(
  tableData,
  tableColumns,
  newWsName,
  fileName
) {
  var workbook = XLSX.utils.book_new()
  newWsName = newWsName || 'SheetJS'
  var workbookSheet = null

  /* make worksheet */
  var wsData = [tableColumns]
  each(tableData, (row) => {
    wsData.push(row)
  })
  // console.log(wsData);
  workbookSheet = XLSX.utils.aoa_to_sheet(wsData)
  // }
  /* Add the worksheet to the workbook */
  XLSX.utils.book_append_sheet(workbook, workbookSheet, newWsName)
  XLSX.writeFile(workbook, fileName || 'out.xlsb')
  return workbook
}

export const isPlainObj = (obj) => {
  if (Array.isArray(obj) || obj === null) return false
  return typeof obj === 'object'
}

export const checkIsPrdTravel = (product) => {
  return (
    product &&
    isPlainObj(product) &&
    product.prdClsCd &&
    String(product.prdClsCd).indexOf('B3107') === 0
  ) // check prdClsCd
}

export const handleImageLoadingError = (evt) => {
  evt.target.onerror = null
  evt.target.src = noImage
}

export const getUID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
