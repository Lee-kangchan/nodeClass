const { v4 } = require("uuid");
const pool = require("../../config/dbConfig")


module.exports={
    getUserList: async () => {
        try{
            const conn = await pool.getConnection();
            const query = "select * from t_user";
            const [result] = await conn.query(query)
            conn.release()
            return result
        }catch(error){
            throw error;
        }
    },
    insertUser: async (userInfo) => {
        const {
            user_nm,
            user_desc,
            user_login_id,
            user_login_pw
        } = userInfo
        try{
            const conn = await pool.getConnection();
            const query = 'insert into t_user( user_id, user_nm, user_desc, user_login_id, user_login_pw, created_at, modified_at)'
            +'values(?, ?, ?, ?, ?, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());';
            const [{affactRows:result}] = await conn.query(query, [v4(), user_nm, user_desc, user_login_id, user_login_pw])
            conn.release()
            return result
        }catch(error){
            throw error;
        }
    },
    updateUser: (userInfo) => {

    },
    deleteUser: (userInfo) => {

    }
}