<template>
  <div class="app full-height">
    <h1>{{ message }}</h1>
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Vue + Express 前后端分离脚手架——Dragon.G'
    }
  },
  route: {
    data({ to }) {
      console.log(this.message);
      this.getProfile();
    }
  },
  methods: {
    getProfile: function() {
      $.ajax({
        url: '/v1.0.0/user/profile',
        type: 'GET',
        dataType: 'json'
      }).done(function(response) {
        console.log("success");
        console.log(response);
      }).fail(function(response) {
        console.log("error");
        console.log(response);
      });
    }
  }
}
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
