<template>
    <NavBar />
    
    <div class="pincode-finder">
        <!-- Include the Navbar component -->
        <div class="flex-container">
            <div class="firstdiv">
                <!-- <h2 class="h2class">Click and Get State Pin Code</h2> -->
                <!-- <IndiaMap /> -->
                <!-- Move the grey-bg-container outside of input-container to span full width -->
               
                <div v-if="postOfficeData" class="result-container">
                    <table border="2">
                        <thead>
                            <tr>
                                <th>Post Office Name</th>
                                <th>State</th>
                                <th>District</th>
                                <th>Details</th>
                                <!-- Add more table headers here if needed -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in postOfficeData" :key="item.name">
                                <td>{{ item.Name }}</td>
                                <td>{{ item.State }}</td>
                                <td>{{ item.District }}</td>
                                <td>
                                    <router-link :to="'/Search-By-Pincode-Post/' + item.Pincode + '/' + item.Name"> See more</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="postOfficeData == null">
                    <tr>
                        No Record found
                    </tr>
                </div>
                <div v-if="postOfficeData == ''">
                  
                </div>
            </div>
            <div class="seconddiv"  v-if="postOfficeData == ''">
                <div class="col-sm-4">
                    
                    <div class="grey-bg-container">
                        <h4>Find Postal Pincode/Post office for any location in India</h4>
                        <div class="area_search">
                            <div><b>Search by area name</b></div>
                            <div class="input-container">
                                <div class="search_input">
                                    <input v-model="selectedBranch" class="custom-input" placeholder="Enter Area" />
                                    <button class="custom-button" @click="searchByBranch">FIND POST OFFICE</button>
                                </div>
                            </div>
                        </div>
                        <div class="area_search">
                            <div><b>OR Search by PIN Code</b></div>
                            <div class="input-container">
                                <div class="search_input">
                                    <input type="number" v-model="selectedPincode" class="custom-input" placeholder="Enter PIN Code" />
                                    <button class="custom-button" @click="searchByPincode">FIND PINCODE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />

</template>
<script>
import NavBar from './Navbar.vue';
import FooterComponent from './FooterComponent.vue';

import { ref } from 'vue';
import axios from 'axios';

// import IndiaMap from './IndiaMap.vue';


export default {
    components: {
        NavBar,
        FooterComponent
        // IndiaMap
    },
    setup() {
        const getPincode = ref('');
        const selectedBranch = ref('');
        const postOfficeData = ref('');
        const selectedPincode = ref('');

        const searchByBranch = async () => {
            if (selectedBranch.value == '') {
                alert('Please enter area name');
                return false;
            }
            try {
                const response = await axios.get('https://api.postalpincode.in/postoffice/' + selectedBranch.value);
                if (response.data[0].PostOffice) {
                    postOfficeData.value = response.data[0].PostOffice;
                } else {
                    postOfficeData.value = null;
                }
            } catch (error) {
                console.error('An error occurred:', error);
                // Handle the error gracefully, e.g., show an error message to the user.
            }
        };

        const searchByPincode = async () => {
            if (selectedPincode.value < 99999 || selectedPincode.value > 999999) {
                alert('Please enter 6 digit pincode');
                return false;
            }
            try {
                const response = await axios.get('https://api.postalpincode.in/pincode/' + selectedPincode.value);

                if (response.data[0].PostOffice) {
                    postOfficeData.value = response.data[0].PostOffice;
                } else {
                    postOfficeData.value = null;
                }
            } catch (error) {
                console.error('An error occurred:', error);
                // Handle the error gracefully, e.g., show an error message to the user.
            }
        };
        return {
            getPincode,
            selectedBranch,
            searchByBranch,
            postOfficeData,
            searchByPincode,
            selectedPincode
        };
    }
};
</script>
  
<style scoped>
.area_search {
  padding: 7px;
}
.h2class {
  margin-left: 20px;
}
.grey-bg-container {
  background-color: #f4f4f4;
  padding: 20px;
  margin: 10px;
}
.input-container {
  display: flex;
  width: 100%;
  text-align: left;
  padding: 10px;
}
.flex-container {
  display: flex;
  flex-direction: column; /* Adjusted for better mobile responsiveness */
  width: 100%;
}
.firstdiv,
.seconddiv {
  width: 100%;
}
.search_input {
  width: 100%;
}
.custom-input,
.custom-button {
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
}
.custom-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.custom-button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f93;
  color: #fff;
  margin-top: 10px;
}
.pincode-finder {
  max-width: 1200px;
  margin: 10px auto;
  padding: 20px;
  text-align: left;
}
.result-container {
  margin-top: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  padding: 20px;
  margin-top: 20px;
}
table,
th,
td {
  border: 1px solid #ccc;
}
table th,
table td {
  padding: 10px;
  text-align: left;
}
table th {
  background-color: #f93;
  color: #fff;
}
table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
