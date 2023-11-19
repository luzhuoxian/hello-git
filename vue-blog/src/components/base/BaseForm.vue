<template>
  <div>
    <el-form
      :model="form"
      ref="elForm"
      status-icon
      :validate-on-rule-change="false"
    >
      <el-form-item
        v-for="item in formData"
        :key="item.query"
        :label="item.label"
        label-width="100px"
        :rules="validates[item['query']]"
        :prop="item.query"
      >
        <el-input
          v-model="form[item['query']]"
          :type="item.type"
          :name="item['query']"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div style="text-align: end">
        <a href="#" v-show="type === 'login'" @click="ChangeType('register')"
          >没有账号，前往注册</a
        ><a href="#" v-show="type === 'register'" @click="ChangeType('login')"
          >没有账号，前往注册</a
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import VALIDATE_DATE from "@/config/validate.config";
import FORM_DATA from '@/config/form.config'
export default {
  name: "BaseForm",
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      form: {},

    };
  },
  watch: {
    type() {
      this.initForm()
    },
  },
  created() {},
  mounted() {},
  methods: {
    //点击事件 => 触发vuex下modal模块的open => 修改type，切换登录/注册状态 => 展示模态框
    ChangeType(type) {
      this.$store.dispatch("modal/open", type);
    },
    initForm () {
      //重置表单字段 以及校验状态
      this.form = {}
      this.resetForm()
    },
    resetForm () {
      this.$refs['elForm'].resetFields()
    }
  },
  computed:{
    formData () {
      return FORM_DATA[this.type]
    },
    validates () {
      return VALIDATE_DATE
    }
  }
};
</script>

<style lang="scss" scoped>
</style>