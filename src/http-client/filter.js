import httpClient from './index'
import API from '../constants/apiEndpoints'

export const getPrdClsByBaseValList = (lvl, clsCd) => {
  // const url = "/prdClsM/getPrdClsByBaseValList";
  const url = API.GET_PRD_CLS_BY_BASE_VAL_LIST
  const data = {
    dtlClsCd: clsCd,
    // dtlClsCd: "B31070101",
    // brandCd: 150739,
    // supCd: 1017596,
    // mdId: 82108,
    useYn: 'Y',
    clsLvlNo: lvl,
    gbnNo: '%',
    gbnNoYn: 'N'
  }
  return httpClient
    .post(url, data)
    .catch((err) => {
      console.log(err)
      return null
    })
    .then((res) => {
      return res ? res.data : []
    })
}

export const getPrdClsMList = () => {
  const data = {
    clsLvlNo: 0,
    prdClsCd: '',
    prdClsNm: '',
    upperPrdClsCd: '',
    useYn: 'Y'
  }

  return httpClient
    .post(API.GET_PRD_CLS_M_LIST, data)
    .catch((err) => {
      console.log(err)
      return null
    })
    .then((res) => {
      return res ? res.data : []
    })
}

export const getPrdClsMListByLvl = async () => {
  const prdClsItems = {
    lvl1: [],
    lvl2: [],
    lvl3: [],
    lvl4: []
  }

  try {
    const res = await getPrdClsMList()

    prdClsItems.lvl1 = res.filter((item) => item.clsLvlNo === 1)
    prdClsItems.lvl2 = res.filter((item) => item.clsLvlNo === 2)
    prdClsItems.lvl3 = res.filter((item) => item.clsLvlNo === 3)
    prdClsItems.lvl4 = res.filter((item) => item.clsLvlNo === 4)
  } catch (e) {
    console.log(e)
  }

  return prdClsItems
}

export const getCmmCodeList = async (cmmGrpCd) => {
  if (!cmmGrpCd) return

  // const url = `/cmm/getCmmCodeList?cmmGrpCd=${cmmGrpCd}`;
  const url = `${API.GET_CMM_CODE_LIST}?cmmGrpCd=${cmmGrpCd}`
  let data = []

  try {
    const res = await httpClient.post(url)
    data = res.data
  } catch (e) {
    console.log(e)
  }

  return data
}

export const getPrdClsMListForEachLevel = (prdClsCd) => {
  const data = {
    prdClsCd: prdClsCd,
    useYn: 'Y'
  }

  return httpClient
    .post(API.GET_PRD_CLS_M_LIST, data)
    .catch((err) => {
      console.log(err)
      return null
    })
    .then((res) => {
      return res ? res.data : []
    })
}

export const getAsRtpStd = (payload) => {
  return httpClient
    .post(API.GET_AS_RTP_STD, payload)
    .catch((err) => {
      console.log(err)
      return null
    })
    .then((res) => {
      return res ? res.data : {}
    })
}

export const modifyAsRtpStdList = (payload) => {
  return httpClient
    .post(API.MODIFY_AS_RTP_STD_LIST, payload)
    .catch((err) => {
      console.log(err)
      return null
    })
    .then((res) => {
      return res ? res.sucess : ''
    })
}

export const getPrdGovPublsListNew = async (payload) => {
  try {
    const res = await httpClient.post(API.GET_PRD_GOV_PUBLS_LIST_NEW, payload)
    const data = res.data
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getMdIdList = (
  payload,
  onSuccess = (data) => data,
  onError = (err) => err
) => {
  const url = API.GET_MDID_LIST

  return httpClient
    .post(url, payload)
    .then((res) => {
      return onSuccess(res ? res.data : [])
    })
    .catch((err) => {
      console.log(err)
      return onError([])
    })
}
