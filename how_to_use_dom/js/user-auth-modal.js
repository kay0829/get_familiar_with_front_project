//사용자명은 2자 이상 10자 이하이어야 합니다.
const userAuthName = document.querySelector('#userAuthName');

const guideMsgId = document.querySelector('.guide-msg-id');

userAuthName.onkeyup = function (e) {
    if (!isMoreThan2Length(userAuthName.value)) {
        //빨간 글자로 바꾸고 입력을 막는다
        guideMsgId.classList.add('red')
    } else if (!isLessThan10Length(userAuthName.value)) {
        guideMsgId.classList.add('red')
    }else {
        guideMsgId.classList.remove('red')
    }
}
function isMoreThan2Length(value) {
    return value.length >= 2;
}

function isLessThan10Length(value) {
    return value.length <= 10;
}
// e.target.value
// userAuthName.value = userAuthName.value.slice(0,10) 사용
// if(userAuthName.value > 10){
//     userAuthName.value = userAuthName.value.slice(0,10)
// }