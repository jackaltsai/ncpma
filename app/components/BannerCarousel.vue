<template>
  <VueperSlides :autoplay="true" fixed-height="100vh" class="w-full bg-gray-100 rounded-xl">
    <VueperSlide v-for="(slide, i) in slides" :key="i">
      <template #content>
        <div class="w-full h-full flex items-center justify-center">
          <img :src="slide" class="w-full h-full object-contain" />
        </div>
      </template>
    </VueperSlide>
  </VueperSlides>
  
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