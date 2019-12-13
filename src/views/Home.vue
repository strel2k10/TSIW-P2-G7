<template>
  <div class="home">
    <img alt="francesinha" src="'../assets/francesinha.jpg'" />
    <HelloWorld msg="francesinha" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
