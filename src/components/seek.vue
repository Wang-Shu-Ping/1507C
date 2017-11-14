<template>
  <div>
      <input type="text" placeholder="请输入要搜索的高校名称" class="seek-text">
      <button class="seek-btn">检索</button>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.seek-text{
width: 40%;
height: 38px;
float: left;
border:2px solid rgba(0,161,92,1);
}
.seek-btn{
    width: 60px;
    height: 44px;
    color: #fff;
    border:none;
    float: left;
    background:rgba(0,161,92,1)
}

</style>
