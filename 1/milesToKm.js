var computedMilesKm = new Vue({
el: '#converterMilesKm',
data: {
  value: 0,
  multiplier: 1.852,
  isInitialValue: true,
},
computed: {
    answer: {
      get: function () {
          return this.value*this.multiplier;
        },
      set: function (newValue){
          this.answer = this.value;
        }
    },
    reverseAnswer:{
      get: function () {
          return this.value/this.multiplier;
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