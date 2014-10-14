//define functions and global variables here...
var siteloc = "http://localhost/PLDT";
var scriptloc = "/scripts/";

$(document).ready(function () {
	$("#bill-page").attr("class","tab-pane fade in active");
	$("#inputpage").attr("class","tab-pane fade");	
	$("#pldt-acc-display").val("hey");
	$('#form-input').validate({
        rules: {
            PLDTaccountnumber: {                
                required: true                
            },
			BANKaccountnumber: {
				required: true,
				
			},			
        },
      
        highlight: function (element) {
            $(element).closest('.controls').addClass('has-error');
        },
        success: function (element) {
            $(element).closest('.controls').removeClass('has-error');
        }
    });
});
  

function getBill()
{  	
	$.ajax({
      url: siteloc + scriptloc + "getbill.py",
      data: {pldtNum:$("#PLDTaccountnumber").val()},
      dataType: 'json',
	  async: true,
      success: function (res) {					
				$("#pldt-acc-display").val("hey");
				
            }
    });
	$("#bill-page").attr("class","tab-pane fade in active");
	$("#inputpage").attr("class","tab-pane fade");	
}