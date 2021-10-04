<template>
  <div>
    <input type="text" placeholder="last name" v-model="lastname">
    <input type="text" placeholder="first name" v-model="firstname">
    <input type="date" v-model="fullbirth">
    <button @click.prevent="saveBirthInfo">complete</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return{
      lastname: '',
      firstname: '',
      fullbirth: '',
      month: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
      day: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      colors: ['#4287f5', '#b771e3', '#6e0e4c', '#0e6e4b', '#28c78d', '#80d983', '#a5d980', '#cfd980', '#d9cd80', '#d9b480', '#d99b80']
    }
  },
  methods:{
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * (11 - 0)) + 0]
    },
    getDeadLine(){
      let givenDate = new Date(`${this.fullbirth}`);
      let time1 = new Date();
      time1.setDate(givenDate.getDate());
      time1.setMonth(givenDate.getMonth());
      time1.setFullYear(new Date().getFullYear()+1);
      let givenDay = time1.getDate(),
          givenMonth = time1.getMonth(),
          givenYear = time1.getFullYear();


      let time2 = new Date();
      let currentDate = new Date(`${time2.getFullYear()},${time2.getMonth()},${time2.getDate()}`)

      let futureBirth = new Date(`${givenYear},${givenMonth},${givenDay}`)
      let deadline =  futureBirth - currentDate
      return Math.floor(deadline/(24*3600000));
    },
    saveBirthInfo(){
      this.$emit('addBirthDay', {
        lastname: this.lastname,
        firstname: this.firstname,
        birth: {
          day: this.day[new Date(`${this.fullbirth}`).getDay()],
          date: new Date(`${this.fullbirth}`).getDate(),
          month: this.month[new Date(`${this.fullbirth}`).getMonth()],
          year: new Date(`${this.fullbirth}`).getFullYear()
        },
        randColor: this.getRandomColor(),
        deadline: this.getDeadLine()
      })
    }
  }
}

</script>

<style scoped>
  div{
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #a3a3e5;
    padding: 50px 30px;
    align-items: center;
  }
  div input{
    width: 300px;
    height: 30px;
    border-radius: 3px;
    border: none;
    color: #3f3fab;
    padding: 7px;
    font-size: 12px;
  }
  div input:focus{
    outline: none;
    color: #000;
    font-size: 16px;
    font-family: 'poppins';
    border: none;
  }
  button{
    font-size: 13px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #ccc;
    color: #fff;
    padding: 7px;
  }
</style>