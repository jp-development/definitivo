<template>
  <div class="w-full h-screen relative flex justify-center items-center">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
        class="absolute"
      >
        <path
          d="M53.04,-54.97 C493.79,62.47 -32.73,78.25 592.54,260.82 L0.00,150.00 L-20.31,-20.42 Z"
          style="stroke: none; fill: #4f46e5"
        ></path>
      </svg>

      <div class="rounded-lg shadow-lg p-12 z-10 bg-white">
        <h5 class="text-lg font-bold text-indigo-600 text-center my-3">Ingresar pedido de campaña</h5>
        <div class="flex w-full">
          <input type="text" class="border p-3 mx-1 w-full" placeholder="Codigo">
          <input type="number" class="border w-20 p-3 mx-1" min="1">
        </div>

      </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      orders: [],
      cod: '',
    }
  },
  methods: {
    inputOrder(){
      
    }
  }
}
</script>

<style>

</style>