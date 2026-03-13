<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useRoute } from "vue-router";
import { h } from "vue";

const route = useRoute();

const tabs = [
  { label: "首頁", path: "/" },
  { label: "關於我們", path: "/about" },
  { label: "服務項目", path: "/services" },
  { label: "廠商資訊", path: "/information" },
  { label: "工作媒介", path: "/agent" },
  { label: "社區工程服務", path: "/engineering" },
  { label: "招商合作專區", path: "/invitation" },
  { label: "聯絡我們", path: "/contact" },
];


const navigation = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/groups/482405965525467/",
    icon: {
      render() {
        return h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
            "clip-rule": "evenodd",
          }),
        ]);
      },
    },
  },
];

const footer_nav = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};
</script>

<template>
  <div>
    <Disclosure v-slot="{ open }" as="nav" class="bg-white shadow-sm">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
              <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex shrink-0 items-center">
              <img
                class="h-16 w-auto"
                src="/logo.png"
                alt="新北市華廈物業協會"
              />
              <div class="ml-2 text-xl">新北市華廈物業協會</div>
            </div>
            <div class="ml-auto hidden sm:flex sm:space-x-6">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <NuxtLink
                v-for="tab in tabs"
                :key="tab.label"
                :to="tab.path"
                class="inline-flex items-center border-b-2"
                :class="{
                  'border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900':
                    route.path === tab.path,
                  'border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700':
                    route.path !== tab.path,
                }"
              >
                {{ tab.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pt-2 pb-4">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <NuxtLink
            v-for="tab in tabs"
            :key="tab.label"
            :to="tab.path"
            class="block border-l-4"
            :class="{
              'border-indigo-500 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700':
                route.path === tab.path,
              'border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700':
                route.path !== tab.path,
            }"
          >
            {{ tab.label }}
          </NuxtLink>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtPage />
    </div>

    <footer class="bg-white">
      <div class="mx-auto max-w-7xl px-6  sm:py-2 lg:px-8 lg:py-2">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <!-- Logo 與文字 -->
          <!-- <div class="flex flex-col items-start space-y-2">
            <img class="h-40" src="/logo.png" alt="新北市華廈物業協會" />
            <p class="text-xl text-gray-900">新北市華廈物業協會</p>
          </div> -->

          <!-- <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm/6 font-semibold text-gray-900">Solutions</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footer_nav.solutions" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footer_nav.support" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm/6 font-semibold text-gray-900">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footer_nav.company" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm/6 font-semibold text-gray-900">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footer_nav.legal" :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm/6 text-gray-600 hover:text-gray-900"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div
        class="mx-auto border-t border-gray-900/10 max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center gap-x-6 md:order-2">

          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-gray-600 hover:text-gray-800"
          >
            <!-- <span class="sr-only">{{ item.name }}</span> -->
            <component :is="item.icon" class="size-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; 2025 達億新創有限公司著作權所有
        </p>
      </div>
    </footer>
  </div>
</template>
