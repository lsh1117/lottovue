import AlertPopup from '@/views/popup/AlertPopup.vue'
import ExceptionPopup from '@/views/popup/ExceptionPopup.vue'
import FixedPopup from '@/views/popup/FixedPopup.vue'

/**
 * defaultProps
 * title : 팝업 제목
 * message : 출력 메시지 
 * onOpen : 오픈 이벤트
 * onClose : 닫기 이벤트
 */

export const popupList = {
	alert: {
		type: "alert",
		title: "Alert",
		component: AlertPopup,
		options: {
			message: '기본 경고 메시지입니다.',
		},
	},
	exception: {
		title: '제외번호',
		type:'dialog',
		component: ExceptionPopup,
		options: {
			
		},
	},
	fixed: {
		title: '고정번호',
		type:'dialog',
		component: FixedPopup,
		options: {
			
		},
	},
}
