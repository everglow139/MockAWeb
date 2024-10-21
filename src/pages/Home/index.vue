<template>
  <div>
    <MyHeader></MyHeader>
    <MyFloor
      v-for="(floor, index) in floorList"
      :key="index"
      :floor="floor"
    ></MyFloor>
    <MyProd></MyProd>
  </div>
</template>

<script>
import MyHeader from "./MyHeader/index.vue";
import MyProd from "./MyProd/index.vue";
import MyFloor from "./MyFloor/index.vue";
import MyFloor1 from "./MyFloor/index.vue";
export default {
  name: "Home",
  components: {
    MyFloor,
    MyHeader,
    MyProd,
    MyFloor1
  },
  data() {
    return {
      floorList: [
        {
          listshow: [
            {
              name: "1",
            },
            {
              name: "2",
            },
            {
              name: "3",
            },
            {
              name: "4",
            },
            {
              name: "5",
            },
            {
              name: "6",
            },
            {
              name: "7",
            },
          ],
        },
        {
          listshow: [
            {
              name: "11",
            },
            {
              name: "22",
            },
            {
              name: "33",
            },
            {
              name: "44",
            },
            {
              name: "55",
            },
            {
              name: "66",
            },
            {
              name: "77",
            },
          ],
        },
        {
          listshow: [
            {
              name: "1",
            },
            {
              name: "2",
            },
            {
              name: "3",
            },
            {
              name: "4",
            },
            {
              name: "5",
            },
            {
              name: "6",
            },
            {
              name: "7",
            },
          ],
        
        }
      ],
    };
  },
};
</script>

<style>
</style>