<template>
  <BannerCarousel />


  <HeroSection />
</template>

<script setup lang="ts">


/* ---------- 3. 分類中文顯示 ---------- */
const categoryLabel = (key: string) => {
  const map: Record<string, string> = {
    news: "最新消息",
    courses: "課程預告",
    events: "活動資訊",
    uncategorized: "未分類",
  };
  return map[key] || key;
};

const formatDate = (isoString: string) => {
  return new Date(isoString).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
