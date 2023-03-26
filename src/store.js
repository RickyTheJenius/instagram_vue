import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      age:15,
      likes: 30,
      liked:false,
    }
  },
  mutations:{
    likesChange(state){
      if(state.liked==false){
        state.likes++;
        state.liked=true;
      }else{
        state.likes--;
        state.liked=false;
      }
    }
  }
})

export default store