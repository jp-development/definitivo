<template>
  <div class="w-full">
    <form @submit="submit">
      <div class="flex justify-between p-12 items-center">
        <div class="p-6">
          <h5 class="font-bold text-lg">Stencil</h5>
          <p class="mb-6">Elija el stencil adecuado a la campaña a abrir</p>
          <input type="file" @change="obtenerStencil" />
        </div>
        <div class="p-6">
          <h5 class="font-bold text-lg">Stencil</h5>
          <p class="mb-6">Elija el stencil adecuado a la campaña a abrir</p>
          <input type="file" />
        </div>
        <div>
          <button
            class="bg-indigo-600 text-white p-3 rounded-lg font-bold hover:bg-indigo-500"
          >
            Iniciar campaña
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      stencil: "",
      pedidos: "",
    };
  },

  methods: {
    async obtenerStencil(e) {
      const file = e.target.files[0];
      this.pedidos = URL.createObjectURL(file);
      let formData = new FormData();
      formData.append("stencil", file);

      await axios.post(
        "http://localhost:3001/api/campaings/",
        {formData: formData},{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        },
      );
    },
  },
};
</script>

<style></style>
