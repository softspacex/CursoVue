import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      // pokemons.value = data.results;
      data.value = res.data;
    } catch (e) {
      //   console.log(error);
      error.value = "Error de servidor";
    } finally {
      loading.value = false;
    }
  };
  return {
    getData,
    data,
    loading,
    error,
  };
};
