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
    }
  },
  computed:{
    someOfBirth(){
      return this.Births.length;
    }
  }
}
</script>

<style scoped>
</style>






