<template>
        <div class="filter-box">
            <div class="selected-container">
                <div class="left-title ">已选条件：</div>
                <div class="right-area aa">
                    <p class="selected-item" v-if="selected_range_item !='不限'">{{selected_range_item}}<span class="clear-selected" @click="clearRange">×</span></p>
                    <p class="selected-item" v-if="selected_area_item !='不限'">{{selected_area_item}}<span class="clear-selected" @click="clearArea">×</span></p>
                </div>
            </div>
            <div class="container-box">
                <div class="major-range ">
                    <div class="left-title ">专业层次：</div>
                    <div class="right-area "></div>
                </div>
                <school-range :school-range-list="$store.state.school_range_obj"></school-range>
                <school-area :school-area-list="$store.state.school_area_obj"></school-area>
            </div>
             <p class="subject_title" >选考科目分析</p>
             <p class="subject_proportion">科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</p>
            <school-subject></school-subject>
            <school-subjectss></school-subjectss>
            <div class="school-name">
                <table-wrap :title="table_title">
                    <table-row v-for="(x,i) in table_list" :row="x" :key="i"></table-row>
                </table-wrap>
            </div>
        </div>
</template>
<script>
import axios from "../axios/axios";
import school_range from "../components/school_range";
import school_area from "../components/school_area";
import school_subject from "../components/subject _analysis";
import school_subjectss from "../components/subject _analysisss";
import table_wrap from "../components/table_wrap.vue";
import table_row from "../components/table_row.vue";
export default {
  //   name: "overall",
  data: function() {
    return {
      table_title: [],
      table_list: []
    };
  },
  components: {
    "school-range": school_range,
    "school-area": school_area,
    "school-subject": school_subject,
    "school-subjectss": school_subjectss,
    "table-wrap": table_wrap,
    "table-row": table_row
  },
  computed: {
    selected_range_item: function() {
      return this.$store.getters.selected_range;
    },
    selected_area_item: function() {
      return this.$store.getters.selected_area;
    }
  },

  created: function() {
    let vm = this;
    this.$http("src/data/school_range.json").then(function(res) {
      let range_data = res.data.list.map((val, index) => {
        return index == 0
          ? { value: val, selected: true }
          : { value: val, selected: false };
      });
      vm.$store.commit("update_range", range_data);
    });

    this.$http.get("src/data/school_area.json").then(function(res) {
      let area_data = res.data.list.map((val, index) => {
        return index == 0
          ? { value: val, selected: true }
          : { value: val, selected: false };
      });

      vm.$store.commit("update_area", area_data);
    });

    this.$http.get("src/data/major.json").then(function(res) {
      vm.$store.commit("update_major", res.data.result.analysisData);
      //   console.log(res.data.result.analysisData);
    });

    this.$http.get("src/data/overall.json").then(function(res) {
      vm.table_title = res.data.result.title;
      vm.table_list = res.data.result.rows;
    });
  },

  methods: {
    clearRange: function() {
      this.$store.commit("clear_range");
    },
    clearArea: function() {
      this.$store.commit("clear_area");
    }
  }
};
</script>
<style >
.selected-container {
  line-height: 40px;
  padding: 5px 0;
  text-indent: 10px;
}
.left-title,
.right-area {
  float: left;
}
.container-box {
  border: 1px solid #ccc;
  padding: 10px;
}
.selected-container,
.major-range {
  overflow: hidden;
}
.selected-item {
  margin: 0;
  display: inline-block;
  border: 1px solid #ccc;
  line-height: 30px;
  padding: 2px 8px;
}
.aa {
  line-height: 50px;
}
.filter-item {
  display: inline-block;
  min-width: 70px;
  padding: 0 5px;
  height: 35px;
  color: #333333;
  text-align: center;
  line-height: 35px;
  margin: 5px;
  cursor: pointer;
}
.filter-item.selected {
  background: rgba(0, 160, 92, 1);
  color: #fff;
}
.filter-item:hover {
  background: rgba(0, 160, 92, 1);
  color: #fff;
}
.left-title {
  margin: 5px 0;
  text-indent: 10px;
  width: 10%;
}
.right-area {
  width: 90%;
}
.clear-selected {
  cursor: pointer;
}
.subject_title {
  height: 35px;
  line-height: 35px;
}

.subject_proportion {
  font-size: 14px;
  color: red;
  border-top: 1px solid #ccc;
  line-height: 35px;
}
.school-name table {
  width: 100%;
  line-height: 40px;
  border-collapse: collapse;
}
.title_wrap {
  line-height: 40px;
  color: #fff;
  background: #00a15c;
}

.sschool-name table > tr > th {
  text-align: center;
}
</style>


