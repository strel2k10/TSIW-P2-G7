<template>
  <v-app>
    <v-content>
      <HelloWorld />
    </v-content>

    <div id="app">
      <v-toolbar
        style="font-size:1vw"
        id="toolbar"
        width="auto"
        height="60%"
        dense
        floating
      >
        <v-text-field
          hide-details
          prepend-icon="search"
          single-line
        ></v-text-field>

        <v-btn icon>
          <v-icon
            src="https://cdn.jsdelivr.net/npm/vuetify@2.1.14/dist/vuetify.min.js"
            >my_location</v-icon
          >
        </v-btn>
        <v-btn rounded outlined small color="grey">Populares</v-btn>&nbsp;
        <v-btn rounded outlined small color="grey">Destaques</v-btn>&nbsp;
        <v-btn rounded outlined small color="grey">Fast Food</v-btn>&nbsp;
        <v-btn rounded outlined small color="grey">Vegan</v-btn>&nbsp;
        <v-btn rounded outlined small color="grey">Vegetariano</v-btn>&nbsp;
        <v-btn rounded outlined small color="grey">Pastelaria</v-btn>&nbsp;
        <v-btn rounded outlined small color="grey">Tudo</v-btn>&nbsp;
        <v-btn color="#FFE138" depressed fab x-small dark>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  },

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
