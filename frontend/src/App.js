
import './App.css';
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';
import {useState} from 'react';
function App() {
  
  const [useName, setuserName] = useState("hello");
  const [userDesc, setUserDesc] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const onClickUserRegist = async () =>{
    alert("name : "+useName+"\n"
        +"Id:"+ userId+ "\n"
        +"desc:"+ userDesc+ "\n" 
    )
    try{
      var data = await fetch('http://localhost:4000/user', {
        method: 'post',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          "user_nm": useName,
          "user_desc": userDesc,
          "user_login_id": userId,
          "user_login_pw": userPw
        })
      })
    }catch(e){
      console.log('오류발생: $(e)')
    }
  }

  return (

    <div className='app-container' >

<div>
    <TextField label= "유저 이름" id="standard" variant="standard" fullWidth value={useName}
      onChange= {(e) => setuserName(e.target.value)}
    />
    </div>
    <div>
    <TextField label= "유저 설명" id="standard"  variant="standard" fullWidth
    value={userDesc}
    onChange= {(e) => setUserDesc(e.target.value)}
    />
    </div>
    <div>
    <TextField label= "유저 아이디" id="standard"  variant="standard" fullWidth
    value={userId}
    onChange= {(e) => setUserId(e.target.value)}
    />
    </div>
    <div>
    <TextField label= "유저 비밀번호" id="standard" variant="standard" fullWidth
    value={userPw}
    onChange= {(e) => setUserPw(e.target.value)}
    />
    </div>
    <div>
      <Button fullWidth onClick= {()=> {onClickUserRegist()}}>회원가입</Button>
    </div>
    </div>
  );
}

export default App;
