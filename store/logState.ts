import {makeAutoObservable} from 'mobx';

class logState{
    user={};
    isLogged = false;
    constructor(){
        makeAutoObservable(this);
    }

    logIn(user:object){
        this.isLogged =  true;
        this.user = user;
    }
    
}

export default new logState;    