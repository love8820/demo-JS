var check_gt;
// var email;

function validateName() {
	if (document.getElementById("name1").value.length == 0) {
		document.getElementById('loi_name').innerHTML = "Phải nhập HỌ TÊN !!!"
		document.getElementById("name1").style.backgroundColor = "red";
			$("#q1").click(function() {
                setCaretToPos($("#name1")[0], 0);
            });
			return false;
	}  
	else{
			document.getElementById('loi_name').innerHTML = "";
			document.getElementById("name1").style.backgroundColor = "white";
	}
	return true;
}


function validateAge() {
	if (document.getElementById("age").value.length == 0) {
		document.getElementById("age").style.backgroundColor = "red";
			$("#q1").click(function() {
                setCaretToPos($("#age")[0], 0);
            });
			return false;
	}
	else{
			document.getElementById('loi_age').innerHTML = "";
			document.getElementById("age").style.backgroundColor = "white";
	}
	return true;
}

function validateEmail() {
      var regex_email = /\w{1,}@\w{1,}\.\w{1,}/;
      var p_email = document.getElementById("email").value;
      if (document.getElementById("email").value.length == 0) {
            document.getElementById("email").style.backgroundColor = "red";
                  $("#q1").click(function() {
                  setCaretToPos($("#email")[0], 0);
                  });
            return false;
      }
      else if (regex_email.test(document.getElementById("email").value) == false) {
            document.getElementById("loi_email").innerHTML = "Email sai định dạng !!!";
            document.getElementById("email").style.backgroundColor = "red";
            return false;
      }
      else {
            document.getElementById("loi_email").innerHTML = "";
            document.getElementById("email").style.backgroundColor = "white";
      }
      return true;
}
 
function validatePhone() {
      var regex_phone = /\d{2}-\d{2}-\d{6}/;
      var p_phone = document.getElementById("phone").value;
      if (document.getElementById("phone").value.length == 0) {
            document.getElementById("phone").style.backgroundColor = "red";
                  $("#q1").click(function() {
                  setCaretToPos($("#phone")[0], 0);
                  });
            return false;
      }
      else if (regex_phone.test(document.getElementById("phone").value) == false) {
            document.getElementById("loi_phone").innerHTML = "Phone sai định dạng !!!";
            document.getElementById("phone").style.backgroundColor = "red";
            return false;
      }
      else {
            document.getElementById("loi_phone").innerHTML = "";
            document.getElementById("phone").style.backgroundColor = "white";
      }
      return true;
}

function validateGT1() {
	var checkbox = document.getElementsByName("gender");
	if(checkbox[0].checked == true){
		check_gt = "NAM";
		return true;
	}
	else if (checkbox[1].checked == true){
		check_gt = "NỮ";
		return true;
	}
	else{
		document.getElementById("loi_gt").innerHTML = "Chưa chọn GIỚI TÍNH !!!" ;
	}
	return false;
}


function validate() {
	if(validateName() == true && validateAge() == true && validateEmail() == true && validatePhone() == true && validateGT1() == true && validateCombobox() == false){
			alert( "ĐĂNG KÝ THÀNH CÔNG" );
	}
	else{
		if(validateName() == false){
			document.getElementById("loi_name").innerHTML = "Họ tên trống !!!";
		}
		if(validateAge() == false){
			document.getElementById("loi_age").innerHTML = "Tuổi trống !!!";
		}
		if(validateEmail() == false){
			document.getElementById("loi_email").innerHTML = "Email trống !!!";
		}
		if(validatePhone() == false){
			document.getElementById("loi_phone").innerHTML = "Điện thoại trống !!!";
		}
		if(validateGT1() == false){
			document.getElementById("loi_gt").innerHTML = "Chưa chọn GIỚI TÍNH !!!";
		}
		if(validateCombobox() == true){
			document.getElementById("loi_cbb").innerHTML = "Chưa chọn QUÊ QUÁN !!!";
		}
	}
}



function validateGioiTinh() {
	document.getElementById("loi_gt").innerHTML = "";
}


function kt() {
	document.getElementById("cbb").style.display = "none";
}
   
function validateCombobox() {
	if(document.getElementById("selectCbb").value == 1){
		return true;
	}
	else{
		document.getElementById("loi_cbb").innerHTML = "";
	}
	return false;
}