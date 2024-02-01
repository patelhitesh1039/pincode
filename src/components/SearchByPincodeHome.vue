<template>
    <NavBar />
    <div class="pincode-finder">
        <!-- Include the Navbar component -->
        <div class="flex-container">
            <div class="firstdiv">
                <h2 class="h2class">Find Post office location info with Pincode / PIN code</h2>
                <!-- Move the grey-bg-container outside of input-container to span full width -->
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
                    <div class="single-sidebar">
                        
                        <p align="justify"></p>
                        <h2>Search Pincode / Pin code for any post office location</h2>
                        Get the Pincode and postal office area details here. Just you need to type the arae name to get the postal ( zip
                        code) code and other relevat info.
                        <br />
                        As of 2014, the Indian Postal department has above 1.54 post offices throughout India, of which 85 percent were in
                        rural, Village areas and around 15 percent in urban areas. Indian Postal department has 25,000 departmental Post
                        Offices and other Branch Post Offices in varrious states. Indian goverment Postal department / postal service is
                        also involved in other services like small-savings banking and financial services schemes.
                        <br />
                        <br />
                        <h3>Need of Pincode in Postal service department</h3>
                        The postal service is comes under essential service, linked with Department of Posts, which is part of the Ministry
                        of Communications and Information Technology of the Government of India. Indian Postal zones has been divided into
                        22 postal circles, each circle headed by a chief postmaster general. Each circle is divided into regions, headed by
                        a postmaster general and comprising field units known as divisions. These divisions are further divided into
                        subdivisions. Other functional units (such as circle stamp depots, postal store depots and mail motor service) may
                        exist in the circles and regions. In addition to the 22 circles, there is a base circle to provide postal services
                        to the Armed Forces of India. The base circle is headed by a Director General, Army Postal Service (with a rank of
                        major general).
                        <br />
                        <br />
                        <h2>Post office info / Pincode data for following states</h2>
                        Andhra Pradesh, Assam, Bihar, Chattisgarh, Delhi, Gujarat, Haryana, Himachal Pradesh, Jammukashmir, Jharkhand,
                        Karnataka, Kerala, Madhya Pradesh, Maharashtra, North Eastern, Orissa, Punjab, Rajasthan, Tamilnadu, Uttar Pradesh,
                        Uttarakhand, West Bengal.
                        <br />
                        <br />
                        <h3>Pincode /PIN code for all districts in India</h3>
                        We have covered post pincode information for all of the states in India namely, Ariyalur, Hardoi, Ernakulam,
                        Kabisuryanagar, Dhamtari, Barmer, Jorhat, Bareilly and Chhatarpur, East Jaintia Hills, Dhanbad, Araria and Buldhana.
                        Find Pincode / PINCODE of any location in Aligarh, Kaimur, Haridwar, Jyotiba Phule Nagar, Betul, Cachar, Dholpur,
                        Jamnagar, Idukki, Etawah, Balasore, Balikuda-Erasama, Begunia and Fatehabad.
                        <br />
                        <br />
                        <h2>Find Pincode Location</h2>
                        Post office address in the pincode location for Alwar, Dabugam, Dausa, Ganderbal, Jamtara and in Aul, Also in
                        Choudwar-Cuttack, Bhind, Darbhanga, Banaskantha, Arwal, Balangir, Bhopal, Bokaro, Jalgaon, Bijepur, Hailakandi,
                        Dibang Valley, Chandabali and Etah.PINCODE and contact phone number for post office Udayagiri, Dibrugarh, Banda,
                        Amritsar, Kanchipuram and pincodes in the district of Firozabad. Pincode is the essential id in the postal
                        departmental system of Firozpur, Gwalior, Chikkaballapur, Jalna, Jeypore, Easty Sikkim, Alappuzha, Doda, Dindori,
                        Bhawanipatna, Jabalpur, Barchana, Amreli, Ambedkar Nagar, Bonai, Hoshiarpur, Hinjili, Ambala, Anantapur, Deoria,
                        Gurdaspur, Bangriposi, Attabira, Agra and Jehanabad. The pincode for post offices in Ganganagar, Chandel, Chilika,
                        Chitradurga, Hazaribagh, Kanniyakumari, Asika, Baramba, Bangalore B.B.M.P(Central), Dhar, Banswara, Basudevpur,
                        Chikmagalur, Barabanki, Hooghly, Bankura, Bastar, Badasahi, Chamarajnagar, and Badgam.
                        <br />
                        <br />
                        The Phone number and contact information of post man / Post master is in Bhubaneswar Central (Madhya), Ahmedabad,
                        Jalpaiguri, Adilabad, Hindol, Jaipur, Athgarh, Karaikal, Jhalawar, Dungarpur, Birmaharajpur, Jayadev, Digapahandi,
                        Jharigam, Cuddalore, Kannauj, Kannur, Golaghat, Baripada, Dima Hasao, Bharuch and Bahraich. Indian Zip code /
                        Pincode for the districts in Kabirdham, Dhemaji, Belgaum, Barpeta, Changlang, Dhubri, Janjgir-Champa, Imphal West,
                        Hanumangarh, Azamgarh, Dewas, Bangalore B.B.M.P(South), Jind, Baghpat, Ahmednagar, Faridkot, Baramulla, Bandipur,
                        Bhiwani, Begusarai and Birbhum.
                        <br />
                        <br />
                        <h3>Post office location wise pincode list in India</h3>
                        Find Pincode for the post office / village list for Bhilwara, Anjaw, Gulbarga, Gurgaon, Jashipur, Daspalla,
                        Chitrakoot, Almora, Gondiya, Kapurthala, Bhanjanagar, Chamba, Bhubaneswar North, Allahabad, Jalaun, Farrukhabad,
                        Jaleswar, Kanpur Nagar, Buxar, Guntur, Guna, Baksa, Brahmagiri, Jhansi, Bagalkot and Gandhinagar in Gujarat. Find
                        the area wise Pincode list for 5-Jyotiba Phule Nagar, Chandni Chowk, Dakshina Kannada, East Singhbhum, Jharsuguda,
                        Ghazipur, Garhwa, Gonda, Darjeeling, Chikiti, Dhamnagar, Hyderabad, Bhatli, Jatani, Biramitrapur, Bhavnagar,
                        Darrang, Bijapur, Ghasipura, Durg, Bhograi, Ekamra Bhubaneswar, Faizabad, Jhajjar, Bhojpur, Kaithal and Fatehgarh
                        Sahib, Kantamal and. East Khasi Hills.
                        <br />
                        <br />
                        Pincode wise location map for Fatehpur, Bhagalpur, Dehradun, Gautam Buddha Nagar, Chhindwara, East Siang, Bikaner,
                        Chitrakonda, Chatra, Cooch Behar, Giridih, Bangalore Rural, Kangra, Anantnag, Aurangabad, Bargarh, Bharatpur,
                        Chittoor, Jashpur, Bissam Cuttack, Bageshwar, Jaisalmer, Kamakhyanagar, Kantabanji, Budaun, Dharmasala, Anuppur,
                        Jhabua, Junagarh, Chandrapur, Bidar and in Bhandara.
                        <br />
                        <br />
                        Download post office pincode database for the all states in india Erode, Anand, Gunupur, Jalore, Jammu, Chandauli,
                        Jaunpur, Ghaziabad, Brajarajnagar, Kamrup, Bijnor, Dimapur, Chhendipada, Gorakhpur, Dhalai, Alirajpur, Baliguda,
                        Gadchiroli, Chhatrapur, Dahod, Banki, Barwani, Kamrup Metro and Aizawl. Map for pincode locations in Champawat,
                        Chennai, Barnala, Dhenkanal, Chamoli, Bathinda, Burhanpur, Dindigul, Gopalpur, Jajpur, Indore, Beed, Damoh,
                        Jhunjhunu, Angul, Dharwad, Davangere, Ashok Nagar, Howrah, Banka, East Godavari, Hoshangabad, East Delhi and Baran.
                        <h3>Find Pincode for any Village / Location</h3>
                        <br />
                        <br />
                        PINCODE of Bangalore B.B.M.P(North), Faridabad, Bishnupur, Dumka, Datia, Dakshin Bastar Dantewada, Bangalore Urban,
                        Dharmapuri, Cuttack Sadar, Hamirpur, Bilaspur, Gadag, Harda, Kadapa, Karanjia, Dangs, Ajmer, Basti, Dhule and
                        Champhai. Post office of Deogarh, Balrampur, Kachchh, Coimbatore, Chittorgarh, Hingoli, Bardhaman, Mon,
                        Churachandpur, Jagatsinghpur, East Garo Hills, Dharmagarh, Kakatpur, Bari in the locations of Binjharpur. The Postal
                        dept has offices in Jalandhar, Gopalganj, Amaravati, Godda, Imphal East, Haveri, Champua, Jamui, Auraiya,
                        Bulandshahr, Bongaigaon and in Goalpara.
                        <br />
                        Search Pincode of any location by using location / area in fo in Fazilka, Dakshin Dinajpur, Hassan, Deoghar, Ballia,
                        Gumla, East Kameng, Barabati-Cuttack, Bhadrak, Athmallik, Boudh, Gaya, Karauli, Bundi, Jodhpur, Akola, Hisar,
                        Bellary, Berhampur, Anandpur, Balaghat, Churu, Bhandaripokhari, Kanpur Dehat and Basta.
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="seconddiv">
                <div class="col-sm-4">
                    <div class="product-inner">
                        <h3>Find Postal Pincode</h3>
                        PIN Code is the postal Identification number used to track the post office locations in India. Its a unique 6 digit
                        code allotted to various parts in the country. First two digits of the PINCODE denote the state information.
                        <br />
                        <br />
                        Postalpincodefor.com is used to find the pincode of any area in India. You can get the Pincode or area by clicking
                        either name or Pincode. We have listed more than lakh postal pincode in postalpincodefor.com.
                        <br />
                        <br />
                        <ul>
                            <li>Find Pincode | PIN CODE</li>
                            <li>Find Post Pincode</li>
                            <li>Post office Location</li>
                            <li>Post office Address</li>
                            <li>Courier Pincode</li>
                            <li>List of Pincodes in a City</li>
                            <li>District wise Pincodes</li>
                        </ul>
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
import axios from 'axios';

export default {
    components: {
        NavBar,
        FooterComponent
    },
    setup() {
        const getPincode = ref('');
        const selectedPincode = ref('');
        const postOfficeData = ref('');
        const searchByPincode = async () => {
            await axios.get('https://api.postalpincode.in/pincode/' + selectedPincode.value).then((response) => {
                if (response.data[0].PostOffice) {
                    postOfficeData.value = response.data[0].PostOffice;
                } else {
                    postOfficeData.value = null;
                }
            });
        };

        return {
            getPincode,
            selectedPincode,
            searchByPincode,
            postOfficeData
        };
    }
};
</script>
<style scoped>
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
    width: 50%;
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
    width: 95%;
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
    background-color: #f93;
    color: #fff;
}
table tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
