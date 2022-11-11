<template>
  <div class="abm-card-container">
    <div class="card" v-for="item in items" :key="item">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],

  data() {
    console.log(this.getItems());
    return {
      items: this.getItems(),
    };
  },
  methods: {
    getItems() {
      const titles = this.title.split("|");
      const contents = this.content.split("|");
      const ret = [];
      for (let i = 0; i < titles.length && i < contents.length; i++) {
        ret.push({ title: titles[i], content: contents[i] });
      }
      return ret;
    },
  },
};
</script>

<style scoped>
.abm-card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px 24px;
  gap: 24px 24px;
}
.card {
  border: solid 1px var(--theme-color);
  padding: 20px;
  box-shadow: 0 38.5185px 25.4815px rgba(52, 42, 152, 0.0425185),
    0 20px 13px rgba(52, 42, 152, 0.035),
    0 8.14815px 6.51852px rgba(52, 42, 152, 0.0274815),
    0 1.85185px 3.14815px rgba(52, 42, 152, 0.0168519);
  border-radius: 10px;
  transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
  position: relative;
}
.card:hover {
  box-shadow: 0 38.5185px 25.4815px rgba(52, 42, 152, 0.08),
    0 20px 13px rgba(52, 42, 152, 0.07),
    0 8.14815px 6.51852px rgba(52, 42, 152, 0.05),
    0 1.85185px 3.14815px rgba(52, 42, 152, 0.02);
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
</style>

