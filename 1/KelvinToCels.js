var computedKelvToCels = new Vue({
el: '#converterKelvToCels',
data: {
  value: 0,
  subtrahed: 273.15,
  isInitialValue: true,
},
computed: {
    answer: {
      get: function () {
          return this.value-this.subtrahed;
        },
      set: function (newValue){
          this.answer = this.value;
        }
    },
    reverseAnswer:{
      get: function () {
          return this.value+this.subtrahed;
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