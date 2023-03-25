// Utilities
import { defineStore } from 'pinia'
import LoginModel from '@/models/security_models/login_model'

export const useSecurity = defineStore('security', {
  state: () => ({
    user:{} as LoginModel,
    loading:false,
    error: false,
    hidePassword: true as Boolean,
    rules: {
        required: (value:string|null) => !!value || 'Zorunlu Alan.'
    }
  }),
  actions:{
    async login(){
        console.log(this.user.user_name);
    },
  }
})
