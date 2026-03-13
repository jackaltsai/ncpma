<template>
  <div class="relative bg-white">
    <div class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
      <img
        class="size-full object-cover"
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        alt="社區工程維修"
      />
      <div class="absolute inset-0 bg-indigo-500/20 mix-blend-multiply"></div>
    </div>

    <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
        <h2 class="text-base/7 font-semibold text-indigo-600">專業、效率、透明</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          社區工程服務
        </p>
        <p class="mt-6 text-lg/8 text-gray-700">
          我們提供全方位的社區設施維修與更新建議。從機電系統定期保養、漏水鑑定處理到公共設施現代化更新，協會連結具備國家證照的專業工班，為社區資產價值保駕護航。
        </p>
        <div class="mt-10">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            預約實地勘查
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">工程實績案例</h2>
        <p class="mt-2 text-lg text-gray-600">透明的施工過程，是我們對社區最基本的承諾。</p>
      </div>
      
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            <span class="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600">
              {{ post.category.title }}
            </span>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg/6 font-bold text-gray-900 group-hover:text-gray-600">
              <a :href="post.href">
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
              {{ post.description }}
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-50 object-cover" />
            <div class="text-sm/6">
              <p class="font-semibold text-gray-900">
                <span>{{ post.author.name }}</span>
              </p>
              <p class="text-gray-600">{{ post.author.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "信義區XX社區：老舊揚水馬達系統全面汰換",
    href: "#",
    description: "針對屋齡20年之建築，解決馬達噪音與供水不穩問題。透過變頻系統改裝，預估每年節省社區電費約15%。",
    date: "2024年 2月 10日",
    datetime: "2024-02-10",
    category: { title: "機電維護", href: "#" },
    author: {
      name: "林大為",
      role: "資深機電技師",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "板橋區頂極社區：地下室天棚漏水高壓灌注工程",
    href: "#",
    description: "解決長期困擾住戶的地下室滴水問題，採用日本進口無收縮樹脂材料，施工後經連日豪雨測試無虞。",
    date: "2024年 1月 15日",
    datetime: "2024-01-15",
    category: { title: "防水工程", href: "#" },
    author: {
      name: "張志強",
      role: "防水修繕專家",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "桃園市綠光社區：景觀中庭照明改裝LED節能系統",
    href: "#",
    description: "全面更換中庭與梯廳照明，不僅提升夜間安全性，並搭配光敏自動啟閉系統，達到極致節能。",
    date: "2023年 12月 20日",
    datetime: "2023-12-20",
    category: { title: "節能優化", href: "#" },
    author: {
      name: "王小明",
      role: "能源管理諮詢師",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
</script>