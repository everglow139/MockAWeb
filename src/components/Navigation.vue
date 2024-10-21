<template>
  <div class="navigation">
    <div class="nav-header">
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" to="/home">
            <img src="../assets/images/logo.png" alt="" />
          </router-link>
        </h1>
        <nav class="nav">
          <router-link to="/products">Products</router-link>
          <router-link to="/research">Research</router-link>
          <router-link to="/safety">Safety</router-link>
          <router-link to="/company">Company</router-link>
        </nav>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <button
              class="btn-danger"
              type="button"
              @click="toggleSearch"
            >
              Search
            </button>
          </form>
        </div>
        <transition name="fade">
          <div v-if="isSearchActive" class="search-overlay">
            <div class="search-box">
              <button class="close-btn" @click="toggleSearch">&times;</button>
              <form @submit.prevent="goSearch">
                <input
                  type="text"
                  id="autocomplete"
                  class="input-xxlarge"
                  v-model="keyword"
                  autofocus
                />
                <button class="sui-btn" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navshow: false,
      isSearchActive: false,
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      console.log('search');
      this.$router.push({ path: "/search", query: { keyword: this.keyword } });
      this.keyword = "";
      this.toggleSearch();
    },
    toggleSearch() {
      this.isSearchActive = !this.isSearchActive;
    },
  },
};
</script>


<style lang="less" scoped>
.navigation {
  background-color: black;
}

.nav-header {
  background-color: cadetblue;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 0 10px; /* 为内容提供一些内边距 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 添加阴影以提升层次感 */
}

.nav-content {
  background-color: #d1cfcf;
  padding-top: 8vh; /* 为头部高度留出空间 */
  min-height: calc(100vh - 8vh); /* 确保内容区域至少占据剩余的视口高度 */
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
}

.logoArea {
  .logo img {
    max-width: 100%;
    height: auto; /* 保持图片比例 */
  }
}

.nav {
  display: flex;
  flex-grow: 1;
  justify-content: center;

  a {
    color: #fff;
    font-size: 1.5rem; /* 使用rem单位，相对根元素字体大小 */
    margin: 0 15px;
    text-decoration: none;
    transition: color 0.3s; /* 平滑颜色变化 */

    &:hover,
    &:focus {
      color: rgb(90, 87, 87);
    }
  }
}

.searchArea {
  display: flex;
  align-items: center;
  width: 12vh; /* 默认宽度，足够显示搜索图标 */
  transition: width 0.3s; /* 平滑过渡效果 */

  .searchForm {
    display: flex;
    overflow: hidden;
    width: 100%;

    
    

    button {
      height: 32px;
      width: 68px;
      background-color: rgb(90, 87, 87);
      border: none;
      color: #fff;
      border-radius: 4px; /* 添加圆角 */
      cursor: pointer;
      transition: background-color 0.3s; /* 平滑背景颜色变化 */

      &:hover,
      &:focus {
        background-color: rgb(65, 62, 62);
      }
    }
  }
}
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 确保覆盖在导航栏之上 */
}

.search-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  width: 50%; /* 根据需要调整宽度 */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  background: none;
  border: none;
}

.input-xxlarge {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.sui-btn{
  width: 10%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: rgb(65, 62, 62);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #c9302c;
  }
}
.btn-danger {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: rgb(65, 62, 62);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #c9302c;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/* 媒体查询，针对不同屏幕尺寸进行样式调整 */
@media (max-width: 768px) {
  .nav-header {
    height: 10vh;
  }

  .nav-content {
    padding-top: 10vh; /* 为头部高度留出空间 */
    position: relative; /* 为.searchArea的绝对定位做准备 */
  }

  .bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .logoArea,
  .nav {
    width: 100%;
    margin: 10px 0;
  }

  .searchArea {
    position: absolute; /* 绝对定位，使其不占据布局空间 */
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%; /* 在小屏幕上，搜索区域宽度为100% */
    padding: 10px;
    z-index: 998; /* 确保搜索区域在内容上方 */
  }

  .searchArea.active {
    height: 50px; /* 根据需要调整高度 */
  }
}
</style>