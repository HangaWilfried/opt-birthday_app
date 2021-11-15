<template>
  <div class="info">
    <p class="important">{{fullName}}</p>
    <p><span class="next">next Birth day:</span> <span class="important">{{`${date} ${month} ${new Date().getFullYear()+1}`}}</span></p>
    <p class="important">less than {{remaining}} Days.</p>
  </div>
  <div>
    <p class="delete"><span @click="$emit('remove')">x</span></p>
  </div>
</template>

<script>
export default {
  name: 'Birth',
  props:['fullName','remaining','date','month'],
  emits:['remove']
}
</script>

<style scoped>
  .info{
    padding: 20px;
    box-shadow: 1px 1px 10px #000;
  }
  .important{
    padding: 10px 7px 5px 7px;
    color: #000;
    background-color: #fff;
    border-radius: 5px;
    font-size: 15px;
    text-align: center;
  }
  .delete span{
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
  }
  .delete span:hover{
    cursor: pointer;
  }
</style>
