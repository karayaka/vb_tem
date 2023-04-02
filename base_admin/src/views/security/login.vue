<template>
   <v-container>
       <v-row align="center" justify="center" >
           <v-col cols="12" sm="10">
             <v-card class="elevation-6 mt-10"  >
              <v-window v-model="step">
                 <v-window-item :value="1">
                   <v-row>
                     <v-col cols="12" md="6">
                       <v-card-text class="mt-12">
                         <h1
                           class="text-center"
                         >Giriş</h1>
                         
                         <v-row align="center" justify="center">
                           <v-col cols="12" sm="8">                            
                           <v-text-field
                             label="Email"
                             outlined
                             dense
                             color="blue"
                             autocomplete="false"
                              class="mt-16"
                           />
                           <v-text-field
                             label="Şifre"
                             outlined
                             dense
                             color="blue"
                             autocomplete="false"
                             type="password"
                           />
                             <v-row>
                               <v-col cols="12" sm="7">
                                 <v-checkbox
                        
                         label="Beni Hatırla!"
                         class="mt-n1"
                         color="blue"
                       > </v-checkbox>
                               </v-col>
                               <v-col cols="12" sm="5">
                                 <span  class="caption blue--text">Parolamı Unuttum!</span>
                               </v-col>
                             </v-row>
                           <v-btn color="blue" dark block tile>Giriş</v-btn>
                           </v-col>
                         </v-row>  
                       </v-card-text>
                     </v-col>
                     <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                     <div style="  text-align: center; padding: 180px 0;">
                       <v-card-text class="white--text" >
                         <h3 class="text-center ">Kayıt olmdınız mı?</h3>
                       </v-card-text>
                       <div class="text-center">
                         <v-btn tile outlined dark @click="step++">Kayıt Ol</v-btn>
                       </div>
                       </div>
                     </v-col>
                   </v-row>
                 </v-window-item>
                 <v-window-item :value="2">
                   <v-row >
                     <v-col cols="12" md="6" class="blue rounded-br-xl">
                      <div style="  text-align: center; padding: 180px 0;">
                       <v-card-text class="white--text" >
                         <h3 class="text-center ">Kayıtlımısın?</h3>
                       </v-card-text>
                       <div class="text-center">
                         <v-btn tile outlined dark @click="step--">Giriş Ekranı</v-btn>
                       </div>
                       </div>
                     </v-col>
 
                     <v-col cols="12" md="6">
                       <v-card-text class="mt-12">
                         <h1
                           class="text-center"
                         >Kayıt Ol</h1>
                         
                         <v-row align="center" justify="center">
                           <v-col cols="12" sm="8">
                            <v-row>
                            <v-col cols="12" sm="6">
                             <v-text-field
                             label="Ad"
                             outlined
                             dense
                             color="blue"
                             autocomplete="false"
                            class="mt-4"
                           />
                            </v-col>
                            <v-col cols="12" sm="6">
                             <v-text-field
                             label="Soyad"
                             outlined
                             dense
                             color="blue"
                             autocomplete="false"
                            class="mt-4"
                           />
                            </v-col>
                            </v-row>
                           <v-text-field
                             label="Email"
                             outlined
                             dense
                             color="blue"
                             autocomplete="false"
                           />
                           <v-text-field
                             label="Şifre"
                             outlined
                             dense
                             color="blue"
                           autocomplete="false"
                            type="password"
                           
                           />
                             <v-row>
                               <v-col cols="12" sm="7">
                                 <v-checkbox
                        
                         label="I Accept AAE"
                         class="mt-n1"
                         color="blue"
                       > </v-checkbox>
                               </v-col>
                               <v-col cols="12" sm="5">
                                 <span class="caption blue--text ml-n4">Terms &Conditions</span>
                               </v-col>
                             </v-row>
                           <v-btn color="blue" dark block tile>Sign up</v-btn>
                      
                           </v-col>
                         </v-row>  
                       </v-card-text>
                     </v-col>
                   </v-row>
                 </v-window-item>
               </v-window>
             </v-card>
           </v-col>
       </v-row>
   </v-container>
 </template>
<script lang="ts" setup>
import {useAppStore} from '@/store/app'
import {ref} from 'vue'
const store=useAppStore()
const step=ref(1);

</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>