import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account

    constructor(){
        this.client
              .setEndpoint(conf.appwriteUrl)
              .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client)
        
    }

    async createAccount({name,email, password}){
        try {
           const userAccount = await this.account.create(ID.unique(), name, email, password)
             if(userAccount){
                return this.login({email, password})
             }else{
                return userAccount
             }
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error)
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSession()
        } catch (error) {
            console.log("log out error :", error)
        }
    }

}

const authService = new AuthService()

export default authService