<template>
  <VueperSlides :autoplay="true" class="w-full h-[500px] rounded-xl">
    <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide" />
  </VueperSlides>
  <!-- 卡片區塊，加入上外距 -->
  <div class="mt-8">
    <CardSection />
  </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const slides = [
  "/images/1.png",
];
</script>
