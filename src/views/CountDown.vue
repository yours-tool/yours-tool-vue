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
        <el-button type="primary" @click="addCountDown()">新增</el-button>
      </div>
      <div class="card">
        <div v-for="(item,index) in list" :key="index" class="single">
          <div class="header">
            <span class="subject">{{item.subject}}</span>
            <div class="button">
              <el-button class="button" size="small" type="primary" @click="modifyCountDown()">编辑</el-button>
              <el-button class="button" size="small" type="danger" >删除</el-button>
            </div>
          </div>
          <div class="content">
            <div class="remark" >
              <div class="top">
                <div>{{item.type}}</div>
                <div>{{item.date}}</div>
              </div>
              <div class="bottom">
                <div>{{item.day}}天</div>
                <div>预计花费:{{item.money}}</div>
              </div>
            </div>
            <div class="label">
              <el-tag class="tag" v-for="(labelItem,labelIndex) in item.label" :key="labelIndex">{{ labelItem }}</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisible" :title="countDownTitle" class="dialog" width="30%">
      <el-form :model="form" class="form">
        <el-form-item label="主题" :label-width="formLabelWidth">
          <el-input v-model="form.subject" class="input" />
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择类型">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="money" :label-width="formLabelWidth">
          <el-input v-model="form.money" class="input" />
        </el-form-item>
        <el-form-item  label="日期" :label-width="formLabelWidth">
          <el-date-picker
              v-model="input"
              type="date"
              placeholder="Pick a day"
          />
        </el-form-item>
        <el-form-item  label="提醒" :label-width="formLabelWidth">
          <div class="remind">
            <el-button type="primary" class="add">新增</el-button>
            <div v-for="(item,index) in list" :key="index" class="single">
              <el-input v-model="form.name" autocomplete="off" />
              <el-button>删除</el-button>
            </div>
          </div>

        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data(){
    return{
      dialogFormVisible:false,
      countDownTitle:'标题',
      formLabelWidth:'140px',
      input:'',
      form:{
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      list:[
        {
          subject: "测试11",
          type: "11",
          date:"1",
          day:"1",
          money:"1",
          label:["标签1","标签2","标签2"]
        },
        {
          subject: "测试11",
          type: "11",
          date:"1",
          day:"1",
          money:"1",
          label:["标签1","标签2"]
        },
        {
          subject: "测试11",
          type: "11",
          date:"1",
          day:"1",
          money:"1",
          label:["标签1","标签2","标签2","标签2","标签2","标签2"]
        },
        {
          subject: "测试11",
          type: "11",
          date:"1",
          day:"1",
          money:"1",
          label:["标签1","标签2"]
        }
      ]
    }
  },
  methods:{
    //添加倒计时
    addCountDown(){
      this.dialogFormVisible=true;
    },
    //修改倒计时
    modifyCountDown(){
      this.dialogFormVisible=true;
    }
  }
}
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
          .button{
            margin-top: 3px;
          }
          .subject{
            text-shadow: 1px 0px 3px #98650a, 2px 1px 3px #33f5d7, -2px 0px 7px #cf1ee3;
            font-size: 18px;
            color: #1673c7;
          }
        }
        .content{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .remark{
            display: flex;
            flex-direction: column;
            //align-items: flex-start;
            margin: 10px 20px 10px 20px;
            width: 200px;
            text-align: left;
            .top{
              display: flex;
              flex-direction: row;
              //justify-content: flex-start;
              >div{
                width: 100px;
              }
            }
            .bottom{
              display: flex;
              flex-direction: row;
              //justify-content: flex-start;
              margin-top: 10px;
              >div{
                width: 100px;
              }
            }
          }
          .label{
            margin: 10px 10px 10px 0px;
            width: 180px;
            .tag{
              margin-left: 5px;
              margin-top: 5px;
            }
          }
        }
      }

    }
  }
  .dialog{

    .form{
      .input{
        width: 30%;
      }
    }
  }

}

.remind{
  display: flex;
  flex-direction: column;
  .add{
    width: 50px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .single{
    display: flex;
    flex-direction: row;
  }
}

</style>