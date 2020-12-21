import { has, isEmpty, every, some, round, findIndex } from 'lodash'

export const testNumberRegex = (value) => {
  const onlyNumbersRegex = /^[0-9\b]+$/
  return value === '' || onlyNumbersRegex.test(value)
}

export const testFloatRegex = (value) => {
  const regex = /^[0-9]*(?:\.[0-9]*)?$/
  return value === '' || regex.test(value)
}

export const hashToUdaMap = (inputArr) => {
  let returnObj = {}

  returnObj = inputArr.reduce((obj, item) => {
    if (has(obj, item.udaNo)) {
      obj[item.udaNo].push(item.prdClsCd)
    } else {
      Object.assign(obj, { [item.udaNo]: item.prdClsCd })
    }
  }, {})

  return returnObj
}

export const hasAllFalsyValueInKey = (obj) => every(obj, isEmpty)

export const hasSomeFalsyValueInKey = (obj) => some(obj, isEmpty)

export const calculatePrice = (currentFieldEdit, priceObj) => {
  const { salePrice, primeCost, marginRate } = priceObj
  let numSalePrice = Number(salePrice)
  let numprimeCost = Number(primeCost)
  let numMarginRate = Number(marginRate)
  let isNeedUpdate = true

  const countUnFillField = [salePrice, primeCost, marginRate].filter(
    (price) => price === ''
  ).length

  if (countUnFillField === 1) {
    if (salePrice && primeCost && !marginRate) {
      numMarginRate = round(
        ((numSalePrice - numprimeCost) / numSalePrice) * 100,
        2
      )
    } else if (salePrice && !primeCost && marginRate) {
      numprimeCost = round(((100 - numMarginRate) * numSalePrice) / 100, 0)
    } else if (!salePrice && primeCost && marginRate) {
      numSalePrice =
        round(round(numprimeCost / (1 - numMarginRate / 100), 0) / 10, 0) * 10
    }
  } else if (countUnFillField === 0) {
    if (currentFieldEdit === 'marginRate') {
      numprimeCost = round(((100 - numMarginRate) * numSalePrice) / 100, 0)
    } else {
      numMarginRate = round(
        ((numSalePrice - numprimeCost) / numSalePrice) * 100,
        2
      )
    }
  } else {
    isNeedUpdate = false
  }

  if (numSalePrice === 0) numMarginRate = 0

  const returnObj = {
    isNeedUpdate,
    salePrice: '' + numSalePrice,
    primeCost: '' + numprimeCost,
    marginRate: '' + numMarginRate
  }

  return returnObj
}

export const hashToFieldMaps = (items, fieldName = 'EI_CODE') => {
  const data = Array.isArray(items) ? items : []

  return data.reduce((obj, item) => {
    obj[item[fieldName]] = item
    return obj
  }, {})
}

export const isThereDuplicatedValue = (arr1, arr2) => {
  return (
    arr1.filter((val) => {
      return findIndex(arr2, val) !== -1
    }).length > 0
  )
}

export const objToQueryStr = (obj) => {
  return `?${Object.keys(obj)
    .map((k) => `${k}=${obj[k]}`)
    .join('&')}`
}

// export const checkUda = async (udaNo, prdClsCd) => {
//   const data = await getPrdClsList({
//     udaNo,
//     prdClsCd
//   })
//   const checkUda = data.filter((uda) => uda.prdClsCd === prdClsCd)
//   console.log('checkUda', checkUda)

//   if (checkUda.length > 0) {
//     return true
//   } else {
//     return false
//   }
// }

// export const getPrdClsList = (payload) => {
//   const url = API.GET_PRD_CLS_UDA_LIST
//   return apiPost(
//     url,
//     payload,
//     (data) => (data ? data : []),
//     (err) => err
//   )
// }
