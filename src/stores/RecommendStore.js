import {
	defineStore
} from 'pinia'

export const useRecommendStore = defineStore('recommendStore', {
	state: () => ({
		// 추천 받은 번호 컬랙션
		// 컬랙션 타입 object
		// 회차별 컬랙션 데이터 numbers(추천 받은 번호 배열), drw ( 회차 ) : {recommends:[], drw:0000}

		collections: [
			/*
			{
				"drw": '1150',
				"numbers": [{
					"number": 6
				}, {
					"number": 8
				}, {
					"number": 13
				}, {
					"number": 18
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 32
				}, {
					"number": 34
				}, {
					"number": 39
				}, {
					"number": 42
				}, {
					"number": 43
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 16
				}, {
					"number": 39
				}, {
					"number": 44
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 6
				}, {
					"number": 10
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 28
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 3
				}, {
					"number": 14
				}, {
					"number": 38
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 18
				}, {
					"number": 25
				}, {
					"number": 31
				}, {
					"number": 32
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 42
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 20
				}, {
					"number": 26
				}, {
					"number": 39
				}, {
					"number": 42
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 21
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 6
				}, {
					"number": 10
				}, {
					"number": 12
				}, {
					"number": 17
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 32
				}, {
					"number": 35
				}, {
					"number": 36
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 3
				}, {
					"number": 17
				}, {
					"number": 18
				}, {
					"number": 25
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 18
				}, {
					"number": 24
				}, {
					"number": 38
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 24
				}, {
					"number": 37
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 9
				}, {
					"number": 22
				}, {
					"number": 38
				}, {
					"number": 39
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 20
				}, {
					"number": 35
				}, {
					"number": 37
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 14
				}, {
					"number": 23
				}, {
					"number": 37
				}, {
					"number": 38
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 3
				}, {
					"number": 7
				}, {
					"number": 18
				}, {
					"number": 22
				}, {
					"number": 33
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 13
				}, {
					"number": 16
				}, {
					"number": 27
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 25
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 36
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 19
				}, {
					"number": 20
				}, {
					"number": 25
				}, {
					"number": 33
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 25
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 13
				}, {
					"number": 25
				}, {
					"number": 35
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 18
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 10
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 11
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 37
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 37
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 4
				}, {
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 17
				}, {
					"number": 23
				}, {
					"number": 31
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 3
				}, {
					"number": 20
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 10
				}, {
					"number": 17
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 6
				}, {
					"number": 18
				}, {
					"number": 22
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 22
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 6
				}, {
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 29
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 27
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 18
				}, {
					"number": 20
				}, {
					"number": 24
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 26
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 40
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 28
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 12
				}, {
					"number": 18
				}, {
					"number": 32
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 6
				}, {
					"number": 7
				}, {
					"number": 32
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 13
				}, {
					"number": 26
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 11
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 20
				}, {
					"number": 37
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 26
				}, {
					"number": 27
				}, {
					"number": 39
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 24
				}, {
					"number": 29
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 3
				}, {
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 21
				}, {
					"number": 25
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 9
				}, {
					"number": 20
				}, {
					"number": 24
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 11
				}, {
					"number": 39
				}, {
					"number": 42
				}, {
					"number": 44
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 11
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 7
				}, {
					"number": 16
				}, {
					"number": 24
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 7
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 3
				}, {
					"number": 20
				}, {
					"number": 25
				}, {
					"number": 39
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 7
				}, {
					"number": 8
				}, {
					"number": 21
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 8
				}, {
					"number": 10
				}, {
					"number": 11
				}, {
					"number": 25
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 18
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 34
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 17
				}, {
					"number": 22
				}, {
					"number": 39
				}, {
					"number": 42
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 21
				}, {
					"number": 33
				}, {
					"number": 38
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 7
				}, {
					"number": 8
				}, {
					"number": 10
				}, {
					"number": 32
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 17
				}, {
					"number": 18
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 7
				}, {
					"number": 16
				}, {
					"number": 18
				}, {
					"number": 23
				}, {
					"number": 38
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 10
				}, {
					"number": 11
				}, {
					"number": 25
				}, {
					"number": 31
				}, {
					"number": 38
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 4
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 23
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 8
				}, {
					"number": 10
				}, {
					"number": 16
				}, {
					"number": 22
				}, {
					"number": 26
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 22
				}, {
					"number": 36
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 6
				}, {
					"number": 21
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 3
				}, {
					"number": 11
				}, {
					"number": 18
				}, {
					"number": 25
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 3
				}, {
					"number": 20
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 22
				}, {
					"number": 35
				}, {
					"number": 36
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 11
				}, {
					"number": 14
				}, {
					"number": 21
				}, {
					"number": 27
				}, {
					"number": 29
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 6
				}, {
					"number": 7
				}, {
					"number": 28
				}, {
					"number": 31
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 4
				}, {
					"number": 19
				}, {
					"number": 34
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 6
				}, {
					"number": 7
				}, {
					"number": 19
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 10
				}, {
					"number": 23
				}, {
					"number": 37
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 10
				}, {
					"number": 20
				}, {
					"number": 24
				}, {
					"number": 35
				}, {
					"number": 37
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 13
				}, {
					"number": 21
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 37
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 39
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 7
				}, {
					"number": 10
				}, {
					"number": 29
				}, {
					"number": 33
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 6
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 18
				}, {
					"number": 20
				}, {
					"number": 32
				}, {
					"number": 34
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 32
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 43
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 16
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 32
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 4
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 31
				}, {
					"number": 37
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 2
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 31
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 12
				}, {
					"number": 31
				}, {
					"number": 38
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 19
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 36
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 1
				}, {
					"number": 17
				}, {
					"number": 18
				}, {
					"number": 20
				}, {
					"number": 28
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 17
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 36
				}, {
					"number": 38
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 22
				}, {
					"number": 39
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1150',
				"numbers": [{
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 17
				}, {
					"number": 22
				}, {
					"number": 32
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 26
				}, {
					"number": 27
				}, {
					"number": 36
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 17
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 33
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 15
				}, {
					"number": 19
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 16
				}, {
					"number": 18
				}, {
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 40
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 16
				}, {
					"number": 31
				}, {
					"number": 35
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 16
				}, {
					"number": 19
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 20
				}, {
					"number": 21
				}, {
					"number": 22
				}, {
					"number": 29
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 26
				}, {
					"number": 27
				}, {
					"number": 35
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 18
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 13
				}, {
					"number": 23
				}, {
					"number": 29
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 17
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 35
				}, {
					"number": 37
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 16
				}, {
					"number": 22
				}, {
					"number": 29
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 3
				}, {
					"number": 7
				}, {
					"number": 25
				}, {
					"number": 31
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 7
				}, {
					"number": 27
				}, {
					"number": 29
				}, {
					"number": 38
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 7
				}, {
					"number": 26
				}, {
					"number": 27
				}, {
					"number": 32
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 38
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 15
				}, {
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 14
				}, {
					"number": 15
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 5
				}, {
					"number": 17
				}, {
					"number": 21
				}, {
					"number": 29
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 7
				}, {
					"number": 14
				}, {
					"number": 23
				}, {
					"number": 33
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 6
				}, {
					"number": 7
				}, {
					"number": 20
				}, {
					"number": 32
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 37
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 13
				}, {
					"number": 28
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 13
				}, {
					"number": 14
				}, {
					"number": 29
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 7
				}, {
					"number": 9
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 24
				}, {
					"number": 28
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 7
				}, {
					"number": 17
				}, {
					"number": 29
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 19
				}, {
					"number": 20
				}, {
					"number": 38
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 10
				}, {
					"number": 28
				}, {
					"number": 31
				}, {
					"number": 32
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 17
				}, {
					"number": 21
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 6
				}, {
					"number": 16
				}, {
					"number": 22
				}, {
					"number": 28
				}, {
					"number": 38
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 25
				}, {
					"number": 36
				}, {
					"number": 37
				}, {
					"number": 43
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 20
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 31
				}, {
					"number": 32
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 26
				}, {
					"number": 28
				}, {
					"number": 35
				}, {
					"number": 36
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 9
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 26
				}, {
					"number": 29
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 19
				}, {
					"number": 23
				}, {
					"number": 33
				}, {
					"number": 35
				}, {
					"number": 38
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 21
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 35
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 10
				}, {
					"number": 28
				}, {
					"number": 35
				}, {
					"number": 42
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 11
				}, {
					"number": 14
				}, {
					"number": 20
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 7
				}, {
					"number": 17
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 12
				}, {
					"number": 21
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 19
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 31
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 9
				}, {
					"number": 12
				}, {
					"number": 31
				}, {
					"number": 32
				}, {
					"number": 34
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 17
				}, {
					"number": 25
				}, {
					"number": 28
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 15
				}, {
					"number": 17
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 10
				}, {
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 14
				}, {
					"number": 28
				}, {
					"number": 36
				}, {
					"number": 42
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 11
				}, {
					"number": 14
				}, {
					"number": 21
				}, {
					"number": 23
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 22
				}, {
					"number": 37
				}, {
					"number": 38
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 7
				}, {
					"number": 25
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 35
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 13
				}, {
					"number": 17
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 36
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 6
				}, {
					"number": 11
				}, {
					"number": 12
				}, {
					"number": 21
				}, {
					"number": 22
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 15
				}, {
					"number": 32
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 5
				}, {
					"number": 12
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 32
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 12
				}, {
					"number": 15
				}, {
					"number": 20
				}, {
					"number": 24
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 19
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 33
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 11
				}, {
					"number": 14
				}, {
					"number": 20
				}, {
					"number": 31
				}, {
					"number": 36
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 15
				}, {
					"number": 25
				}, {
					"number": 27
				}, {
					"number": 38
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 20
				}, {
					"number": 24
				}, {
					"number": 32
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 7
				}, {
					"number": 15
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 17
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 9
				}, {
					"number": 15
				}, {
					"number": 31
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 32
				}, {
					"number": 34
				}, {
					"number": 36
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 7
				}, {
					"number": 19
				}, {
					"number": 23
				}, {
					"number": 27
				}, {
					"number": 29
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 28
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 11
				}, {
					"number": 25
				}, {
					"number": 27
				}, {
					"number": 32
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 14
				}, {
					"number": 15
				}, {
					"number": 25
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 11
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 27
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 12
				}, {
					"number": 18
				}, {
					"number": 21
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 20
				}, {
					"number": 24
				}, {
					"number": 26
				}, {
					"number": 39
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 20
				}, {
					"number": 29
				}, {
					"number": 31
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 21
				}, {
					"number": 22
				}, {
					"number": 24
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 19
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 32
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 14
				}, {
					"number": 15
				}, {
					"number": 26
				}, {
					"number": 27
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 11
				}, {
					"number": 16
				}, {
					"number": 19
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 33
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 18
				}, {
					"number": 36
				}, {
					"number": 38
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 28
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 7
				}, {
					"number": 15
				}, {
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 22
				}, {
					"number": 27
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 4
				}, {
					"number": 12
				}, {
					"number": 23
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 21
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 35
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 9
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 29
				}, {
					"number": 34
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 5
				}, {
					"number": 7
				}, {
					"number": 15
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 6
				}, {
					"number": 23
				}, {
					"number": 38
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 38
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 10
				}, {
					"number": 17
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 36
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 3
				}, {
					"number": 11
				}, {
					"number": 32
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 4
				}, {
					"number": 5
				}, {
					"number": 6
				}, {
					"number": 7
				}, {
					"number": 18
				}, {
					"number": 33
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 3
				}, {
					"number": 9
				}, {
					"number": 22
				}, {
					"number": 37
				}, {
					"number": 43
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 10
				}, {
					"number": 12
				}, {
					"number": 15
				}, {
					"number": 18
				}, {
					"number": 24
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 10
				}, {
					"number": 12
				}, {
					"number": 17
				}, {
					"number": 19
				}, {
					"number": 23
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 23
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 11
				}, {
					"number": 13
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 9
				}, {
					"number": 20
				}, {
					"number": 25
				}, {
					"number": 36
				}, {
					"number": 38
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 7
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 12
				}, {
					"number": 25
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 15
				}, {
					"number": 17
				}, {
					"number": 21
				}, {
					"number": 22
				}, {
					"number": 39
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1151',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 16
				}, {
					"number": 33
				}, {
					"number": 35
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 11
				}, {
					"number": 21
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 3
				}, {
					"number": 24
				}, {
					"number": 26
				}, {
					"number": 31
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 23
				}, {
					"number": 29
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 28
				}, {
					"number": 35
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 23
				}, {
					"number": 27
				}, {
					"number": 32
				}, {
					"number": 42
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 7
				}, {
					"number": 17
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 13
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 26
				}, {
					"number": 38
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 7
				}, {
					"number": 23
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 19
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 17
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 29
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 29
				}, {
					"number": 31
				}, {
					"number": 32
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 31
				}, {
					"number": 36
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 14
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 39
				}, {
					"number": 43
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 38
				}, {
					"number": 42
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 27
				}, {
					"number": 35
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 16
				}, {
					"number": 21
				}, {
					"number": 25
				}, {
					"number": 28
				}, {
					"number": 32
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 7
				}, {
					"number": 21
				}, {
					"number": 23
				}, {
					"number": 29
				}, {
					"number": 36
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 6
				}, {
					"number": 12
				}, {
					"number": 20
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 25
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 8
				}, {
					"number": 12
				}, {
					"number": 16
				}, {
					"number": 24
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 7
				}, {
					"number": 8
				}, {
					"number": 32
				}, {
					"number": 38
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 3
				}, {
					"number": 4
				}, {
					"number": 8
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 24
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 3
				}, {
					"number": 4
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 37
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 18
				}, {
					"number": 24
				}, {
					"number": 28
				}, {
					"number": 32
				}, {
					"number": 41
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 17
				}, {
					"number": 22
				}, {
					"number": 28
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 12
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 35
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 28
				}, {
					"number": 29
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 33
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 10
				}, {
					"number": 14
				}, {
					"number": 23
				}, {
					"number": 26
				}, {
					"number": 28
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 15
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 28
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 11
				}, {
					"number": 17
				}, {
					"number": 25
				}, {
					"number": 36
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 3
				}, {
					"number": 20
				}, {
					"number": 22
				}, {
					"number": 36
				}, {
					"number": 38
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 13
				}, {
					"number": 23
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 6
				}, {
					"number": 15
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 33
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 8
				}, {
					"number": 15
				}, {
					"number": 28
				}, {
					"number": 37
				}, {
					"number": 40
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 8
				}, {
					"number": 25
				}, {
					"number": 36
				}, {
					"number": 38
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 13
				}, {
					"number": 14
				}, {
					"number": 17
				}, {
					"number": 29
				}, {
					"number": 37
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 8
				}, {
					"number": 17
				}, {
					"number": 20
				}, {
					"number": 22
				}, {
					"number": 32
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 14
				}, {
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 7
				}, {
					"number": 8
				}, {
					"number": 17
				}, {
					"number": 33
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 10
				}, {
					"number": 15
				}, {
					"number": 24
				}, {
					"number": 34
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 16
				}, {
					"number": 21
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 7
				}, {
					"number": 14
				}, {
					"number": 15
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 23
				}, {
					"number": 32
				}, {
					"number": 37
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 14
				}, {
					"number": 22
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 28
				}, {
					"number": 39
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 11
				}, {
					"number": 12
				}, {
					"number": 36
				}, {
					"number": 38
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 10
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 33
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 10
				}, {
					"number": 24
				}, {
					"number": 26
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 15
				}, {
					"number": 17
				}, {
					"number": 39
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 6
				}, {
					"number": 8
				}, {
					"number": 15
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 3
				}, {
					"number": 4
				}, {
					"number": 9
				}, {
					"number": 26
				}, {
					"number": 29
				}, {
					"number": 32
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 6
				}, {
					"number": 10
				}, {
					"number": 11
				}, {
					"number": 22
				}, {
					"number": 33
				}, {
					"number": 35
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 22
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 9
				}, {
					"number": 15
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 11
				}, {
					"number": 14
				}, {
					"number": 16
				}, {
					"number": 41
				}, {
					"number": 42
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 10
				}, {
					"number": 15
				}, {
					"number": 20
				}, {
					"number": 37
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 12
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 7
				}, {
					"number": 10
				}, {
					"number": 34
				}, {
					"number": 38
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 8
				}, {
					"number": 16
				}, {
					"number": 17
				}, {
					"number": 26
				}, {
					"number": 28
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 7
				}, {
					"number": 8
				}, {
					"number": 18
				}, {
					"number": 19
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 14
				}, {
					"number": 24
				}, {
					"number": 25
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 19
				}, {
					"number": 21
				}, {
					"number": 36
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 15
				}, {
					"number": 16
				}, {
					"number": 17
				}, {
					"number": 40
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 7
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 32
				}, {
					"number": 33
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 3
				}, {
					"number": 11
				}, {
					"number": 12
				}, {
					"number": 22
				}, {
					"number": 36
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 10
				}, {
					"number": 16
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 8
				}, {
					"number": 27
				}, {
					"number": 29
				}, {
					"number": 32
				}, {
					"number": 42
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 14
				}, {
					"number": 23
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 10
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 33
				}, {
					"number": 40
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 18
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 9
				}, {
					"number": 15
				}, {
					"number": 24
				}, {
					"number": 31
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 5
				}, {
					"number": 6
				}, {
					"number": 24
				}, {
					"number": 35
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 8
				}, {
					"number": 9
				}, {
					"number": 38
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 17
				}, {
					"number": 20
				}, {
					"number": 23
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 18
				}, {
					"number": 25
				}, {
					"number": 28
				}, {
					"number": 35
				}, {
					"number": 36
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 4
				}, {
					"number": 8
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 26
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 3
				}, {
					"number": 9
				}, {
					"number": 22
				}, {
					"number": 29
				}, {
					"number": 37
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 35
				}, {
					"number": 39
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 14
				}, {
					"number": 15
				}, {
					"number": 40
				}, {
					"number": 41
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 15
				}, {
					"number": 28
				}, {
					"number": 36
				}, {
					"number": 37
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 22
				}, {
					"number": 23
				}, {
					"number": 37
				}, {
					"number": 39
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 28
				}, {
					"number": 32
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 10
				}, {
					"number": 16
				}, {
					"number": 25
				}, {
					"number": 35
				}, {
					"number": 37
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 9
				}, {
					"number": 14
				}, {
					"number": 17
				}, {
					"number": 34
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 2
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 33
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 14
				}, {
					"number": 19
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 38
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 3
				}, {
					"number": 11
				}, {
					"number": 23
				}, {
					"number": 25
				}, {
					"number": 29
				}, {
					"number": 33
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 4
				}, {
					"number": 20
				}, {
					"number": 32
				}, {
					"number": 35
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 10
				}, {
					"number": 21
				}, {
					"number": 25
				}, {
					"number": 27
				}, {
					"number": 41
				}, {
					"number": 42
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 13
				}, {
					"number": 16
				}, {
					"number": 22
				}, {
					"number": 26
				}, {
					"number": 40
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 19
				}, {
					"number": 38
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 4
				}, {
					"number": 6
				}, {
					"number": 9
				}, {
					"number": 11
				}, {
					"number": 22
				}, {
					"number": 28
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 6
				}, {
					"number": 7
				}, {
					"number": 22
				}, {
					"number": 32
				}, {
					"number": 41
				}, {
					"number": 45
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 9
				}, {
					"number": 10
				}, {
					"number": 17
				}, {
					"number": 21
				}, {
					"number": 24
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 2
				}, {
					"number": 20
				}, {
					"number": 25
				}, {
					"number": 28
				}, {
					"number": 29
				}, {
					"number": 37
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 8
				}, {
					"number": 12
				}, {
					"number": 29
				}, {
					"number": 34
				}, {
					"number": 44
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 1
				}, {
					"number": 10
				}, {
					"number": 25
				}, {
					"number": 26
				}, {
					"number": 32
				}, {
					"number": 41
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 3
				}, {
					"number": 5
				}, {
					"number": 9
				}, {
					"number": 16
				}, {
					"number": 23
				}, {
					"number": 39
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 5
				}, {
					"number": 10
				}, {
					"number": 22
				}, {
					"number": 24
				}, {
					"number": 26
				}, {
					"number": 43
				}]
			},
			{
				"drw": '1153',
				"numbers": [{
					"number": 9
				}, {
					"number": 18
				}, {
					"number": 23
				}, {
					"number": 24
				}, {
					"number": 25
				}, {
					"number": 32
				}]
			},
			*/
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
