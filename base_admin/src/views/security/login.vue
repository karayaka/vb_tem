<template>
   <v-main>
      <v-container class="col-md-4 col-sm-6" align-center justify-center>
         <v-card>
         <v-toolbar
               color="grey darken-3"
               dense
               dark
         >
         <v-toolbar-title>GİRİŞ</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
               <div class="layout column align-center">
                  <img src="@/assets/logo.png" alt="Vue Material Admin" width="150" height="150">
                  <h1 class="flex my-4 primary--text">Mobil App Panel</h1>
               </div>
               <v-form class="my-3">
                  <v-text-field            
                  name="login"
                  label="Email/Kullanıcı Adı"
                  append-outer-icon="mdi-clipboard-account"
                  type="text"
                  v-model="store.user.user_name"
                  :error="store.error"
                  :rules="[store.rules.required]"/>
                  <v-text-field
                  :type="store.hidePassword ? 'password' : 'text'"            
                  name="password"
                  label="Şifre"
                  id="password"
                  :rules="[store.rules.required]"
                  v-model="store.user.password"
                  :error="store.error"
                  :append-icon="store.hidePassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  @click:append="store.hidePassword = !store.hidePassword"/>
               </v-form>
         </v-card-text>
         <v-card-actions class="justify-end">              
               <v-btn color="primary" @click="store.login()" :loading="store.loading">GİRİŞ</v-btn>
         </v-card-actions>
         </v-card>  
      </v-container>
   
   </v-main>
       
   </template>
<script lang="ts" setup>
import {useSecurity} from '@/store/security_store';

const store=useSecurity()

</script>