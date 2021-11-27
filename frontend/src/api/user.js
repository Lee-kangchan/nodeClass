const CREATE_USER_API = "http://localhost:4000/user"


const user = {
    create :  (parameter) => {
        console.log("api")
        return  fetch(CREATE_USER_API,{
            method: "post",
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(parameter)
        })
    },
    get: () => {

    },
    getList: () => {

    },
    delete: () => {

    }
}
export default user;