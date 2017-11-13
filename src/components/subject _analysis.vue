<template>
     <div class="subject">
         <p class="subject_title" >选考科目分析</p>
         <p class="subject_proportion">科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</p>
        <div class="subject_table">
            <table class="table">
                <thead>
                       <tr>
                           <td>选考科目</td>
                           <td>选考科目</td>
                           <td>选考科目</td>
                           <td>选考科目</td>
                           <td>选考科目</td>
                           <td>选考科目</td>
                           <td>选考科目</td>
                           <td>选考科目</td>
                       </tr>
                </thead>
            </table>
        </div>
              <table class="table table-hover table-bordered ">
           <thead>
             
           </thead>
           <tbody>

           </tbody>
       </table>
     </div>
</template>
<script>
export default {};
</script>
<style>

.subject_proportion {
  font-size: 14px;
  color: red;
  border-top: 1px solid #ccc;
  line-height: 35px;
}
.subject_title {
    height: 35px;
    line-height: 35px;
}
.subject_form {
  border: 1px solid #ccc;
}
.subject_table tr {
  height: 50px;
  color: #00a15c;
}
.subject_table thead {
  background: #00a15c;
}
.subject_table tr td {
  width: 145px;
  color: #fff;
  text-align: center;
}
.subject_table tbody tr td {
  border: 1px solid #ccc;
  width: 145px;
  color: #000;
}
</style>

