<template>
  <header>
    <div><h5>added - {{total}}</h5></div>
    <div class="about">
      <strong>{{nextYear}}</strong>
      <span>BirthDays</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props:{
    total : Number
  },
  computed:{
    nextYear(){
      return new Date().getFullYear()+1
    }
  }
}
</script>

<style scoped>
  header{
    padding-bottom: 20px;
  }
  header div h5{
    padding: 5px 10px;
    color: #fff;
    background-color: #333030;
    font-size: 15px;
    width: 100px;
    text-align: center;
  }
  header div strong{
    font-size: 30px;
    color: #333030;
  }
  header div span{
    font-size: 20px;
    color: #333030;
  }
  .about{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin-bottom: 1px;
    gap: 12px;
  }
</style>
