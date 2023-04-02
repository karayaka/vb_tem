<template>
    <v-app>
        <CustomAppBar></CustomAppBar>
        <CustomDrawer></CustomDrawer>
        <router-view></router-view>  
    </v-app>

</template>

<script lang="ts" setup>
import CustomAppBar from "@/components/CustomToolBar.vue";
import CustomDrawer from "@/components/CustomDrawer.vue";


</script>