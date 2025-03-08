import {
	defineStore
} from 'pinia'

export const useRecommendStore = defineStore('recommendStore', {
	state: () => ({
		// 추천 받은 번호 컬랙션
		// 컬랙션 타입 object
		// 회차별 컬랙션 데이터 numbers(추천 받은 번호 배열), drw ( 회차 ) : {recommends:[], drw:0000}

		collections: [{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 17
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 37
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 14
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 31
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 21
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 33
				}, {
					"number": 36
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 4
				}, {
					"number": 5
				}, {
					"number": 25
				}, {
					"number": 37
				}, {
					"number": 44
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 4
				}, {
					"number": 5
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 29
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 25
				}, {
					"number": 33
				}, {
					"number": 36
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 14
				}, {
					"number": 21
				}, {
					"number": 25
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 12
				}, {
					"number": 22
				}, {
					"number": 25
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 33
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 31
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 4
				}, {
					"number": 5
				}, {
					"number": 15
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 31
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 16
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 33
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 16
				}, {
					"number": 25
				}, {
					"number": 31
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 29
				}, {
					"number": 31
				}, {
					"number": 41
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 12
				}, {
					"number": 21
				}, {
					"number": 26
				}, {
					"number": 28
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 14
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 17
				}, {
					"number": 24
				}, {
					"number": 29
				}, {
					"number": 35
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 11
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 36
				}, {
					"number": 37
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 16
				}, {
					"number": 40
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 35
				}, {
					"number": 36
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 26
				}, {
					"number": 27
				}, {
					"number": 28
				}, {
					"number": 31
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 15
				}, {
					"number": 26
				}, {
					"number": 29
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 14
				}, {
					"number": 15
				}, {
					"number": 21
				}, {
					"number": 28
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 32
				}, {
					"number": 40
				}, {
					"number": 42
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 16
				}, {
					"number": 21
				}, {
					"number": 22
				}, {
					"number": 27
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 21
				}, {
					"number": 32
				}, {
					"number": 36
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 33
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 24
				}, {
					"number": 29
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 17
				}, {
					"number": 18
				}, {
					"number": 23
				}, {
					"number": 29
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 24
				}, {
					"number": 31
				}, {
					"number": 33
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 2
				}, {
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 22
				}, {
					"number": 26
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 4
				}, {
					"number": 17
				}, {
					"number": 19
				}, {
					"number": 31
				}, {
					"number": 41
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 18
				}, {
					"number": 19
				}, {
					"number": 20
				}, {
					"number": 22
				}, {
					"number": 29
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 15
				}, {
					"number": 19
				}, {
					"number": 24
				}, {
					"number": 40
				}, {
					"number": 41
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 19
				}, {
					"number": 23
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 11
				}, {
					"number": 14
				}, {
					"number": 26
				}, {
					"number": 29
				}, {
					"number": 35
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 10
				}, {
					"number": 11
				}, {
					"number": 19
				}, {
					"number": 29
				}, {
					"number": 35
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 20
				}, {
					"number": 27
				}, {
					"number": 36
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 10
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 26
				}, {
					"number": 29
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 31
				}, {
					"number": 36
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 9
				}, {
					"number": 15
				}, {
					"number": 29
				}, {
					"number": 31
				}, {
					"number": 33
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 4
				}, {
					"number": 14
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 31
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 14
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 31
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 17
				}, {
					"number": 23
				}, {
					"number": 29
				}, {
					"number": 33
				}, {
					"number": 41
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 1
				}, {
					"number": 17
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 41
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 14
				}, {
					"number": 15
				}, {
					"number": 22
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 16
				}, {
					"number": 19
				}, {
					"number": 22
				}, {
					"number": 28
				}, {
					"number": 35
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1162',
				"numbers": [{
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},

		],
	}),
	actions: {
		addRecommend(numbers, drw) {
			const _recommendObj = {
				"numbers": numbers,
				"writeDate": getFormattedDate(),
				"drw": drw
			}

			this.collections.push(_recommendObj);

			function getFormattedDate() {
				const now = new Date(); // 현재 시간 가져오기
				const year = now.getFullYear(); // 연도 (4자리)
				const month = String(now.getMonth() + 1).padStart(2, '0'); // 월 (2자리, 1월은 0이므로 +1 필요)
				const date = String(now.getDate()).padStart(2, '0'); // 날짜 (2자리)

				return `${year}.${month}.${date}`; // 형식에 맞게 조합
			}
		},
		getRecommends(drw) {
			let _recommends = [];
			this.collections.forEach((item) => {
				if (drw === undefined) {
					_recommends.push(item);
				} else {
					if (Number(item.drw) === Number(drw)) {
						_recommends.push(item);
					}
				}
			});
			return _recommends;
		},
		getDrwList() {
			let _list = [];
			this.collections.forEach((item) => {
				if (!_list.includes(Number(item.drw))) {
					_list.push(Number(item.drw));
				}
			});
			_list.sort((a, b) => b - a);
			return _list;
		}
	},
})
