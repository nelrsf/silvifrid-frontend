export interface Iauth {
    faceBookLogIn:()=>Promise<any>;
    twitterLogIn:()=>Promise<any>;
    googleLogin:()=>Promise<any>;
    emailPasswordLogIn:(email:string, password:string)=>Promise<any>;
    emailPasswordSignIn:(email:string, password:string)=>Promise<any>;
}
