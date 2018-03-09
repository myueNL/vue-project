<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="999">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  }
}
</script>
<style lang="css" scoped>
  .mui-numbox{
      height: 30px;
  }
</style>