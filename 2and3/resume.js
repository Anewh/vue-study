var resume = new Vue({
el: '#resume',
data: {
  firstName: '',
  lastName: '',
  patronymic: '',
  city: '',
  profession: '',
  email: '',
  birthdate:'',
  phone: '',
  expectedSalary: '',
  experience: '',
  skills: '',
  about: '',
  photo: '',
  errors: "",
  file: '',
  showPreview: false, //флаг наличия картинки
  imagePreview: '',   //путь к картинке 

  institute: '',
  faculty:'',
  specialization:'',
  endYear: '',
  selectedEduc: '', // выбранное образование
  educ:[            
    { level: 'Среднее' },
    { level: 'Среднее специальноее' },
    { level: 'Неоконченное высшее' },
    { level: 'Высшее' }
  ]
},
computed: {
     fullName: {    // Получить полное имя создателя резюме
      get: function () {
          return this.lastName + " " + this.firstName + " " +  this.patronymic;
        },
      set: function (newValue){
          return newValue;
        }
     },
     isCorrectFirstName: { // Проверка корректности значения в поле для ввода имени
      get: function(){
        const regex = /^[А-ЯA-Zа-яa-z\s-ё]*$/;
        return regex.test(this.firstName);
      },
      set: function(newValue){
        this.profession = newValue;
      } 
     },
     isCorrectLastName: { // Проверка корректности значения в поле для ввода фамилии
      get: function(){
        const regex = /^[А-ЯA-Zа-яa-z\s-ё]*$/;
        return regex.test(this.lastName);
      },
      set: function(newValue){
        this.profession = newValue;
      } 
     },
     isCorrecrPatr: { // Проверка корректности значения в поле для ввода отчества
      get: function(){
        const regex = /^[А-ЯA-Zа-яa-z\s-ё]*$/;
        return regex.test(this.patronimyc);
      },
      set: function(newValue){
        this.profession = newValue;
      } 
     },
     isCorrectEmail: { // Проверка корректности значения в поле для ввода почты 
      get: function(){
        if(this.email.length==0) return true;
        const regex = RegExp("^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$");
        console.log(regex.test(this.email));
        return regex.test(this.email);
      },
      set: function(newValue){
        this.profession = newValue;
      } 
     },
     isCorrectPhone: { // Проверка корректности значения в поле для ввода телефона
      get: function(){
        if(this.phone.length==0) return true;
        const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return regex.test(this.phone);
      },
      set: function(newValue){
        this.profession = newValue;
      } 
     },
     isComplexEduc:{ // Проверка выбранного образования
      get: function(){
        return this.selectedEduc === this.educ[1].level || 
               this.selectedEduc === this.educ[2].level || 
               this.selectedEduc === this.educ[3].level;
      },
      set: function(newValue){
        
      } 
     },
   },
methods: {
      handleFileUpload(){ // загрузка файла и отображение фотографии резюме
        this.file = this.$refs.file.files[0];
        let reader  = new FileReader();
        reader.addEventListener("load", function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this), false);
        if( this.file ){
          if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
            reader.readAsDataURL( this.file );
          }
        }
      }
}})