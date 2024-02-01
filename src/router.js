import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import SearchByPincode from './components/SearchByPincode.vue';
import SearchByPincodePost from './components/SearchByPincodePost';
import SearchByBranchPost from './components/SearchByBranchPost.vue';

import SearchByBranch from './components/SearchByBranch';

const routes = [
  { path: '/Search-By-Pincode', name: 'SearchByPincode', component: SearchByPincode },
  { path: '/', name: 'HomeComponent', component: HomeComponent },
  { path: '/Search-By-Branch', name: 'SearchByBranch', component: SearchByBranch },
  { path: '/Search-By-Pincode-Post/:pincode/:branchname', name: 'SearchByPincodePost',component: SearchByPincodePost },
  { path: '/Search-By-Branch-Post/:pincode/:branchname', name: 'SearchByBranchPost', component: SearchByBranchPost },



  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
