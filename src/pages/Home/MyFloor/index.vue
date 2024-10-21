<template>
  <div>
    <div class="floor-header">
      <div style="text-align: center;width: 100%;">
        <h3>header</h3>
      </div>
      <div>
        <button class="prev" @click="prevPage">&lt;</button>
        <button class="next" @click="nextPage">&gt;</button>
      </div>
    </div>
    <div class="whole-floor">
      <div ref="floor_container" id="floor-container">
        <ul class="floor">
          <li v-for="item in floor.listshow" :key="item.name" ref="item">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import _throttle from 'lodash/throttle'

export default {
  name: "MyFloor",
  data() {
    return {
      num: 3,
      move_width: 0, // 初始位置
    };
  },
  props: ["floor"],
  mounted() {
    this.initContainerPosition();
  },
  methods: {
    initContainerPosition() {
      const floor_container = this.$refs.floor_container;
      floor_container.style.left = this.move_width + "px";
    },
    animate(obj, target) {
      clearInterval(obj.timer);
      obj.timer = setInterval(() => {
        let step = (target - this.move_width) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (Math.abs(this.move_width - target) <= Math.abs(step)) {
          this.move_width = target;
          obj.style.left = this.move_width + "px";
          clearInterval(obj.timer);
        } else {
          this.move_width += step;
          obj.style.left = this.move_width + "px";
        }
      }, 10);
    },
    nextPage: _.throttle(function() {
      const floor_container = this.$refs.floor_container;
      const li = floor_container.getElementsByTagName("li")[0];
      let li_width = li.offsetWidth;
      let target = this.move_width - li_width - 10; // 计算下一个位置

      if (this.num >= this.floor.listshow.length - 1) {
        // 如果已经是最后一页，则重置到第一页
        target = 0;
        this.num = 3;
      } else {
        this.num++;
      }

      this.animate(floor_container, target);
    }, 1000),
    prevPage: _.throttle(function() {
      const floor_container = this.$refs.floor_container;
      const li = floor_container.getElementsByTagName("li")[0];
      let li_width = li.offsetWidth;
      let target = this.move_width + li_width + 10; // 计算上一个位置

      if (this.num === 0) {
        // 如果已经是第一页，则重置到最后一页
        target = 0;
        this.num = 3;
      } else {
        this.num--;
      }

      this.animate(floor_container, target);
    }, 1000),
  },
};
</script>

<style scoped>
.floor-header {
  width: 100%; /* 使用百分比单位 */
  max-width: 1500px; /* 最大宽度限制 */
  height: 50px;
  margin: 0 auto;
  line-height: 50px;

  font-size: 1.25rem; /* 使用rem单位 */
  border-bottom: 1px solid #ccc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  border: none;
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  font-size: 1rem; /* 使用rem单位 */
  cursor: pointer;
  margin-right: 10px;
}
.floor-header button.next {
  right: 10px; /* 相对于.floor-header定位 */
}
.floor-header button.prev {
  left: 10px; /* 相对于.floor-header定位 */
}
.floor-header button.next,
.floor-header button.prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: #f0f0f0;
  font-size: 1rem; /* 使用rem单位 */
  cursor: pointer;
}
#floor-container {
  margin: 0 auto;
  position: relative;
  left: calc(50% - 251px); /* 居中显示 */
}
.whole-floor {
  overflow: hidden;
}
.floor {
  width: 100%; /* 使用百分比单位 */
  padding: 20px;
  display: flex;
  justify-content: flex-start; /* 使li元素水平排列 */
}
li {
  width: 250px;
  height: 320px;
  margin: 0 10px 10px 0; /* 右边和底部的间距 */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
  color: red;
  font-size: 1rem; /* 使用rem单位 */
  border-radius: 5%;
  list-style: none;
  display: inline-block;
}

/* 媒体查询，针对不同屏幕尺寸进行样式调整 */
@media (max-width: 768px) {
  button {
    width: 40px;
    height: 40px;
    font-size: 0.875rem; /* 使用rem单位 */
  }
  .floor-header button.next,
  .floor-header button.prev {
    font-size: 0.875rem; /* 使用rem单位 */
  }
  li {
    width: 250px; /* 三列显示，减去间距 */
    height: auto; /* 高度自适应 */
    margin: 10px;
  }
}
</style>