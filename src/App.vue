<template>
  <main>
    <Header :totalOfBirth="someOfBirth" />
    <Form @addBirthDay="addToBirthDayList" />
    <section>
      <article v-for="(item, index) in Births" :key="index" v-bind:style="{backgroundColor: item.randColor, color: '#fff'}">
        <Birth :items="Births" :index="index" :lastname="item.lastname"
        :firstname="item.firstname" :deadline="item.deadline" :date="item.birth.date" :month="item.birth.month"/>
      </article>
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
      Births: []
    }
  },
  methods: {
    addToBirthDayList(obj) {
      this.Births.push(obj);
      console.log(this.Births);
      localStorage.setItem('value', JSON.stringify(this.Births))
    }
  },
  computed:{
    someOfBirth(){
      return this.Births.length;
    }
  },
  created(){
    if(localStorage.getItem('value'))
    this.Births = JSON.parse(localStorage.getItem('value'))
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