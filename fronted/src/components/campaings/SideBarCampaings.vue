<template>
  <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
    <div class="flex flex-row items-center justify-center h-12 w-full">
      <div class="ml-2 font-bold text-4xl text-indigo-600">Chorders.</div>
    </div>
    <div
      class="flex flex-col items-center bg-indigo-600 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
    >
      <div class="h-24 w-24 rounded-full  overflow-hidden">
        <img
          src="../../assets/acceso.png"
          alt="Avatar"
          class="h-full w-full"
        />
      </div>
      <div class="text-sm font-bold mt-2 text-white">{{ this.user.name }}</div>
      <div class="text-xs text-white font-semibold">
        {{ this.user.identification }}
      </div>
      <div class="flex flex-row items-center mt-3">
        <div
          class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
        >
          <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
        </div>
        <div class="leading-none ml-1 text-xs text-white">Active</div>
      </div>
    </div>
    <div class="flex flex-col mt-8">
      <router-link
        to="/admin/campaigns"
        class="flex items-center gap-2 font-bold border p-3 rounded-lg hover:bg-indigo-600 hover:fill-white hover:text-white"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30">
          <path
            d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM176,144a80,80,0,0,1,160,0v16H176Z"
          />
        </svg>
        Campañas</router-link
      >
      <router-link
        to="campaigns/chat"
        class="flex items-center gap-2 font-bold border p-3 rounded-lg hover:bg-indigo-600 hover:fill-white hover:text-white"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <path
            d="M398,81.84A227.4,227.4,0,0,0,255.82,32C194.9,32,138,55.47,95.46,98.09,54.35,139.33,31.82,193.78,32,251.37A215.66,215.66,0,0,0,67.65,370.13l.19.27c.28.41.57.82.86,1.22s.65.92.73,1.05l.22.4c1.13,2,2,4.44,1.23,6.9L52.46,446.63a29.13,29.13,0,0,0-1.2,7.63A25.69,25.69,0,0,0,76.83,480a29.44,29.44,0,0,0,10.45-2.29l67.49-24.36.85-.33a14.75,14.75,0,0,1,5.8-1.15,15.12,15.12,0,0,1,5.37,1c1.62.63,16.33,6.26,31.85,10.6,12.9,3.6,39.74,9,60.77,9,59.65,0,115.35-23.1,156.83-65.06C457.36,365.77,480,310.42,480,251.49a213.5,213.5,0,0,0-4.78-45C464.88,157.87,437.46,113.59,398,81.84ZM87.48,380h0ZM160,288a32,32,0,1,1,32-32A32,32,0,0,1,160,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,288Z"
          /></svg
        >Chat</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },

  mounted() {
    this.user = this.$store.state.user;
  },
};
</script>

<style></style>
