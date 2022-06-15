//src > redux > modules > user.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteCookie, setCookie, getCookie } from "../../shared/Cookie";

//axios
//회원 정보 저장하기 post signupDB //axios.post(url[, data[, config]])
export const signupDB = (userinfo) => {
  return async function (dispatch) {
    try {
      await axios
        .post(
          "http://localhost:5001/users",
          userinfo, //email, nickname, pw 정보 담겨 있음.
          /*, {headers: {'Authorization': '내 토큰 보내주기'}}*/
          { withCredentials: true }
        )
        .then((request) => {
          // console.log(request.data);
          dispatch(userCREATE(request.data));
          alert("회원가입 성공");
        });
    } catch (error) {
      console.log("failed", error);
      alert("중복 확인이 필요합니다");
    }
  };
};
//ID(email) 중복 확인 emailcheckDB
export const emailcheckDB = (email) => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/users")
      .then((response) => {
        const result = dispatch(hasEMAIL(response.data)); //true(사용가능) or false(중복)
        // console.log(result);
        if (result === false) {
          alert("가입된 이메일입니다");
        } else {
          alert("사용 가능합니다");
        }
      })
      .catch((err) => {
        console.log("err확인" + err);
      });
  };
};

//nickname 중복 확인 nicknamecheckDB
export const nicknamecheckDB = (nickname) => {
  return async function (dispatch) {
    axios
      .get("http://localhost:5001/users")
      .then((response) => {
        const result = dispatch(hasNICKNAME(response.data)); //true(사용가능) or false(중복)
        console.log(result);
        if (result === false) {
          alert("사용 중인 닉네임입니다. 다른 닉네임을 사용해주세요");
        } else {
          alert("사용 가능합니다");
        }
      })
      .catch((err) => {
        console.log("err확인" + err);
      });
  };
};

//회원 찾기 (로그인) 서버에 email(id), pw를 제공(request)하고 유저 정보와 토큰을 받아 저장.
export const loginDB = (loginUserinfo) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5001/users", loginUserinfo, {
        //email, pw 정보 담김.
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        localStorage.setItem("refreshToken", response.data["refreshToken"]);
        setCookie("accessToken", response.data["accessToken"]);
        dispatch(userLOGIN({ is_login: true }));
      })

      .catch((error) => {
        console.log("failed", error);
      });
  };
};

// 로그아웃
export const Logout = () => {
  return function (dispatch) {
    deleteCookie("token");
    localStorage.removeItem("refreshToken");
    dispatch(userLOGOUT());
    const logOutInfo = {
      is_login: false,
    };
  };
};

// 로그인 유지

//action, action function, reducer
export const User = createSlice({
  name: "users",
  initialState: {
    list: [{ email: null, nickname: null, is_login: false }],
  },
  reducers: {
    //회원 정보 저장
    userCREATE: (state, action) => {
      state.list = action.payload;
      // console.log(state.list); // {email: "", nickname: "", pw: "" }
    },
    //회원 정보 불러오기
    userLOGIN: (state, action) => {
      state.list = action.payload;
    },
    //ID(email) 중복 확인
    hasEMAIL: (state, action) => {
      state.list = action.payload;
    },
    //nickname 중복 확인
    hasNICKNAME: (state, action) => {
      state.list = action.payload;
    },
    //로그아웃
    userLOGOUT: (state, action) => {
      state.list = action.payload;
    },
  },
});

// console.log("test", signupUser);
// action creator export
const actionCreators = {
  signupDB,
  loginDB,
};

export { actionCreators };

export const { userCREATE, userLOGIN, hasEMAIL, hasNICKNAME, userLOGOUT } =
  User.actions;
export default User.reducer;
