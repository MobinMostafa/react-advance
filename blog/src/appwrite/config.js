import conf from "../conf/conf";
import { Client,ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    database
    bucket
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            await this.database.createDocument(
                  conf.appwriteDatabaseId,
                  conf.appwriteCollectionId,
                  slug,
                  {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                  }
            )
        } catch (error) {
            console.log("appwerite servive create post: ", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error)
        }
    }
    async deletePost(slug){
        try {
           await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error)
            return false
        }

    }
    async getPost(slug) {
           try {
               return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
               )
           } catch (error) {
            console.log(error)
           }
    }
    async getPosts ( queries = [Query.equal("status", "active")]) {
         try {
             return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries 
             )
         } catch (error) {
             console.log(error)
         }  
    }
    // file 
    async createFile(file){
       try {
          return await this.database.createFile(
              conf.appwriteBuckedId,
              ID.unique(),
              file
          )
       } catch (error) {
          console.log("create file error",error)
       }
    }
       // file upload service

       async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBuckedId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }
    async deleteFile(fileId){
        try {
          await this.bucket.deleteFile(
            conf.appwriteBuckedId,
            fileId
          )
          return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    getFilePreview(fileId){  
         return this.bucket.getFilePreview(
            conf.appwriteBuckedId,
            fileId
            )
    }


}

const service = new Service()

export default service
