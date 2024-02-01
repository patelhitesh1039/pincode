<template>
    <NavBar />
    
    <div class="pincode-finder">
        <!-- Include the Navbar component -->
        <div class="flex-container">
            <div class="firstdiv">
                <h2 class="h2class">PIN Code 395005: Post Offices in PinCode 395005</h2>
                <div class="result-container"> 
                    <table border="2">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>Post Office:</th>
                                <td>{{ Post_Office }}</td>
                            </tr>
                            <tr>
                                <th>Post Office Type:</th>
                                <td>{{ Post_Office_Type }}</td>
                            </tr>
                            <tr>
                                <th>District</th>
                                <td>{{ District }}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{{ State }}</td>
                            </tr>
                            <tr>
                                <th>Division</th>
                                <td>{{ Division }}</td>
                            </tr>
                            <tr>
                                <th>Delivery Status:</th>
                                <td>{{ Delivery_Status }}</td>
                            </tr>
                            <tr>
                                <th>PIN Code</th>
                                <td>{{ PIN_Code }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="postOfficeData == null">
                    <tr>No Record found</tr>
                </div>
            </div>
            <div class="seconddiv">
                <div class="col-sm-4">
                    <div class="product-inner">
                        <h4>LIST OF POST OFFICES IN</h4>
                        <b> Other Pincodes Nearby</b>
                        <div v-for="item in total_post_Office" :key="item.name">
                            <li class="li_class" @click="selectedOffice(item.Name)">{{ item.Name }}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent/>
  </template>
  
<script>
import NavBar from './Navbar.vue';
import FooterComponent from './FooterComponent.vue';

import { ref } from 'vue';
// import { useCity } from '../store/cityStore';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    components: {
        NavBar,
        FooterComponent
    },
    setup() {
        const route = useRoute();
        const pincode = route.params.pincode;
        const branchname = route.params.branchname;
        const postOfficeData = ref('');
        const total_post_Office = ref('');
        const Post_Office = ref('');
        const Post_Office_Type = ref('');
        const District = ref('');
        const State = ref('');
        const Division = ref('');
        const Delivery_Status = ref('');
        const PIN_Code = ref('');

        const searchByPincode = async () => {
            await axios.get('https://api.postalpincode.in/pincode/' + pincode).then((response) => {
                total_post_Office.value = response.data[0].PostOffice;
                postOfficeData.value = response.data[0].PostOffice.filter((values) => values.Name == branchname);

                response.data[0].PostOffice.forEach((element) => {
                    if (element.Name == branchname) {
                        Post_Office.value = element.Name;
                        Post_Office_Type.value = element.BranchType;
                        District.value = element.District;
                        State.value = element.State;
                        Division.value = element.Division;
                        Delivery_Status.value = element.DeliveryStatus;
                        PIN_Code.value = element.Pincode;

                    }
                });
            });
        };
        const selectedOffice = async (name) => {
            await axios.get('https://api.postalpincode.in/pincode/' + pincode).then((response) => {
                total_post_Office.value = response.data[0].PostOffice;
                postOfficeData.value = response.data[0].PostOffice.filter((values) => values.Name == name.value);

                response.data[0].PostOffice.forEach((element) => {
                    if (element.Name == name) {
                        Post_Office.value = element.Name;
                        Post_Office_Type.value = element.BranchType;
                        District.value = element.District;
                        State.value = element.State;
                        Division.value = element.Division;
                        Delivery_Status.value = element.DeliveryStatus;
                        PIN_Code.value = element.Pincode;
                    }
                });
            });
        };

        searchByPincode();
        return {
            searchByPincode,
            postOfficeData,
            selectedOffice,
            total_post_Office,
            Post_Office,
            Post_Office_Type,
            District,
            State,
            Division,
            Delivery_Status,
            PIN_Code
        };
    }
};
</script>
<style scoped>
@media (max-width: 768px) {
    .flex-container {
        flex-direction: column;
    }

    .firstdiv,
    .seconddiv {
        width: 100%;
    }

    .flex-container {
        display: flex;
        justify-content: space-between;
        width: 134%;
    }
}

.li_class {
    color: #f93;
    margin-left: 10px;
    padding: 3px;
    cursor: pointer;
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

.firstdiv {
    width: 70%;
}

.seconddiv {
    width: 30%;
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
    width: 100%; /* Set the width to 100% for full width in mobile view */
}

.custom-button {
    padding: 10px;
    width: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    background-color: #f93;
    color: #fff;
    margin: 0 auto;
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
    width: 100%; /* Set the width to 100% for full width in mobile view */
    border-collapse: collapse;
    padding: 30px;
    margin: 20px;
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
    color: #000000;
}

table tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
