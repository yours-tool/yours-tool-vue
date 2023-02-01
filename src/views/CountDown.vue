<template>
  <div class="countdown">
    <div class="custom">
      <div class="function">
        <el-input class="input"
            v-model="input"
            size="small"
            placeholder="按标签搜索"
            suffix-icon="Search"
        />
        <el-button type="primary" >新增</el-button>
      </div>
      <div class="card">
        <div v-for="(item,index) in list" :key="index" class="single">
          <div class="header">
            <span>{{item.name}}</span>
            <div>
              <el-button class="button" size="small" type="primary" >编辑</el-button>
              <el-button class="button" size="small" type="danger" >删除</el-button>
            </div>
          </div>
          <div>
            <div>
              <div>类型:{{item.name}}</div>
              <div>内容:{{item.content}}</div>
              <div>距离{{item.name}}XXX日子还有{{item.name}}天</div>
              <div>预计花费:{{item.name}}</div>
            </div>
            <div>
              <div v-for="(item,index) in list" :key="index"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisible" :title="countDownTitle">
      <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="money" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item  label="Zones" :label-width="formLabelWidth">
          <el-date-picker
              v-model="input"
              type="date"
              placeholder="Pick a day"
          />
        </el-form-item>
        <el-form-item  label="Zones" :label-width="formLabelWidth">
          <el-button>新增</el-button>
          <div v-for="(item,index) in list" :key="index">
            <el-input v-model="form.name" autocomplete="off" />
            <el-button>删除</el-button>
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
const dialogFormVisible = ref(true)
const countDownTitle = ref('true')
const formLabelWidth = '140px'
const input = ref('')
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
let list = [
  {
    name: "测试11",
    content: "11",
    type:"1",
    label:["标签1","标签2"]
  },
  {
    name: "测试22",
    content: "22",
    type:"2",
    label:["标签3","标签4"]
  },
  {
    name: "测试22",
    content: "22",
    type:"1",
    label:["标签3","标签4"]
  },
  {
    name: "测试22",
    content: "22",
    type:"1",
    label:["标签3","标签4"]
  }
]
</script>

<style lang="less" scoped>
.countdown {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  /*background-color: rgb(60, 63, 65);*/
  .custom{
    width: 400px;
    .function{
      margin: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .input{
        width: 300px;
      }
    }

    .card{
      width: 400px;
      .single{
        margin: 10px;
        border: 1px solid rgb(177, 179, 184);
        border-radius: 5px;
        .header{
          margin: 5px 10px 5px 10px;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }

    }
  }
}

</style>