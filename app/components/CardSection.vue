<template>
  <div class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        
        <div class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div>
            <div class="flex items-center gap-x-4">
              <div class="rounded-lg bg-indigo-50 p-3">
                <Square3Stack3DIcon class="h-6 w-6 text-indigo-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">服務項目</h3>
            </div>
            <p class="mt-4 text-base text-gray-600 leading-7">
              涵蓋社區機電、防水、節能等專業技術支援，為您的社區提供全方位的解決方案。
            </p>
          </div>
          <NuxtLink to="/services" class="mt-8 flex items-center justify-center rounded-xl bg-gray-50 px-6 py-3 text-sm font-bold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            了解更多服務
          </NuxtLink>
        </div>

        <div class="flex flex-col justify-between rounded-3xl bg-indigo-600 p-8 shadow-indigo-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div>
            <div class="flex items-center gap-x-4">
              <div class="rounded-lg bg-indigo-400/30 p-3">
                <AcademicCapIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">課程報名</h3>
            </div>
            <p class="mt-4 text-base text-indigo-100 leading-7">
              政府認證事務人員教育訓練，由業界名師親自授課，協助您快速取得專業證照。
            </p>
          </div>
          <NuxtLink to="/courses" class="mt-8 flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
            查看課程簡章
          </NuxtLink>
        </div>

        <div class="flex flex-col justify-between rounded-3xl bg-gray-900 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div>
            <div class="flex items-center gap-x-4">
              <div class="rounded-lg bg-gray-800 p-3">
                <HandRaisedIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white">招商合作</h3>
            </div>
            <p class="mt-4 text-base text-gray-400 leading-7">
              歡迎優質供應商入駐協會平台，共同開拓社區服務市場，創造多元商業機會。
            </p>
          </div>
          <NuxtLink to="/partnership" class="mt-8 flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-colors duration-300 border border-white/20">
            合作申請諮詢
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// 如果使用 Heroicons，請記得引入
import { 
  Square3Stack3DIcon, 
  AcademicCapIcon, 
  HandRaisedIcon 
} from '@heroicons/vue/24/outline'
</script>