//사용자명은 2자 이상 10자 이하이어야 합니다.
const userAuthName = document.querySelector('#userAuthName');
const userAuthPw = document.querySelector('#userAuthPw');

const guideMsgId = document.querySelector('.guide-msg-id');
const guideMsgPw = document.querySelector('.guide-msg-pw');

const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

//아이디 조건 확인
userAuthName.onkeyup = function (e) {
    if (!isMoreThan2Length(userAuthName.value)) {
        //빨간 글자로 바꾸고 입력을 막는다
        guideMsgId.classList.add('red')
    } else {
        guideMsgId.classList.remove('red')
    }
}
//비밀번호 조건 확인
userAuthPw.onkeyup = function (e) {
    if (!isMoreThan8Length(userAuthPw.value) && !reg.test(userAuthPw.value)) {
        //빨간 글자로 바꾸고 입력을 막는다
        guideMsgPw.classList.add('red')
    } else {
        guideMsgPw.classList.remove('red')
    }
}
function isMoreThan2Length(value) {
    return value.length >= 2;
}

function isMoreThan8Length(value) {
    return value.length >= 8;
}


