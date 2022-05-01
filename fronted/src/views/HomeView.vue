<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      identification: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const user = await axios.post("http://localhost:3001/api/auth/login", {
        identification: this.identification,
        password: this.password,
      });

      if (user.data.login) {
        localStorage.setItem("user", JSON.stringify(user.data.user));
        location.reload();
      }
    },
  },

  mounted() {
    if (this.$store.state.user) {
      this.$router.push("/admin/dashboard");
    }
  },
};
</script>

<template>
  <div class="w-full h-screen bg-indigo-600 flex justify-center items-center">
    <div class="w-1/2 h-full flex items-center justify-center flex-col">
      <img src="../assets/acceso.png" alt="" class="w-52" />
      <h1 class="text-5xl font-bold text-white">Chorders.</h1>
      <h2 class="text-lg text-white font-semibold">
        Inicio de sesion - Gerentes de Zona
      </h2>
    </div>
    <div
      class="w-1/2 bg-white h-full flex justify-center items-center px-28 flex-col"
    >
      <form @submit="login">
        <label class="w-full font-bold">Numero de identificacion</label>
        <input
          type="text"
          class="border rounded-lg w-full p-3 mb-10"
          placeholder="145986784"
          v-model="identification"
        />
        <label class="w-full font-bold">Contraseña</label>
        <input
          type="password"
          class="border rounded-lg w-full p-3 mb-10"
          placeholder="***********"
          v-model="password"
        />
        <button
          class="w-full bg-indigo-600 p-3 text-white rounded-md font-bold"
          type="submit"
        >
          Ingresar
        </button>
      </form>
      <p class="my-2">
        No tienes una cuenta?
        <router-link to="#" class="text-indigo-600 hover:underline"
          >Registrarme</router-link
        >
      </p>
    </div>
  </div>
</template>
