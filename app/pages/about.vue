<template>
  <div class="bg-white">
    <main class="isolate">
      <div class="relative isolate -z-10 overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
        <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"></div>
        <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 class="max-w-2xl text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              深耕物業管理專業<br />引領社區共榮未來
            </h1>
            <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p class="text-lg font-bold text-indigo-600 mb-4">本會之任務如下：</p>
              <ul class="space-y-3 text-lg text-gray-600">
                <li class="flex gap-x-3">
                  <span class="text-indigo-600">01.</span>
                  <span>輔導領得證照之新進人員，熟悉事務管理內容。</span>
                </li>
                <li class="flex gap-x-3">
                  <span class="text-indigo-600">02.</span>
                  <span>協助就業事務人員交換管理技巧與技術。</span>
                </li>
                <li class="flex gap-x-3">
                  <span class="text-indigo-600">03.</span>
                  <span>引進國內外最新物業新知，推動國際學術交流。</span>
                </li>
                <li class="flex gap-x-3">
                  <span class="text-indigo-600">04.</span>
                  <span>舉辦政府認證教育課程，提升專業資格。</span>
                </li>
                <li class="flex gap-x-3">
                  <span class="text-indigo-600">05.</span>
                  <span>提供工作媒合服務，強化產業人力支援。</span>
                </li>
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Office Professional" class="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32"></div>
      </div>

      <div class="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <h2 class="text-2xl font-bold mb-12 text-gray-900">發展里程碑</h2>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div v-for="item in timeline" :key="item.name">
            <time :datetime="item.dateTime" class="flex items-center text-sm/6 font-semibold text-indigo-600">
              <svg viewBox="0 0 4 4" class="mr-4 size-1 flex-none" aria-hidden="true">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </svg>
              {{ item.date }}
              <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
            </time>
            <p class="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{{ item.name }}</p>
            <p class="mt-1 text-base/7 text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">專業數據見證實力</h2>
          <p class="mt-6 text-base/7 text-gray-600">我們致力於建立透明、專業的物業管理生態系，透過數據展現本會在產業中的影響力。</p>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p class="flex-none text-3xl font-bold tracking-tight text-gray-900">1,200+</p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg font-semibold tracking-tight text-gray-900">服務會員總數</p>
              <p class="mt-2 text-base/7 text-gray-600">全台各地的專業事務管理人員。</p>
            </div>
          </div>
          <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p class="flex-none text-3xl font-bold tracking-tight text-white">95%</p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg font-semibold tracking-tight text-white">培訓滿意度</p>
              <p class="mt-2 text-base/7 text-gray-400">學員對於政府認證課程的高度認可。</p>
            </div>
          </div>
          <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p class="flex-none text-3xl font-bold tracking-tight text-white">450+</p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p class="text-lg font-semibold tracking-tight text-white">年度成功媒合案</p>
              <p class="mt-2 text-base/7 text-indigo-200">協助證照持有者找到理想職務。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-24">
        <div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div class="w-full lg:max-w-lg lg:flex-auto">
            <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">物業人才媒合專區</h2>
            <p class="mt-6 text-xl/8 text-gray-600">我們為具備專業證照的您提供最精準的職位推薦，連結全台優質物業管理公司。</p>
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" alt="Team cooperation" class="mt-16 aspect-6/5 w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-138" />
          </div>
          <div class="w-full lg:max-w-xl lg:flex-auto">
            <h3 class="sr-only">目前職缺</h3>
            <ul class="-my-8 divide-y divide-gray-100">
              <li v-for="opening in jobOpenings" :key="opening.id" class="py-8">
                <dl class="relative flex flex-wrap gap-x-3">
                  <dt class="sr-only">職位</dt>
                  <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                    <a :href="opening.href">
                      {{ opening.role }}
                      <span class="absolute inset-0" aria-hidden="true"></span>
                    </a>
                  </dd>
                  <dt class="sr-only">描述</dt>
                  <dd class="mt-2 w-full flex-none text-base/7 text-gray-600">{{ opening.description }}</dd>
                  <dt class="sr-only">薪資待遇</dt>
                  <dd class="mt-4 text-base/7 font-semibold text-gray-900">{{ opening.salary }}</dd>
                  <dt class="sr-only">地點</dt>
                  <dd class="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                    <svg viewBox="0 0 2 2" class="size-0.5 flex-none fill-gray-300" aria-hidden="true">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    {{ opening.location }}
                  </dd>
                </dl>
              </li>
            </ul>
            <div class="mt-8 flex border-t border-gray-100 pt-8">
              <a href="#" class="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">查看所有媒合機會 <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const timeline = [
  {
    name: "協會正式成立",
    description: "集合業界專家，確立輔導新進人員之核心宗旨。",
    date: "2021年 8月",
    dateTime: "2021-08",
  },
  {
    name: "取得政府課程認證",
    description: "獲准舉辦物業管理事務人員教育訓練培訓課程。",
    date: "2022年 12月",
    dateTime: "2022-12",
  },
  {
    name: "推動國際交流計畫",
    description: "與日本及新加坡物業設施管理單位簽署技術交流備忘錄。",
    date: "2023年 6月",
    dateTime: "2023-06",
  },
  {
    name: "數位媒合平台轉型",
    description: "上線自動化職缺媒合系統，提升事務人員就業率。",
    date: "2024年 1月",
    dateTime: "2024-01",
  },
];

const jobOpenings = [
  {
    id: 1,
    role: "高級社區主任 (事務管理人員)",
    href: "#",
    description: "負責大型社區行政管理、廠商溝通與財務報表編制。需持有認證證照。",
    salary: "月薪 42,000 - 55,000",
    location: "台北市 信義區",
  },
  {
    id: 2,
    role: "物業設施經理",
    href: "#",
    description: "專責商辦大樓設施維護計畫與能源管理。需五年以上相關經驗。",
    salary: "月薪 60,000+",
    location: "台中市 西屯區",
  },
  {
    id: 3,
    role: "社區秘書 (培訓對象)",
    href: "#",
    description: "協助管委會庶務執行，協會提供職前輔導，適合剛取得證照之新進人員。",
    salary: "月薪 35,000 - 38,000",
    location: "桃園市 桃園區",
  },
];
</script>