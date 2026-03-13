<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base/7 text-gray-700">
      <p class="text-base/7 font-semibold text-indigo-600">Business Partnership</p>
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        招商合作專區：共創物業管理新生態
      </h1>
      <p class="mt-6 text-xl/8 text-gray-600">
        本會誠摯邀請各界優良廠商入駐，從機電維護、清潔環衛到智慧建築科技，透過協會的平台，直接連結全台數千名事務管理人員與社區管委會，共同提升居住品質。
      </p>

      <div class="mt-10 max-w-2xl">
        <h2 class="text-2xl font-bold text-gray-900">為什麼選擇與我們合作？</h2>
        <p class="mt-4">
          物業管理產業正經歷數位轉型與服務升級，社區對於專業廠商的需求日益增加。加入本會合作體系，您將獲得以下優勢：
        </p>
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 size-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
              <strong class="font-bold text-gray-900">精準受眾對接。</strong> 
              您的服務將直接展示給具有採購建議權的事務人員與社區主任，降低行銷開發成本。
            </span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 size-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
              <strong class="font-bold text-gray-900">品牌專業背書。</strong> 
              經由協會審核通過的優良廠商，代表其資質與服務品質獲得產業公信力的認可。
            </span>
          </li>
          <li class="flex gap-x-3">
            <CheckCircleIcon class="mt-1 size-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
              <strong class="font-bold text-gray-900">資源整合與交流。</strong> 
              定期參與協會舉辦的產業研討會、新技術發表會，第一手掌握社區管理痛點與趨勢。
            </span>
          </li>
        </ul>

        <h2 class="mt-16 text-3xl font-bold tracking-tight text-gray-900">合作入駐流程</h2>
        <p class="mt-6">
          我們擁有一套嚴謹但高效的審核流程，確保每一位合作夥伴都能在生態系中發揮最大價值。
        </p>
        
        <div class="mt-8 border-l-4 border-indigo-600 bg-indigo-50 p-6 rounded-r-xl">
          <ol class="space-y-4 text-indigo-900 font-medium">
            <li>1. 線上提交企業資質與服務簡介</li>
            <li>2. 協會委員會進行服務紀錄審核</li>
            <li>3. 簽署合作備忘錄與服務承諾書</li>
            <li>4. 正式上線優良廠商專區並發布公告</li>
          </ol>
        </div>

        <figure class="mt-16">
          <img class="aspect-video rounded-xl bg-gray-50 object-cover shadow-lg" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1310" alt="合作會議" />
          <figcaption class="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon class="mt-0.5 size-5 flex-none text-gray-300" aria-hidden="true" />
            協會定期舉辦廠商對接交流會，促進資源共享。
          </figcaption>
        </figure>

        <h2 class="mt-16 text-3xl font-bold tracking-tight text-gray-900">入駐諮詢窗口</h2>
        <p class="mt-6">
          如果您有優秀的產品或服務，並渴望在物業管理市場大展身手，請立即聯繫我們的招商部門。
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row gap-6">
          <div class="flex-1 rounded-2xl border border-gray-200 p-6">
            <h3 class="font-bold text-gray-900">招商部：林經理</h3>
            <p class="text-sm text-gray-600 mt-2">負責：廠商審核、年度合約</p>
            <p class="text-indigo-600 font-semibold mt-2">bd@association.org.tw</p>
          </div>
          <div class="flex-1 rounded-2xl border border-gray-200 p-6">
            <h3 class="font-bold text-gray-900">行銷部：蘇小姐</h3>
            <p class="text-sm text-gray-600 mt-2">負責：聯合宣傳、展覽對接</p>
            <p class="text-indigo-600 font-semibold mt-2">marketing@association.org.tw</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/vue/20/solid";
</script>