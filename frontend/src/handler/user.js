import UserApi from '../api/user'
const SUCCESS = 200;
const FAIL = 500;

const user ={
    create: async (param) => {
        try {
            console.log("Handler")
            let apiResult = await UserApi.create(
                {
                    "user_nm" : param.useName,
                    "user_desc" : param.userDesc,
                    "user_login_id": param.userId,
                    "user_login_pw": param.userPw,
                }
            );
            const {status} = apiResult;
            if(status === SUCCESS){
                return true;
            }
        }catch(e){
            console.log("회원가입 실패")
            return false;
        }
        return true;
    }
}
export default user;