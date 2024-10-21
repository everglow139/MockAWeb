<template>
<section class="product-showcase">
  <div class="container">
    <h2>产品展示</h2>
    <ul class="product-list">
      <li>产品名称一</li>
      <li>产品名称二</li>
      <li>产品名称三</li>
      <li>产品名称四</li>
      <li>产品名称五</li>
    </ul>
    
  </div>
  <div class="container">
    <h2>产品展示</h2>
    <ul class="product-list">
      <li>产品名称一</li>
      <li>产品名称二</li>
      <li>产品名称三</li>
      <li>产品名称四</li>
      <li>产品名称五</li>
    </ul>
    
  </div>
  <div class="container">
    <h2>产品展示</h2>
    <ul class="product-list">
      <li>产品名称一</li>
      <li>产品名称二</li>
      <li>产品名称三</li>
      <li>产品名称四</li>
      <li>产品名称五</li>
    </ul>
    
  </div>
</section>
</template>

<script>
export default {
    name: 'MyProd',
    
}
</script>

<style scoped>
.product-showcase {
  
  display: flex;
  flex-wrap: wrap;
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.container {
  flex: 0 0 30%;
  max-width: 30%;
  padding: 0 15px;
}

.product-showcase h2 {
  margin-top: 0;
  margin-bottom: 20px;
  
}

.product-list {
  list-style: none;
  padding: 0;
  line-height: 1.5;
}

.product-list li {
  margin-bottom: 10px;
  font-size: 1rem; /* Adjust the size as needed */
  cursor: pointer;
  transition: color 0.3s;
}

.product-list li:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
}
</style>