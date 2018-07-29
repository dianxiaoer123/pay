

toastr.options = {
  "closeButton": false,
  "debug": false,
  "positionClass": "toast-top-center",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

$().ready(function(){
  $("#loginform").validate({

    errorPlacement: function(error, element) {
      error.appendTo(element.parent());
    },
    highlight: function(element, errorClass) {
      $(element).parent().addClass("has-error");
      $(element).parent().children("i").addClass("fa-times");
      $("#loginBtn").attr("disabled","true");
    },
    unhighlight: function(element, errorClass) {
      $(element).parent().removeClass("has-error");
      $(element).parent().addClass("has-success");
      $(element).parent().children("i").removeClass("fa-times");
      $(element).parent().children("i").addClass("fa-check");
      $("#loginBtn").removeAttr("disabled");
    },
    errorElement: "span",
    messages: {
      loginPassword: {
      required: "请输入密码",
      minlength: "密码长度不能小于 8 个字母"
      }
    }

  });

  $("#logout").click(function(){
	  window.location.href=ROOT_PATH+"/login/logout";
	  });

	  $("#loginBtn").click(function(){
		  ajax({
			  type: "POST",
	        	url:  ROOT_PATH+"/login/authLogin",
	        	dataType: "json",
	        	data:{
	    	    	account : $("#loginEmail").val(),
	    	    	password : $("#loginPassword").val(),
	    	    	verifycode : $("#verifycode").val(),
	    	      },
	        	success: function(data){
	        		if(data.ret > 0){
	      	          toastr.success(data.message);
	      	          setTimeout(function(){
	      							window.location.href=ROOT_PATH+"/myCounter";
	      						}, 2000);
	      	        }else{
	      	        	$("#img").click();
	      	          toastr.error(data.message);
	      	        }	
	        	}
		  });
	  });  
	});

function toDecimal2(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x*100)/100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

function isPaysHelpWebview() {
  var ua = navigator.userAgent.toLowerCase();
  _long_matches = 'paysapiwebview';
  _long_matches = new RegExp(_long_matches);
  if (_long_matches.test(ua)) {
      return 1;
  }
  return 0;
}

function trim(str){ //删除左右两端的空格
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
