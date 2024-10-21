<template>
    <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4>关于我们</h4>
        <ul>
          <li><a href="#">公司简介</a></li>
          <li><a href="#">团队成员</a></li>
          <li><a href="#">联系方式</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4>服务与支持</h4>
        <ul>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">服务条款</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4>社交媒体</h4>
        <ul class="social-icons">
          <li><a href="#"><i class="fa fa-facebook"></i> Facebook</a></li>
          <li><a href="#"><i class="fa fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i class="fa fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">
      <p>&copy;. 版权所有。</p>
    </div>
  </div>
</footer>
</template>

<script>
export default {
    name: 'MyFooter'
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.container {
  width: 90%;
  margin: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-4 {
  flex: 0 0 30%;
  max-width: 30%;
  padding: 0 15px;
}

h4 {
  margin-top: 0;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li a {
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
}

.social-icons i {
  margin-right: 5px;
}

.footer-copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
}

@media (max-width: 768px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>