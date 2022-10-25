var computedRadToDegrees = new Vue({
el: '#converterRadToDegrees',
data: {
  value: 0,
  multiplier: 0.0174533,
  isInitialValue: true,
},
computed: {
    answer: {
      get: function () {
          return this.value*Math.PI/180;
        },
      set: function (newValue){
          this.answer = this.value;
        }
    },
    reverseAnswer:{
      get: function () {
          return this.value*this.multiplier;
        },
      set: function (newValue){
          this.answer = this.value;
        }
    },
    typeOfConverter:{
      get: function () {
          return this.isInitialValue;
        },
      set: function (newValue){
          this.isInitialValue = newValue;
        }
    }
  }
})