<template>
  <div class="bg-white">
    <div class="px-6 py-24 sm:py-32 lg:px-8 bg-linear-to-b from-indigo-50/50">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">優良廠商資訊</h2>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          本會嚴選各領域專業供應商，為事務管理人員提供最可靠的後援。包含機電保養、清潔環衛、法律諮詢及智慧系統等。
        </p>
      </div>
    </div>

    <div class="py-24 md:py-32">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">合作夥伴分類</h2>
          <p class="mt-6 text-lg/8 text-gray-600">
            透過與優質廠商合作，我們確保社區管理的每一個細節都能得到專業的處理。所有廠商均經過協會初步審核其資質與服務紀錄。
          </p>
          <div class="mt-10">
            <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              廠商入駐申請 <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        
        <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
          <li v-for="vendor in vendors" :key="vendor.name" class="flex flex-col bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <img class="aspect-3/2 w-full rounded-2xl object-cover" :src="vendor.imageUrl" alt="" />
            <div class="flex items-center gap-x-3 mt-6">
                <h3 class="text-lg/8 font-bold text-gray-900">{{ vendor.name }}</h3>
                <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                    {{ vendor.category }}
                </span>
            </div>
            <p class="text-sm text-indigo-600 font-semibold">{{ vendor.specialty }}</p>
            <p class="mt-4 text-base/7 text-gray-600 flex-auto">{{ vendor.description }}</p>
            
            <div class="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <a :href="'tel:' + vendor.phone" class="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                    <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    立即聯絡
                </a>
                <a :href="vendor.website" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    官方網站
                </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const vendors = [
  {
    name: "誠信機電工程",
    category: "機電維護",
    specialty: "高低壓配電、發電機組維修",
    description: "擁有20年社區機電維護經驗，提供24小時緊急搶修服務，專精於各類建築機電系統整合。",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e92c731?auto=format&fit=crop&q=80&w=800",
    phone: "02-1234-5678",
    website: "#"
  },
  {
    name: "綠意園藝景觀",
    category: "景觀維護",
    specialty: "社區植栽維護、景觀工程設計",
    description: "協助多個大型社區獲得優良公寓大廈評選景觀獎，致力於社區永續綠化與病蟲害防治。",
    imageUrl: "https://images.unsplash.com/photo-1558905757-4fab8b7c6a99?auto=format&fit=crop&q=80&w=800",
    phone: "02-8765-4321",
    website: "#"
  },
  {
    name: "智安物業科技",
    category: "智慧系統",
    specialty: "門禁人臉辨識、智慧包裹雲端系統",
    description: "提供雲端社區管理平台，有效降低管理成本並提升住戶使用滿意度，無縫接軌未來智慧生活。",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    phone: "03-4567-8901",
    website: "#"
  },
  {
    name: "專業清潔實業",
    category: "環境清潔",
    specialty: "石材養護、外牆清洗、病媒防治",
    description: "全台首家導入環保清潔藥劑的專業團隊，為社區公共區域提供深層淨化服務。",
    imageUrl: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=800",
    phone: "02-2345-6789",
    website: "#"
  }
];
</script>