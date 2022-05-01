<template>
  <div class="bg-white shadow-lg w-full h-96">
    <div class="flex">
      <div class="p-10">
        <form @submit="createAdvisers" class="flex flex-col">
          <label class="block mb-2 text-sm font-bold text-gray-700">
            Nombre
          </label>
          <input
            class="w-96 px-3 py-2 mb-2 text-sm leading-tight text-gray-700 hover:border shadow focus:outline-none"
            id="firstName"
            type="text"
            placeholder="Nombre completo"
            v-model="user.name"
          />
          <label class="block bt mb-2 text-sm font-bold text-gray-700">
            Identificacion
          </label>
          <input
            class="w-96 px-3 py-2 text-sm mb-2 leading-tight text-gray-700 hover:border rounded shadow focus:outline-none"
            type="text"
            placeholder="Cc"
            v-model="user.identification"
          />
          <label class="block bt mb-2 text-sm font-bold text-gray-700">
            Contraseña
          </label>
          <input
            class="w-96 px-3 mb-5 py-2 text-sm leading-tight text-gray-700 hover:border shadow focus:outline-none"
            type="password"
            placeholder="********"
            v-model="user.password"
          />
          <button
            class="w-60 px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-blue-400 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Añadir
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      user: {
        name: "",
        identification: "",
        password: "",
      },
    };
  },
  methods: {
    async createAdvisers(e) {
      e.preventDefault();
      const user = await axios.post("http://localhost:3001/api/advisers/", {
        name: this.user.name,
        identification: this.user.identification,
        password: this.user.password,
        user: this.$store.state.user._id,
        partner: this.$store.state.user.partner
      });

      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "El usuario "+user.data.name+' fue creado exitosamente',
          showConfirmButton: false,
          timer: 2000,
        });


		this.user = {
			name:'',
			identification: '',
			password: '', 
		}
      }
    },
  },
};
</script>

<style></style>
