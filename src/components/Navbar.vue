<template>
    <nav class="navbar">
      <ul>
        <li><router-link :class="path == 'HomeComponent' ? 'active_Class' : ''" to="/">HOME</router-link></li>
        <li>
          <router-link :class="path == 'SearchByPincode' || path == 'SearchByPincodePost' ? 'active_Class' : ''" to="/Search-By-Pincode">
            FIND PINCODE
          </router-link>
        </li>
        <li>
          <router-link :class="path == 'SearchByBranch' || path == 'SearchByBranchPost' ? 'active_Class' : ''" to="/Search-By-Branch">
            FIND AREA
          </router-link>
        </li>
        <li><router-link :class="path == '/as' ? 'active_Class' : ''" to="/Search-By-Branch">POST OFFICE</router-link></li>
        <li><router-link :class="path == '/as' ? 'active_Class' : ''" to="/Search-By-Branch">FAQ</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  
  export default {
    name: 'NavBar',
    beforeRouteUpdate(to, from, next) {
      // Extract the previous route path
      const previousRoutePath = from.path;
      console.log(previousRoutePath, 'previousRoutePath');
      // Continue with the route update
      next();
    },
    setup() {
      const route = useRoute();
  
      const path = computed(() => route.name);
  
      return {
        path
      };
    }
  };
  </script>
  
  <style scoped>
  .active_Class {
    background-color: green;
    padding: 20px;
  }
  
  .navbar {
    background-color: #f93;
    color: #fff;
    padding: 2px 0;
  }
  
  .navbar ul {
    list-style: none;
    padding: 15px;
    display: flex;
    justify-content: center; /* Center the navigation links horizontally */
    margin: 0;
  }
  
  .navbar li {
    margin: 0 10px;
    color: #fff;
  }
  
  .navbar a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .navbar a:hover {
    color: blue; /* Change the color on hover */
  }
  
  /* Media query for responsiveness */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column; /* Change to a column layout on smaller screens */
      align-items: center; /* Center the navigation links vertically */
    }
  
    .navbar li {
      margin: 10px 0; /* Add vertical spacing between navigation links */
    }
  
    .navbar a {
      color: #000; /* Set a different text color for links */
      padding: 10px; /* Add padding to the navigation links for touch-friendly targets */
      display: block; /* Make the links full-width to improve touch interactions */
      text-align: center; /* Center the text for each link */
    }
  
    .active_Class {
      background-color: green;
    }
  }
  </style>
  