import {defineStore} from 'pinia'

export const useRecommendStore = defineStore('recommendStore', {
    state: () => ({
        state: false,
        numbers: [],
    }),
    actions: {
        setState(state){
            this.state = state;
        },
        getState(){
            return this.state;
        },
        addNumbers(numbers){
            this.numbers.push(numbers);
        },
        gddNumbers(){
            return this.numbers;
        },
    },
})
