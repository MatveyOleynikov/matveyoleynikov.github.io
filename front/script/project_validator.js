
class ProjectValidator{
    loginValidate = '^[a-zA-Z0-9-_]{3,20}$'
    passwordValidate = '^[a-zA-Z0-9-_]{3,20}$'

    isLogin(str){
    
        if (!str || typeof str != 'string'){
            return false;
        }
        
        const regexp = new RegExp(this.loginValidate);

        return regexp.test(str)
    }

    isPassword(str){
  
        if (!str || typeof str != 'string'){
            return false;
        }
        
        const regexp = new RegExp(this.loginValidate);

        return regexp.test(str);
    }

}

const projectValidator = new ProjectValidator();
export {projectValidator};