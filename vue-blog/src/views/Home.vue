<template>
  <div>
    <el-container class="blog-container">
      <el-header height="10vh" class="blog-header">
        <el-row type="flex">
          <el-col :span="4" :md="4" :xs="24" :sm="12">
            <div class="blog-logo">
              <el-image
                :src="require('../assets/img/logo.png')"
                fit="cover"
                class="blog-logo--pic"
              ></el-image>
            </div>
          </el-col>
          <el-col :span="16" class="hidden-sm-and-down">
            <el-menu
              class="blog-menu"
              mode="horizontal"
              router
              background-color="transparent"
              text-color="#fff"
              active-text-color="#368"
              style="border-bottom: none"
            >
              <el-menu-item index="/article/list">articlelist</el-menu-item>
              <el-menu-item index="/article/:id">article</el-menu-item>
              <el-menu-item index="/column">column</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="4" :md="4" :sm="12" class="hidden-xs-only">
            <div class="blog-header--login">
              <el-button type="success" size="small" round @click="refreshModal('login')">登录</el-button>
               <el-button type="primary" size="small" round @click="refreshModal('register')">注册</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-container class="blog--middle">
        <el-aside class="blog-aside">Aside</el-aside>
        <el-main class="blog-main"><router-view></router-view></el-main>
      </el-container>
      <el-footer height="10vh" class="blog-footer">尾</el-footer>
    </el-container>

    <BaseModal></BaseModal>

  </div>
</template>

<script>
import BaseModal from "@/components/base/BaseModal.vue";

export default {
  name: "HomeView",
  components: {
    BaseModal,
  },
  data() {
    return {};
  },
  methods: {
    //改变vuex中模块modal的type(登录or注册)
    refreshModal(type) {
      this.$store.dispatch("modal/open", type);
    },
  },
};
</script>
<style lang="stylus">
.el-menu-item:hover {
  background-color: #edc3f3 !important;
}

.blog-container {
  overflow: hidden;
  height: 100%;
}

.blog-header {
  background-color: #e1e6af;
}

.blog-container .blog-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 6px;
  margin-left: 20px;
  height: auto;
  line-height: auto;
  background-color: #f5bd59;
}

.blog-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-logo--pic {
  margin-top: 6px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.blog-header--login {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
}

.blog-header--login span {
  cursor: pointer;
}

.blog--middle {
  height: 80vh;
}

.blog-aside {
  background-color: #368;
}

.blog-footer {
  background-color: #ccc;
}
</style>

