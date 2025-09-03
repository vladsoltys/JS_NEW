class People {
   /**  
    * Клас человек
    * @param {String} fio по формату "Фамилия Имя Отчество"
    * @param {String} birthday день рождение по формату "24.11.1994"
    * @param {String} numbers "номер", если больше 2 номеров, то по формату "номер1, номер 2"
    * @param {Number} room комната
    */
   constructor (fio, birthday, numbers, room) {
    let name = fio.toLowerCase().split(" ");
    this.name = {};
    this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
    this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
    this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

    let date = birthday.split(".");
    this.date = {};
    this.date.d = +date[0]
    this.date.m = +date[1]
    this.date.y = +date[2]

    this.numbers = numbers.split(", ")

    // let phone = numbers.split(", ")
    // this.numbers = [];
    // for(let i=0; i<phone.length; i++) {
    //     this.numbers.push(phone[i])
    // }

    this.room = +room
   }
   static month = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
   
   /**
    * Вывести ФИО
    * @return {String} Строка формата "Фамилия Имя Отчество"
    */
   getFio() {
      return `${this.name.f} ${this.name.i} ${this.name.o}`
   }
   /**
    * Вывести день рождения
    * @return {String} Строка формата "24 июля 1997"
    */
   getBirthday() {
      return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
   }
   /**
    * Вывести формат "Фамилия_Имя_Отчество.jpg"
    * @param {String} extention разширение, например "jpg" или "pdf"
    * @return {String} для названия изображения
    */
   getImgSrc(extention) {
      return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`
   }
    /**
    * Вывести формат "Фамилия_Имя_Отчество.jpg"
    * @param {Boolean} allNumbers 
    * @return {String} 
    */
   getNumberList(allNumbers) {
      if(this.numbers.length === 0 || this.numbers[0].length === 0) {
         return undefined
      }
      if(allNumbers) {
         return this.numbers.join(", ");
      } else {
         return this.numbers[0];
      }
   }
}

let people = new People("Soltys Vladislav Igorevich", "12.09.1997", "1234, 3534, 3245", 43)
console.log(people.getNumberList(true));