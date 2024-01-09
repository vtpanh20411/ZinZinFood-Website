
function ValidateEmail() {

    var input = document.getElementById("input-email").value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
  
      alert("Đăng ký thành công!");
  
    //   document.getElementById("input-email").focus();
  
      return true;
  
    } else {
  
      alert("Địa chỉ email không hợp lệ!");
  
    //   document.getElementById("input-email").focus();
  
      return false;
  
    }
  
  }

