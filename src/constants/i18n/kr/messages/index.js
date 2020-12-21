const msgs = {}
msgs.product = {}
msgs.product.register = {}
msgs.product.register.ec_exposed_shop = {}
msgs.product.register.ec_exposed_shop.no_data = '해당하는 데이터가 없습니다.'
msgs.product.register.ec_exposed_shop.img_size =
  '::이미지사이즈 1MB이하만 업로드 가능합니다.'
msgs.product.register.ec_exposed_shop.desc =
  '::은 하나만 설정가능\n::외부채널(예:네이버쇼핑)노출시, 선택한 ""을 기준으로 카테고리 매장이 설정됨\n::GSSHOPLIVE, GSMYSHOP 은 "" 선택금지'
/**
How to use
import I18N from "../../constants/i18n";
...
const supNm = "Some Sub Supplier";
const endDate = "2020-05-01";
alert(I18N.msgs.product.register.ec_exposed_shop.test.format(supNm, endDate));
 */
msgs.product.register.ec_exposed_shop.test = `협력업체[{0}]는 거래종료[{1}]협력업체입니다.`
msgs.product.register.ec_exposed_shop.modal_filter_desc =
  '::최종 진열매장의 속성을 기준으로 조회/선택 가능합니다.\n::매장번호 또는 매장명으로 조회할 경우 설정한 카테고리/매창속성 조건은 적용하지 않고 조회합니다.\n::URL매장, 브랜드그룹매장, 자동수집매장, 타이틀매장을 제외한 진열가능 매장 만 조회합니다.'

msgs.product.search = {}
msgs.product.search.title = '상품검색'
msgs.product.search.only_select_one_prd = '한 개의 상품만 선택해 주세요.'
msgs.product.search.selected_product_is_not_exist =
  '선택된 상품이(가) 존재하지 않습니다.'
msgs.product.search.tangible_product_cant_search =
  '유형상품은 여행상품 조회/수정화면에서 조회할 수 없습니다.'

msgs.product.detail = {}
msgs.product.detail.img_mgmt = {}
msgs.product.detail.img_mgmt.select_img = '이미지를 선택해 주세요.'

msgs.product.detail.banner_mgmt = {}
msgs.product.detail.banner_mgmt.is_not_jpg =
  '이미지파일은 jpg 확장자만 가능합니다.'
msgs.product.detail.banner_mgmt.img_size_over_1mb =
  '이미지사이즈 1MB이하만 업로드 가능합니다.'
msgs.product.detail.banner_mgmt.only_MD_has_permission =
  '본 상품은 MDID에 등록된 MD만 수정할 수 있습니다.'
msgs.product.detail.banner_mgmt.confirm_save = '저장하시겠습니까?'
msgs.product.detail.banner_mgmt.no_content_to_save =
  '저장할 내용이 존재하지 않습니다.'

msgs.product.detail.refund = {}
msgs.product.detail.refund.refund_desc =
  ':: 후환불인 경우 반품접수 +5영업일 이후 자동으로 환불 처리 됩니다.'

msgs.product.detail.ec_exposed = {}
msgs.product.detail.ec_exposed.desc =
  '::은 하나만 설정가능\n::외부채널(예:네이버쇼핑)노출시, 선택한 ""을 기준으로 카테고리 매장이 설정됨\n::GSSHOPLIVE, GSMYSHOP 은 "" 선택금지'
msgs.product.detail.ec_exposed.noData = '해당하는 데이터가 없습니다.'

msgs.product.detail.product_type = {}
msgs.product.detail.product_type.calendar_type_can_not_change =
  '캘린더 타입은 노출방식 변경이 불가능합니다.'
msgs.product.detail.product_type.has_attr_is_not_calendar = (attrCodeList) => `
  캘린더형에서 지원하지 않는 날짜속성이 있어, 내용을 저장할 수 없습니다. \n
  날짜 속성을 yyyy-mm-dd 양식에 맞추어 주세요. \n
  속성상품코드 : ${attrCodeList.join(', ')}`
msgs.product.detail.product_type.are_you_sure_zero_prd =
  "'0원 판매가를 등록 하셨습니다. 0원 상품이 확실합니까?"
msgs.product.detail.product_type.you_can_not_use_zero =
  '상품분류가 렌탈이 아닌 경우 0원 입력불가입니다.'
msgs.product.detail.product_type.sale_price_at_least_10 =
  '판매가격은 최소 10원 단위로 입력하십시오.'
msgs.product.detail.product_type.margin_rate_incorrect =
  '마진 범위가 잘못 입력되었습니다.'
msgs.product.detail.product_type.expos_seq_duplicated =
  '동일한순서가 존재합니다.'

msgs.product.specification = {}
msgs.product.specification.channel_desc =
  '* CA/DM 채널은 일반기술서 등록 시, EC 채널은 이미지기술서 등록 시 분류검증 요청할 수 있습니다.'

msgs.product.promotion = {}
msgs.product.promotion.separate_deliver_by_prd = {}
msgs.product.promotion.separate_deliver_by_prd.end_date_earlier_start_date =
  '시작일는/은 종료일 보다 이후 일수 없습니다'
msgs.product.promotion.separate_deliver_by_prd.please_save_the_editting =
  '입력중인 정보를 먼저 저장하십시오.'
msgs.product.promotion.separate_deliver_by_prd.please_enter_channel =
  '채널을 입력하십시오.'
msgs.product.promotion.separate_deliver_by_prd.invalid_start_date =
  '시작일시는 현재일시보다 과거일 수 없습니다. 시작일시를 수정해 주세요.'
msgs.product.promotion.separate_deliver_by_prd.confirm_delete_gift =
  '선택한 행을 삭제하시겠습니까?'
msgs.product.promotion.separate_deliver_by_prd.gift_list_is_empty =
  '사은품목록이 존재하면 않습니다. 확인하십시오.'
msgs.product.promotion.separate_deliver_by_prd.please_enter_accural_type =
  '적립타입(을)를 입력하십시오.'
msgs.product.promotion.confirm_end_promotion = '프로모션을 종료하시겠습니까?'
msgs.product.promotion.separate_deliver_by_prd.product_not_for_sale =
  '판매상품이 아닙니다.'
msgs.product.promotion.separate_deliver_by_prd.price_must_be_register =
  '프로모션 등록 전에 가격이 먼저 등록되어 있어야 합니다.'
msgs.product.promotion.separate_deliver_by_prd.promo_can_not_add_for_traditional_liquor =
  '전통주분류 상품은 상품프로모션 추가가 불가합니다.'
msgs.product.promotion.separate_deliver_by_prd.promo_can_not_reg_for_text_coupon =
  '문자쿠폰 상품은 사은품 프로모션을 등록 할 수 없습니다.'
msgs.product.promotion.separate_deliver_by_prd.confirm_continue_due_to_established =
  '공급계획이 수립되어 있는 사은품 입니다. 프로모션 종료 시 공급계획도 함께 삭제됩니다. 그래도 종료하시겠습니까?'
msgs.product.promotion.confirm_cancel_promotion = '프로모션을 취소하시겠습니까?'
msgs.product.promotion.promotion_has_ended = '이미 종료된 프로모션입니다.'
msgs.product.promotion.confirm_end_same_prior_chanls =
  '등록된 타 채널의 1순위 프로모션도 함께 종료하시겠습니까?'
msgs.product.promotion.confirm_end_oahu_chanls =
  '같이 등록된 oahu 프로모션도 함께 종료하시겠습니까?'
msgs.product.promotion.promotion_has_end_success =
  '적립금프로모션이 종료되었습니다.'

// messages for elements
msgs.element = {}

msgs.element.direct_input_modal = {}
msgs.element.direct_input_modal.has_attribute_over_length = (attribute) =>
  `[] 입력 한 ${attribute} 값이 너무 큽니다. 다시 입력해 주십시요.`
msgs.element.direct_input_modal.has_invalid_row_imported = (
  invalidRowCount,
  invalidData
) =>
  `등록 된 엑셀 속성 값 중 날짜 형태가 올바르지 않은 값이 있습니다. 해당 값은 제외 후 등록됩니다. \n
  - 건수: ${invalidRowCount} \n
  - 속성 값 1: ${invalidData.join(',')}`
msgs.element.direct_input_modal.need_atleast_one_attr =
  '속성 명은 하나 이상 입력하셔야 합니다.'
msgs.element.direct_input_modal.date_must_be_select = `날짜는 반드시 입력되어야합니다. \n
  캘린더 아이콘을 선택해 날짜를 선택 해주세요.`
msgs.element.direct_input_modal.insufficient_attr = (attributes) =>
  `${attributes.join(',')} 속성 값을 입력하셔야 합니다.`
msgs.element.direct_input_modal.redundant_attr = (attributes) =>
  `${attributes.join(',')} 속성 값은 입력하시면 안됩니다.`
msgs.element.direct_input_modal.duplicated_attr_record = '중복 된속성입니다.'
msgs.element.direct_input_modal.is_not_excel_file =
  'Only file xlsx,xls are acceptable.'

msgs.element.selection_input_modal = {}
msgs.element.selection_input_modal.unable_to_open_selection_input =
  '선택입력조합은 캘린더 형태일 경우 선택 불가능합니다.'

msgs.product.detail.view_change_history_inquiry = {}
msgs.product.detail.view_change_history_inquiry.please_enter_product_code_item =
  '필수 입력 항목입니다. 상품코드 항목을 입력하십시오.'

msgs.product.ars_attribute_guide_name = {}
msgs.product.ars_attribute_guide_name.enter_the_ars_attribute_name =
  'ARS속성명을 입력하세오.'
msgs.product.ars_attribute_guide_name.you_can_not_enter_spaces_continuously =
  '공백은 연속으로 입력할 수 없습니다.'
msgs.product.ars_attribute_guide_name.a_character_other_than_korean_was_entered =
  '자동주문(ARS)상품명에 한글과 공백 이외의 문자가 입력되었습니다.'
msgs.product.ars_attribute_guide_name.you_can_not_enter_a_duplicated_ars_attribute_name =
  '중복된 ARS속성 안내명을 입력하실 수 없습니다.'

msgs.product.detail.enter_orderable_quantity = {}
msgs.product.detail.enter_orderable_quantity.please_enter_the_total_orderable_quantity =
  '전체주문가능수량을 입력하세요.'
msgs.product.detail.enter_orderable_quantity.please_enter_0_or_more_total_orderable_quantity =
  '전체주문가능수량을 0 이상 입력하세요.'

msgs.product.detail.product_inquiry_popup = {}
msgs.product.detail.product_inquiry_popup.this_product_has_been_discontinued =
  '판매종료된 상품입니다.'
msgs.product.detail.product_inquiry_popup.purchased_products_cannot_be_registered_as_a_gift =
  '매입상품은 업체제공 사은품/별도배송상품 을 등록할 수 없습니다.'
msgs.product.detail.product_inquiry_popup.you_cannot_register_a_gift_provided_by_the_company =
  '본품의 판매가능채널에 CATV또는 TC가 포함된 경우 \n업체제공사은품을 등록할 수 없습니다.\n(당사제공/공동제공 만 가능)'
msgs.product.detail.product_inquiry_popup.please_proceed_to_sign_the_comprehensive_agreement =
  '포괄 약정서 서명이 되지 않은 협력사는 프로모션 요청이 불가합니다.\n포괄 약정서 서명 진행 바랍니다. 『위드넷 상단>퀵메뉴>전자계약>서명할계약서>포괄약정서 서명'

export default msgs
