// Для вычисляемого свойства get и set нужны из-за того, что используется v-model
// v-model нужен для двунаправленного связывания данных с элементами форм input, textarea и select. 
// Способ обновления элемента выбирается автоматически в зависимости от типа элемента. 
// Начальное значение задается в data в js - это value
// Используется тот же подход, что и в computedKelvToCels. Только величины - радианы и градусы
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