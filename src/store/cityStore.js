import { ref } from 'vue';
// import { useRoute } from 'vue-router'
import axios from 'axios';
import { defineStore } from 'pinia';

export const useCity = defineStore('city', () => {
    const selectedCity = ref('');

    const setSelectedState = (newValue) => {
      selectedCity.value = newValue;
      console.log(selectedCity.value,newValue,'selectedCityselectedCityselectedCityselectedCity');

    };
  
    const getCityByPincode = async () => {
        await axios.get('https://api.postalpincode.in/pincode/110001').then((response) => {
            return response.data;
        });
    };
    return {
        useCity,
        getCityByPincode,
        selectedCity,
        setSelectedState
    };
});
