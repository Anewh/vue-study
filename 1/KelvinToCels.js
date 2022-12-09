// Для вычисляемого свойства get и set нужны из-за того, что используется v-model
// v-model нужен для двунаправленного связывания данных с элементами форм input, textarea и select. 
// Способ обновления элемента выбирается автоматически в зависимости от типа элемента. 
// Начальное значение задается в data в js - это value
var computedKelvToCels = new Vue({
el: '#converterKelvToCels',
data: {
  value: 0,
  subtrahed: 273.15,
  isInitialValue: true,
},
computed: {
    answer: { // перевод из Цельсий в Кельвины
      get: function () {
          return this.value-this.subtrahed;
        },
      set: function (newValue){
          this.answer = this.value;
        }
    },
    reverseAnswer:{ // перевод из Кельвинов в Цельсии
      get: function () {
          return this.value+this.subtrahed;
        },
      set: function (newValue){
          this.answer = this.value;
        }
    },
    typeOfConverter:{ //определяет, выводить величину в Кельвинах или в Цельсиях 
      get: function () {
          return this.isInitialValue;
        },
      set: function (newValue){
          this.isInitialValue = newValue;
        }
    }
  }
})