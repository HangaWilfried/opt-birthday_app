<template>
  <main>
    <Header :total="countBirthdays" />
    <Form @submit="addNewBirthday" />
    <section>
      <template v-for="(birthday, index) in birthdays" :key="index" v-bind:style="{backgroundColor: birthday.randomColor, color: '#fff'}">
        <Birth :fullName="birthday.fullName" :remaining="birthday.getRemainingDays" :date="birthday.dateOfBirth.date" :month="birthday.dateOfBirth.month" @remove="deleteBirthday(index)"/>
      </template>
    </section>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Birth from "./components/Birth.vue";
export default {
  name: "App",
  components: {
    Header,
    Form,
    Birth,
  },
  data() {
    return {
      birthdays: []
    }
  },
  methods: {
    addNewBirthday(obj) {
      let haveBeenAdded = false;
      haveBeenAdded = this.birthdays.some(item => item.fullName === obj.fullName)
      if( haveBeenAdded === false){
        this.birthdays.push(obj);
      }
      else{
        alert('deja renseigne')
      }
      localStorage.setItem('value', JSON.stringify(this.birthdays))
    },
    deleteBirthday(index) {
      this.birthdays.splice(index, 1);
      localStorage.setItem('value',JSON.stringify(this.birthdays))
    }
  },
  computed:{
    countBirthdays(){
      return this.birthdays.length;
    }
  },
  created(){
    if(localStorage.getItem('value'))
    this.birthdays = JSON.parse(localStorage.getItem('value'))
  }
}
</script>

<style scoped>
  section{
    display: block;
  }
  article{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin-bottom: 1px;
  }
  @media only screen and (min-width: 925px) {
    section{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 2px;
      padding: 30px;
      justify-content: space-between;
    }
    article{
      display: block;
      margin: 2px;
      padding: 20px;
      gap: 10px 50px;
    }
  }
</style>
