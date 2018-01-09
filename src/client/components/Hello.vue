<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Author: {{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorldView",
  data () {
    return {
      //注意：更改此行不会导致热重载更改，因为重载组件保留了其当前
      //状态，并且正在修改其初始状态。
      msg: 'Hello World!',
      name: 'Dragon-G',
    }
  },
  route: {
    data({ to }) {
      console.log('============test');
      console.log(name);
      console.log(msg);
      console.log('Hello world');
      this.getProfile()
    }
  },
  methods: {
    getProfile() {
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
