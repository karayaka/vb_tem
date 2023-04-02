<template>
<div>
    <v-toolbar
    color="grey darken-3"
    dense
    app
    dark
    >
    <v-app-bar-nav-icon @click="appStore.togleDrawer()"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Admin Page</v-toolbar-title>
    <VSpacer></VSpacer>
    <div class="mr-5">       
        <v-btn icon @click="appStore.logOut()" >
        <v-icon>mdi-logout-variant</v-icon>
        <span left>Çıkış</span>
        </v-btn>
    
    </div>
    </v-toolbar>
</div>
</template>
<script lang="ts" setup>
import {useAppStore} from '@/store/app'
const appStore=useAppStore();

</script>