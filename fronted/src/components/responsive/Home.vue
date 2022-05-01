<template>
  <div class="p-9 h-screen w-full relative bg-no-repeat bg-cover">
    <svg
      viewbox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute top-0 left-0 z-0"
    >
      <path
        d="
                M 0, 75
                C 0, 0 0, 0 75, 0
                S 150, 0 150, 75
                    150, 150 75, 150
                    0, 150 0, 75
            "
        fill="#4f46e5"
        transform="rotate(
                -25,
                100,
                100
            ) translate(
                25
                25
            )"
      ></path>
    </svg>
    <svg
      viewbox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-0 right-0 z-0"
    >
      <path
        d="
                M 0, 75
                C 0, 0 0, 0 75, 0
                S 150, 0 150, 75
                    150, 150 75, 150
                    0, 150 0, 75
            "
        fill="#4f46e5"
        transform="rotate(
                -25,
                100,
                100
            ) translate(
                25
                25
            )"
      ></path>
    </svg>
    <div
      class="h-full bg-white rounded-lg flex flex-col z-10 relative shadow-lg shadow-indigo-600/50"
    >
      <div class="w-full p-9 text-center font-bold text-lg text-indigo-600">
        Bienvenido Jesus Pineda
      </div>
      <div class="w-full h-full"></div>
      <div class="w-full px-3 border-t flex justify-between items-center">
        <input
          type="text"
          placeholder="Escribe un mensaje"
          class="p-2 focus:outline-none w-[80%]"
        />
        <router-link to="/advisers/orders">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            class="fill-indigo-600"
          >
            <path
              d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z"
            /></svg
        ></router-link>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            class="fill-indigo-600"
          >
            <path
              d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  // mounted (){
  //   const socket = io('ws://localhost:8000', {
  //     reconnectionDelay: 30000,
  //   })
  // }
};
</script>

<style></style>
