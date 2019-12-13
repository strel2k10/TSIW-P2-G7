<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in- new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>

    <div id="app">
      <v-toolbar style="font-size:1vw" id="toolbar" width="auto" height="60%" dense floating>
        <v-text-field hide-details prepend-icon="search" single-line></v-text-field>

        <v-btn icon>
          <v-icon src='https://cdn.jsdelivr.net/npm/vuetify@2.1.14/dist/vuetify.min.js'>my_location</v-icon>
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

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
