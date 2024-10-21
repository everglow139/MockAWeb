<template>
  <div class="company-introduction">
    <div class="header">
      <h1>Welcome to Our Company</h1>
    </div>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
      </p>
      <p>
        Curabitur tempus. Vestibulum in libero sit amet ligula placerat ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Suspendisse potenti.
      </p>
      <p>
        Aliquam erat volutpat. Nulla facilisi. Sed neque. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyIntroduction"
};
</script>

<style scoped>
.company-introduction {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.content p {
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
}
</style>