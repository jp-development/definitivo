<script>
import SideBarCampaings from "./SideBarCampaings.vue";
export default {
  components: {
    SideBarCampaings,
  },
};
</script>

<template>
  <div class="flex h-full antialiased text-gray-800">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
      <SideBarCampaings />
      <div class="flex flex-col flex-auto h-full p-6">
        <router-view></router-view>
      </div>
      <div
        class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 h-full"
      >
        <div
          class="bg-indigo-600 p-10 rounded-lg flex flex-col justify-center items-center"
        >
          <h4 class="text-white font-bold text-lg">Campaña Actual</h4>
          <span class="text-6xl text-white font-bold">5</span>
        </div>

        <div
          class="w-full flex flex-col items-center my-5 h-full overflow-y-auto"
        >
          <h5>Asesores conectados</h5>
          <div class="p-5">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
