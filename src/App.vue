<template>
  <main>
    <Header :totalOfBirth="someOfBirth" />
    <Form @addBirthDay="addToBirthDayList" />
    <Birth :items="Births" />
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
</style>






