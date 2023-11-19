<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="isShow"
      :width="width"
      :before-close="close"
    >
      <BaseForm v-if="hasForm" :type="type"  ref="form" />
      <span
        slot="footer"
        class="dialog-footer"
        v-for="btn in btns"
        :key="btn.targetName"
      >
        <el-button @click="handlerBtn(btn.targetName, btn.isSubmit)">{{
          btn.name
        }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import MODAL_DATA from "@/config/modal.config";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("modal");
import BaseForm from './BaseForm'
export default {
  name: "VueBlogBaseModal",
  components: {
    BaseForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isShow", "type"]),
    title() {
      return MODAL_DATA[this.type]?.title ?? "默认";
    },
    width() {
      return MODAL_DATA[this.type]?.width ?? "60%";
    },
    hasForm() {
      return MODAL_DATA[this.type]?.formType;
    },
    btns() {
      return MODAL_DATA[this.type]?.btns ?? [
          {
            targetName: "close",
            name: "取消",
          },
          {
            targetName: "confirm",
            name: "提交",
            isSubmit: true,
          },
        ]
    },
  },
  methods: {
    ...mapActions(["close", "confirm", "open"]),
    handlerBtn(action, isSubmit) {
      //如果点击按钮带有isSubmit则为提交，验证账号密码格式
      if (isSubmit) {
        this.submitForm();
        return;
      }
      //点击取消按钮or登录注册校验成功 改变vuex中modal的isShow状态 关闭模态框
      this[action] && this[action]();
    },
    submitForm() {
      this.$refs["form"].$refs["elForm"].validate((valid) => {
        if (valid) {
          console.log("提交成功");
        } else {
          console.log("提交失败");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>