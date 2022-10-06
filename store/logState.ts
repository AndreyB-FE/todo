import {makeAutoObservable} from 'mobx';

class logState{
    user='';
    isLogged = false;
    constructor(){
        makeAutoObservable(this);
    }

    logIn(user:string,password:string){
        if(user === 'root' && password==='1234'){this.isLogged =  true;this.user = user;}
    }
    
}

export default new logState;    