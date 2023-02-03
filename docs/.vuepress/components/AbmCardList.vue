<template>
  <div class="abm-card-container">
    <div class="card" v-for="item in items" :key="item" :style="item.style">
      <div class="card-tag" v-if="item.tag">{{ item.tag }}</div>
      <img class="card-icon" v-if="item.icon" :src="item.icon" />
      <div class="">
        <div class="title" v-if="item.title">
          <p>{{ item.title }}</p>
        </div>
        <div class="content" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],

  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      if (!this.data) {
        return [];
      }
      setTimeout(() => {
        let content = window[this.data];
        const total = content.length;

        const remain = total % 3;

        var style;
        for (let i = 0; i < total; i++) {
          if (total == 4) {
            style = { "grid-column": "6 span" };
          } else {
            style =
              i >= total - remain
                ? { "grid-column": "" + 12 / remain + " span" }
                : { "grid-column": "4 span" };
          }

          content[i].style = style;
          if (content[i].content && content[i].content.includes("<hr>")) {
            content[i].content = content[i].content.replaceAll(
              "<hr>",
              '<hr style="margin: 1rem auto;"/>'
            );
            console.log(content[i].content);
          }
        }
        this.items = content;
      }, 500);
    },
  },
};
</script>

<style scoped>
.abm-card-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 24px 24px;
  gap: 24px 24px;
  margin: 2rem auto;
}
.card {
  display: flex;
  gap: 10px;
  border: solid 1px var(--theme-color);
  padding: 20px;
  box-shadow: 0 38.5185px 25.4815px rgba(52, 42, 152, 0.0425185),
    0 20px 13px rgba(52, 42, 152, 0.035),
    0 8.14815px 6.51852px rgba(52, 42, 152, 0.0274815),
    0 1.85185px 3.14815px rgba(52, 42, 152, 0.0168519);
  border-radius: 10px;
  transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
  position: relative;
  grid-column: 4 span;
}

.card-tag {
  position: absolute;
  padding: 4px 10px;
  height: 20px;
  top: -17px;
  left: 50%;
  margin: 0 auto;
  border: 1px solid var(--theme-color);
  border-radius: 20px;
  background-color: var(--theme-color);
  color: white;
  text-transform: uppercase;
  transform: translateX(-50%);
  font-weight: 700;
  text-align: center;
}
.card:hover {
  box-shadow: 0 38.5185px 25.4815px rgba(52, 42, 152, 0.08),
    0 20px 13px rgba(52, 42, 152, 0.07),
    0 8.14815px 6.51852px rgba(52, 42, 152, 0.05),
    0 1.85185px 3.14815px rgba(52, 42, 152, 0.02);
}

.card .card-icon {
  position: relative;
  left: -5px;
  top: -12px;
}

.card .title {
  text-align: center;
  color: var(--theme-color);
  font-size: 1.35rem;
  font-weight: bold;
  border-bottom: 3px solid rgba(52, 42, 152, 0.07);
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.card .content {
  line-height: 1.7;
}

.card .title p {
  margin: 0;
}
</style>

