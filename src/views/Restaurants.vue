<template>
  <div class="home"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "guess-number",
  data: function() {
    return {
      name: "",
      nAttempts: 0,
      attemptNumber: 0,
      feedback: "",
      gameover: false
    };
  },
  created() {
    // Trigger an action to mutate a new generated number
    this.$store.dispatch("generate_number");
  },
  computed: {
    // An abbreviated form for aggregate all the store getters as computed propeties
    ...mapGetters(["getGeneratedNumber", "getMaxAttempts", "getMaxLimit"])
  },
  methods: {
    // method for handling an users's attempt
    attempt() {
      // Increment attempt
      this.nAttempts++;
      // Verifiy it the attempt is the number to guess
      if (this.getGeneratedNumber > this.attemptNumber) {
        this.feedback = "too low!";
      } else if (this.getGeneratedNumber < this.attemptNumber) {
        this.feedback = "too high!";
      } else {
        this.feedback = "you won!";
        // Mutate the score
        this.$store.dispatch("set_score", {
          name: this.name,
          attempts: this.nAttempts
        });
        this.gameover = true;
      }
      // If the users reaches the attempt's limit
      if (this.nAttempts == this.getMaxAttempts) {
        this.gameover = true;
        this.feedback += `<br>Reached the limit of attempts ${this.getMaxAttempts}`;
      }
    }
  }
};
</script>
