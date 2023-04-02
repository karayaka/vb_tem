// Utilities
import { defineStore } from 'pinia'
import LoginModel from '@/models/security_models/login_model'

export const useAppStore = defineStore('app', {
  state: () => ({
    togleValue:false as boolean,
    user:{} as LoginModel,
    loading:false,
    error: false,
    hidePassword: true as Boolean,
    rules: {
        required: (value:string|null) => !!value || 'Zorunlu Alan.'
    }
  }),
  actions:{
    togleDrawer():void{
      this.togleValue=!this.togleValue;
    },
    logOut(){
      //logout işleleriyapılacak
    },
    async login(){
      console.log(this.user.user_name);
    },
  }
  
})
