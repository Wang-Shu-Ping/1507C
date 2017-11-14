<template>
  <tbody>
      <tr class="title_center">
          <th v-for="(item,index) in item_row" :key="index"><span v-if="index==0" class="add" @click="table_show">+</span>{{item}}</th>
      </tr>
      <tr>
          <td colspan="9">
              <table class="inner-table" v-show="active">
                  <thead class="head">
                      <tr>
                          <td>高校地区</td>
                          <td>高校名称</td>
                          <td>专业（类）</td>
                          <td>类中所含专业</td>
                          <td>选考科目范围</td>
                      </tr>
                      <tr v-for="(item,index) in item_table" :key="index">
                          <td>{{item.province}}</td>
                          <td>{{item.collegeName}}</td>
                          <td>{{item.majorName}}</td>
                          <td>{{item.remark.join('、')}}</td>
                          <td>{{item.subjectRangeNames.join(',')}}</td>
                      </tr>
                  </thead>
              </table>
          </td>
      </tr>
  </tbody>
</template>
<script>
    export default {
       props:['row'],
       data(){
           return {
               item_row:[],
               item_table:[],
               active:false
           }
       },
      
       created:function(){
           let len = this.row.length;
           this.item_row = this.row.slice(0,len-1);
           this.item_table = this.row[9];
           
           console.log(this.item_row)
       },
        methods:{
           table_show:function(){
              this.active= !this.active
           }
       }
    }
</script>
<style scoped>
.inner-table{
    width:100%;
    background: #f4f4f4;
    font-size:12px;
    border-collapse: collapse
}
tbody .title_center{
    border:1px solid #ccc;
    
}
tbody .title_center th{
    border-left:1px solid #ccc;
}
.title_center{
     text-align: center;
}
.head>tr>td{
    line-height:40px;
    padding: 5px 10px;
    text-align: center;
    border:1px solid #ccc;
}
.title_center th{
    border-collapse: collapse;
    position: relative;
   
}

.add{
     position: absolute; 
    top:12px;left:10px;
    width: 15px;
    height: 15px;
    color: #fff;
    background: rgba(0,100,6,1);
    text-align: center;
    line-height: 15px;
}
</style>
