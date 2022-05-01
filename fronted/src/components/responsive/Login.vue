<template>
  <div class="w-full h-screen relative flex justify-center items-center">
      <div class="p-9 bg-white shadow-lg z-10 rounded-lg flex flex-col items-center">
          <img src="../../assets/acceso.png" alt="" class="w-48">
          <h1 class="text-center my-3 font-bold text-lg">Chorders.</h1>
          <input type="text" class="border rounded-lg p-3 my-1" placeholder="Usuario">
          <input type="password" class="border rounded-lg p-3 my-1" placeholder="Contraseña">
          <button class="my-1 bg-indigo-600 p-3 text-white rounded-lg font-bold shadow-sm">Ingresar</button>
      </div>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
        class="absolute "
      >
        <path
          d="M53.04,-54.97 C493.79,62.47 -32.73,78.25 592.54,260.82 L0.00,150.00 L-20.31,-20.42 Z"
          style="stroke: none; fill: #4f46e5"
        ></path>
      </svg>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
