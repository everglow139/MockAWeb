<template>
  <div>
    <el-carousel :interval="5000" arrow="always" height="700px">
      <el-carousel-item v-for="item in imgURL" :key="item.id">
        <router-link :to="{path: item.path}">
          <img :src="item.imgfrom" alt="" />
          <h1>{{ item.content }}</h1>
        </router-link>
      </el-carousel-item>
      <el-carousel-item class="swiper-text">
        <h2>Start from here</h2>
        <input type="text" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Swiper from "swiper";
import { nanoid } from "nanoid";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.webp";
import img3 from "@/assets/images/img3.png";
export default {
  name: "MyHeader",
  mounted() {
    const swiper = new Swiper(".swiper-container", {
      // 改变swiper样式时，自动初始化swiper
      observeParents: true,
      loop: true,
      // autoplay: {
      //     delay: 2000,
      //     disableOnInteraction: false
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  data() {
    return {
      imgURL: [
        {
          id: nanoid(),
          imgfrom: img1,
          content: "This is the first slide",
          path: "/Talking"
        },
        {
          id: nanoid(),
          imgfrom: img2,
          content: "This is the second slide",
          path: "/Talking"
        },
        {
          id: nanoid(),
          imgfrom: img3,
          content: "This is the third slide",
          path: "/Talking"
        },
      ],
    };
  },
  methods: {
    checkRe() {
      console.log(imgURL[0].imgfrom);
    },
  },
};
</script>

<style scoped>
/* .swiper-container {
  margin-top: 10vh;
}
.swiper-text {
  position: absolute;
  top: 40%;
  left: 47%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 2px #000;
}

.swiper-input{
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  border: 2px solid #ccc;
}
.swiper-input input{

  padding: 20px;
  font-size: 24px;
  border: 2px solid #ccc;
  outline: none;
  background-color: #fff;
  text-align: center;
  color: #333;
  font-weight: bold;
  border-radius: 5px;
}
---------------------------------------------

.swiper-text :not(.swiper-slide)
.swiper-slide :hover{
    cursor: pointer;
    width: 1210px;
    height: 610px;
    transition: all 0.3s linear;
 }
  */
.el-carousel__item h3 {
  color: #475669;
  font-size: 1.5vw; /* 使用视口宽度的相对单位 */
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  z-index: 999;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 3vw; /* 使用视口宽度的相对单位 */
  font-weight: bold;
  text-shadow: 2px 2px 2px #000;
}
.el-carousel__item {
  width: 100%;
  height: 100%;
  border-radius: 2%;
}
.el-carousel {
  margin: 8vh auto; /* 使用视口高度的相对单位 */
  width: 100%; /* 调整为百分比，以适应不同屏幕宽度 */
  height: 100%;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-carousel__item img:hover {
  box-shadow: 5px 5px 0px 0px #888888;
}
.el-carousel__item:hover {
  opacity: 0.6;
  transition: all 0.3s linear;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  opacity: 1;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  opacity: 1;
}

input {
  padding: 10px; /* 调整为更通用的值 */
  font-size: 1rem; /* 使用rem单位 */
  border: 2px solid #ccc;
  outline: none;
  background-color: #fff;
  text-align: center;
  color: #333;
  font-weight: bold;
  border-radius: 5px;
}
/* 输入框获得焦点时的样式 */
input:focus {
  border-color: #007bff; /* 焦点时边框颜色变化 */
  background-color: #e8e8e8; /* 焦点时背景颜色变化 */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5); /* 添加阴影效果 */
  color: #000; /* 焦点时字体颜色变化 */
}

/* 可选：为输入框添加 hover 效果 */
input:hover {
  border-color: #aaa; /* 鼠标悬停时边框颜色变化 */
}
.swiper-text {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #fff;
  font-size: 1.5rem; /* 使用rem单位 */
  font-weight: bold;
  text-shadow: 2px 2px 2px #000;
}

/* 媒体查询，针对不同屏幕尺寸进行样式调整 */
@media (max-width: 768px) {
  .el-carousel {
    width: 100%; /* 在小屏幕上占满整个宽度 */
    height: auto; /* 高度自适应 */
  }
  .el-carousel__item h3 {
    font-size: 3vw; /* 在小屏幕上进一步减小字体大小 */
  }
  h1 {
    font-size: 6vw; /* 在小屏幕上进一步减小字体大小 */
  }
  .swiper-text {
    font-size: 2vw; /* 在小屏幕上进一步减小字体大小 */
  }
}
</style>



// <style scoped lang="less">
// .v-enter-active {
//     animation: move 1s;
// }

// /* 离开动画 */
// .v-leave-active {
//     animation: move 1s reverse;
// }

// @keyframes move {
//     from {
//         transform: translateY(-100%);
//     }
//     to {
//         transform: translate(0);
//     }
// }
// .navigation {
//   background-color: black;
// }

// .nav-header {
//   width: 100%;
//   height: 8vh;
//   background-color: cadetblue;
//   top: 0;
//   position: fixed;
//   z-index: 999;
// }
// .nav-content {
//   float: left;
//   width: 100%;
//   height: 100vh;
//   background-color: #d1cfcf;
//   opacity: 1;
// }
// .bottom {
//   width: 100%;
//   margin: 0 auto;
//   overflow: hidden;

//   .logoArea {
//     float: left;
//     margin-left: 10vh;
//     .logo {
//       img {
//         width: 175px;
//         margin: 5px 100px;
//       }
//     }
//   }
//   .nav {
//     float: left;
//     margin-top: 30px;
//     margin-left: 200px;

//     a {
//       color: #fff;
//       font-size: 16px;
//       margin-right: 30px;
//       text-decoration: none;

//       &:hover {
//         color: rgb(90, 87, 87);
//       }
//     }
//   }
//   .searchArea {
//     float: right;
//     margin-top: 25px;
//     margin-right: 50px;
//     .searchForm {
//       overflow: hidden;

//       input {
//         box-sizing: border-box;
//         width: 490px;
//         height: 32px;
//         padding: 0px 4px;
//         border: 2px solid rgb(90, 87, 87);
//         float: left;
//         // display: none;
//         &:focus {
//           outline: none;
//         }
//       }

//       button {
//         height: 32px;
//         width: 68px;
//         background-color: rgb(90, 87, 87);
//         border: none;
//         color: #fff;
//         float: left;
//         cursor: pointer;

//         &:focus {
//           outline: none;
//         }
//       }
//     }
//   }
// }
// </style>