<template>
    <NavBar />
    <div class="pincode-finder">
      <div class="flex-container">
        <div class="firstdiv">
          <h2 class="h2class">Find Post office location info with Pincode / PIN code</h2>
          <div class="grey-bg-container">
            <div><b>Search by PIN Code</b></div>
            <div class="input-container">
              <div class="search_input">
                <input v-model="selectedPincode" class="custom-input" placeholder="Enter PIN Code" />
                <button class="custom-button" @click="searchByPincode">FIND PINCODE</button>
              </div>
            </div>
          </div>
          <div v-if="postOfficeData" class="result-container">
            <table>
              <thead>
                <tr>
                  <th>Post Office Name</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Details</th>
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
            <p>No Record found</p>
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
  
  export default {
    components: {
      NavBar,
      FooterComponent
    },
    setup() {
      const selectedPincode = ref('');
      const postOfficeData = ref('');
  
      const searchByPincode = async () => {
        const response = await axios.get('https://api.postalpincode.in/pincode/' + selectedPincode.value);
        postOfficeData.value = response.data[0]?.PostOffice || null;
      };
  
      return {
        selectedPincode,
        searchByPincode,
        postOfficeData
      };
    }
  };
  </script>
   <style scoped>
   @media (max-width: 768px) {
     .input-container {
       flex-direction: column;
     }
     .custom-input {
       width: 100%;
       margin-bottom: 10px;
     }
     .custom-button {
       width: 100%;
     }
     table {
       width: 100%;
       margin: 20px 0;
     }
     .no-record {
       margin-top: 20px;
     }
   }
   .h2class {
     margin-left: 20px;
   }
   .grey-bg-container {
     background-color: #f4f4f4;
     padding: 30px;
     margin: 20px;
   }
   .input-container {
     display: flex;
     width: 100%;
     text-align: left;
     padding: 10px;
   }
   .flex-container {
     display: flex;
     justify-content: space-between;
     width: 100%;
   }
   .firstdiv {
     width: 100%; /* Adjusted to full width for better mobile responsiveness */
   }
   .search_input {
     width: 100%;
   }
   .custom-input {
     flex: 1;
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 5px;
     margin-right: 10px;
     font-size: 16px;
   }
   .custom-button {
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 5px;
     font-size: 16px;
     cursor: pointer;
     background-color: #f93;
     color: #fff;
     margin: 10px 0;
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
     margin: 20px 0;
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
   