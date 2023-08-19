<template>
  <div class="okarin">
    <div class="content-box">
      <poem />
      <web-set :webSet="webSetArr" />
      <back-to-top />

      <div class="footer">
        MIT Licensed | Copyright © 2022-present
        <a href="https://github.com/Okarin1/web-project" target="_blank">@Okarin</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Poem from "./components/Poem.vue";
import WebSet from "./components/WebSet.vue";
import BackToTop from "./components/BackToTop.vue"
import { getWebSet, webObjInterface } from "./common/webSet";
import { ref } from 'vue'
import {getWebInfo} from "./service/api/index"

export default {
  name: "App",
  components: {
    WebSet,
    Poem,
    BackToTop

  },
  async created() {
    try {
      let data:any = await getWebInfo()
      console.log(data)
      data.result.forEach((opt) => {
      this.webSetArr.push(getWebSet(opt))
      })
    } catch (error) {
      console.log(error)
    }
    
    
    

    // fetch("/web.json").then((opt) => {
    //   return opt.json()
    // }).then((res) => {
    //   data = res
    //   data.forEach((opt) => {
    //   this.webSetArr.push(getWebSet(opt));
    // });
    // })
      

  },
  setup() {
    const webSetArr = ref<webObjInterface[]>([])
    return {
      webSetArr
    }
  },

};
</script>

<style lang="less">
@import "assets/css/base.css";
@import "assets/css/okarin.less";
</style>
