<template>
  <div class="container">
    <div v-for="(char, index) in text" :key="index" class="char" :style="{animationDelay: index * 0.5 + 's'}">
      {{ char }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpText",
  data() {
    return {
      text: "包安全的".split("")
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.char {
  font-size: 2rem;
  opacity: 0;
  animation: appear 1s forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>