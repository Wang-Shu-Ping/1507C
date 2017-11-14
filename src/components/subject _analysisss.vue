<template>
    <div class="subject">
       
        <div class="subject_table">
          <table class="table">
            <thead>
              <tr>
                <th>选考科目</th>
                  <th>高校数</th>
                  <th>专业（类）数</th>
                  <th>科目比例</th>
              </tr>
            </thead>
            <tbody class="table-container">
              <tr v-for="(item,index) in $store.state.school_major_obj" :key="index">  
                <td>{{item.subject}}</td>
                <td>{{item.collegesCount}}</td>
                <td>{{item.majorCount}}</td>
                <td>{{item.rate}}</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
</template>
       
           
<script>
export default {};
</script>
<style>
.table {
  width: 50%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.subject_table tr {
  height: 40px;
  color: #000;
}
.subject_table thead {
  background: #00a15c;
}
.subject_table tr th {
  width: 1%;
  color: #fff;
  text-align: center;
}
.subject_table tbody tr th {
  width: 145px;
  color: #000;
}
.table-container {
  height: 40px;
  line-height: 40px;
}
.table-container > tr > td {
  text-align: center;
  border: 1px solid #000;
}
</style>

