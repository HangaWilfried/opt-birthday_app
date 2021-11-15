<template>
  <div>
    <input type="text" placeholder="last name" v-model="lastName">
    <input type="text" placeholder="first name" v-model="firstName">
    <input type="date" v-model="birthInfo">
    <button @click.prevent="submit">complete</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return{
      lastName: '',
      firstName: '',
      birthInfo: '',
      month: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
      day: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      colors: ['#4287f5', '#b771e3', '#6e0e4c', '#0e6e4b', '#28c78d', '#80d983', '#a5d980', '#cfd980', '#d9cd80', '#d9b480', '#d99b80']
    }
  },
  methods:{
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * (11 - 0)) + 0]
    },
    getRemainingDays(){
      const dateOfBirth = new Date(`${this.birthInfo}`);
      const timeOfBirth = new Date();
      timeOfBirth.setDate(dateOfBirth.getDate());
      timeOfBirth.setMonth(dateOfBirth.getMonth());
      timeOfBirth.setFullYear(new Date().getFullYear()+1);
      const dayOfBirth = timeOfBirth.getDate(),
          monthOfBirth = timeOfBirth.getMonth(),
          yearOfBirth = timeOfBirth.getFullYear();


      const now = new Date();
      const today = new Date(`${now.getFullYear()},${now.getMonth()},${now.getDate()}`)
      const dateOfBirthday = new Date(`${yearOfBirth},${monthOfBirth},${dayOfBirth}`)
      return Math.floor((dateOfBirthday - today)/(24*3600000))
    },
    submit(){
      this.$emit('submit', {
        fullName:  `${this.lastName} ${this.firstName}`,
        dateOfBirth: {
          day: this.day[new Date(`${this.birthInfo}`).getDay()],
          date: new Date(`${this.birthInfo}`).getDate(),
          month: this.month[new Date(`${this.birthInfo}`).getMonth()],
          year: new Date(`${this.birthInfo}`).getFullYear()
        },
        randomColor: this.getRandomColor(),
        getRemainingDays: this.getRemainingDays()
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
