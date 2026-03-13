<template>
  <section class="relative isolate overflow-hidden bg-indigo-600 py-24 sm:py-32">
    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-10" />
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          您最信賴的物業夥伴
        </h2>
        <p class="mt-6 text-lg leading-8 text-indigo-100">
          當專業人才與穩健硬體結合，社區就能從「單純居住」升級為「質感生活」。我們不僅解決住戶的煩惱，更透過專業服務的落實，確保每一分管理經費都能轉化為看得到的舒適度與安全感。
        </p>
        
        <div class="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-6">
          <NuxtLink
            to="/contact"
            class="rounded-full bg-white px-8 py-3.5 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
          >
            立即預約諮詢
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="text-lg font-semibold leading-6 text-white hover:text-indigo-100 transition"
          >
            了解更多服務 <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <div class="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-indigo-200">
          <div class="flex items-center gap-x-2">
            <svg class="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            24小時內快速回覆
          </div>
          <div class="flex items-center gap-x-2">
            <svg class="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            專業技師實地勘查
          </div>
          <div class="flex items-center gap-x-2">
            <svg class="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            客製化社區管理方案
          </div>
        </div>
      </div>
    </div>
  </section>
</template>