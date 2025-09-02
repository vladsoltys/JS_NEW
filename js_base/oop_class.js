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
}

let people = new People("Soltys Vladislav Igorevich", "12.09.1997", "1234, 3534, 3245", 43)