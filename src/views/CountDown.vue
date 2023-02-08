<template>
  <div class="countdown">
    <div class="custom">
      <div class="function">
        <el-input class="input"
            v-model="input"
            size="small"
            placeholder="请输入主题/标签"

        />
        <el-select v-model="form.type" placeholder="请选择类型" class="select" >
          <el-option  v-for="(typeOptionItem,typeOptionIndex) in typeOption"
                      :key="typeOptionIndex"
                      :label="typeOptionItem.label"
                      :value="typeOptionItem.value" />
        </el-select>
        <el-button type="primary" class="search" @click="searchCountDown()">搜索</el-button>
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
                <div>花费:{{item.money}}</div>
              </div>
              <div class="bottom">
                <div>{{item.date}}</div>
                <div>{{item.day}}天</div>
              </div>
            </div>
            <div class="label">
              <el-tag class="tag" v-for="(labelItem,labelIndex) in item.label" :key="labelIndex">{{ labelItem }}</el-tag>
            </div>
          </div>
        </div>
      </div>
      <el-pagination
          v-show="data.total > 0"
          :total="data.total"
          layout="prev, pager, next, jumper"
          :page-size="data.pageSize"
          @pagination="handleQuery()"
      />
    </div>
    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisible" :title="countDownTitle">
      <el-form :model="form" class="form">
        <el-form-item label="主题" :label-width="formLabelWidth">
          <el-input v-model="form.subject" class="input"/>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择类型">
            <el-option  v-for="(typeOptionItem,typeOptionIndex) in typeOption"
                        :key="typeOptionIndex"
                        :label="typeOptionItem.label"
                        :value="typeOptionItem.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="花费" :label-width="formLabelWidth">
          <el-input v-model="form.money" class="input" />
        </el-form-item>
        <el-form-item  label="日期" :label-width="formLabelWidth">
          <el-date-picker
              v-model="input"
              type="date"
              placeholder="请选择日期"
          />
        </el-form-item>
        <el-form-item label="标签" :label-width="formLabelWidth">
          <div class="label">
            <el-tag v-for="(labelItem,labelIndex) in form.label" :key="labelIndex"
                    class="tag"
                    closable
                    :disable-transitions="false"
                    @close="tagHandleClose(labelIndex)">
              {{ labelItem }}
            </el-tag>
            <el-input
                v-if="tag.inputVisible"
                ref="InputRef"
                v-model="tag.inputValue"
                class="input"
                size="small"
                @keyup.enter="tagHandleInputConfirm()"
                @blur="tagHandleInputConfirm()"
            />
            <el-button v-else class="button-new-tag ml-1" size="small" @click="tagShowInput()">
              + 新标签
            </el-button>
          </div>
        </el-form-item>
<!--        <el-form-item  label="提醒" :label-width="formLabelWidth">-->
<!--          <div class="remind">-->
<!--            <el-button type="primary" class="add">新增</el-button>-->
<!--            <div v-for="(item,index) in list" :key="index" class="single">-->
<!--              <el-input v-model="form.name" class="input"/>-->
<!--              <el-button type="danger" class="delete">删除</el-button>-->
<!--            </div>-->
<!--          </div>-->

<!--        </el-form-item>-->
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
import {countDownAdd} from "../api/countDown"
export default {
  data(){
    return{
      typeOption:[
        {
          value:"11",
          label:"11"
        },
      ],
      tag:{
        inputVisible:false,
        inputValue:''
      },
      data:{
        total:10,
        pageSize:3,
      },
      dialogFormVisible:false,
      countDownTitle:'标题',
      formLabelWidth:'100px',
      input:'',
      form:{
        subject: '',
        type: '',
        money: undefined,
        date: '',
        label: ["标签1","标签3","标签2"]
      },
      list:[
        {
          subject: "中秋节",
          type: "法定节假日",
          date:"2022年1月1日",
          day:"1",
          money:"1.00",
          label:["标签1","标签2","标签2"]
        },
        {
          subject: "国庆节",
          type: "11",
          date:"2222年11月11日",
          day:"1",
          money:"100",
          label:["标签1","标签2"]
        },
        {
          subject: "去XX的日子",
          type: "自定义",
          date:"2000年11月11日",
          day:"100",
          money:"100",
          label:["标签1","标签2","标签2","标签2","标签2","标签2"]
        },
        {
          subject: "倒计时的日子",
          type: "倒计时",
          date:"2000年11月11日",
          day:"54",
          money:"1541224",
          label:["标签1","标签2"]
        }
      ]
    }
  },
  methods:{
    //搜索倒计时
    searchCountDown(){
      countDownAdd({
        "subject":"11",
        "type":"1111",
        "date":"2020-11-11"
      }).then((res) => {
      });
    },
    //添加倒计时
    addCountDown(){
      this.dialogFormVisible=true;
    },
    //修改倒计时
    modifyCountDown(){
      this.dialogFormVisible=true;
    },
    //分页查询
    handleQuery(){

    },

    //tag关闭事件
    tagHandleClose(labelIndex){
      this.form.label.splice(labelIndex,1);
    },

    //tag显示输入框
    tagShowInput(){
      this.tag.inputVisible = true
    },
    //tag输入完毕
    tagHandleInputConfirm(){
      if (this.tag.inputValue) {
        this.form.label.push(this.tag.inputValue)
      }
      this.tag.inputVisible = false
      this.tag.inputValue= ''
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
        width: 150px;
      }
      .select{
        margin-left: 10px;
        width: 150px;
      }
      .search{
        margin-left: 10px;
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
            .input{
              width: 100px;
            }
          }

        }
      }

    }
  }
  .dialog{
    //width: 200px;
    .form{
      .input{
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
    //margin-top: 10px;
  }
  .single{
    display: flex;
    flex-direction: row;
    .input{
      margin-top: 10px;
      height: 30px;
    }
    .delete{
      width: 50px;
      margin-top: 10px;
      margin-left: 5px;
    }
  }
}

</style>