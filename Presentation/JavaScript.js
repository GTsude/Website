function submitform()
{
	var $myForm = document.getElementById("myForm");
	$('<input type="submit" name="submit">').hide().appendTo($myForm).click().remove();
}
/*************************************************************/
function logout()
{
	window.location='user_section/logout.php';
}
function myaccount()
{
	window.location="user_section/user.php";
}
function addpicture(formid)
{							
	var $myForm = document.getElementById(formid);
	$('<input onchange="submitform();" name="imgname" id="picloc" type="file" />').hide().appendTo($myForm).click();
}
/*************************************************************/
function checkdeposit()
{
	alert("please first login");
}
/**********************************************************/
function stopRKey(evt)
{ 
    var evt = (evt) ? evt : ((event) ? event : null); 
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
    if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
} 
	document.onkeypress = stopRKey; 


/****************************************************************************************  *************************/		
function updatetime()
{
	var edit_time=false;
	if(window.XMLHttpRequest)
	{
		edit_time=new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		edit_time=new ActiveXObject("microsoft.XMLHTTP");
	}
	if(edit_time)
	{
		edit_time.open("GET","time.php");
		edit_time.onreadystatechange=function()
		{
			if(edit_time.readyState==4 && edit_time.status==200)
			{
			}
		}
		edit_time.send(null);
	}
}
			
function messageSeen()
{
	var msg_seen=false;
	if(window.XMLHttpRequest)
	{
		msg_seen=new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		msg_seen=new ActiveXObject("microsoft.XMLHTTP");
	}
	if(msg_seen)
	{
		msg_seen.open("GET","messageCount.php");
		msg_seen.onreadystatechange=function()
		{
			if(msg_seen.readyState==4 && msg_seen.status==200)
			{
				//alert(ob.responseText);

				if(msg_seen.responseText==1)
				{
					document.getElementById('msgseen').innerHTML = "";
					document.getElementById('msgseen').style.display = "none";
				}
				if(msg_seen.responseText==0)
				{
					document.getElementById('msgseen').style.display = "none";
				}
				else
				{
					document.getElementById('msgseen').innerHTML = msg_seen.responseText+"new messages";
				}
			}
		}
		msg_seen.send(null);
	}
}
/****************************************************************************************************************/	
			
			var allsound = "true";

			function disableMute()
			{
				allsound = "false";
				document.cookie = "allsound="+allsound;
			}


			function enableMute()
			{
				allsound = "true";
				document.cookie = "allsound="+allsound;
			}


		/* *********START************ */
		function getCookie(c_name) {

		    if (document.cookie.length > 0) {
		        c_start = document.cookie.indexOf(c_name + "=");
		        if (c_start != -1)
		        {
		            c_start = c_start + c_name.length + 1;
		            c_end = document.cookie.indexOf(";", c_start);
		            if (c_end == -1) 
		            {
		                c_end = document.cookie.length;
		            }
		           // alert(unescape(document.cookie.substring(c_start, c_end)));
		            return unescape(document.cookie.substring(c_start, c_end));
		        }
		    }
		    return "";
		}

			function colorGet()
			{   
				var x = document.getElementById('cop');
				var x1 = document.getElementById('cop4');
				var x2 = document.getElementById('cop1');
				var x3 = document.getElementById('cop2');
				var x4 = document.getElementById('cop3');
				var x5 = document.getElementById('cop5');
				 

				x.style.color = "#9d9d9d";
				x1.style.color = "#9d9d9d";
				x2.style.color = "#9d9d9d";
				x3.style.color = "#9d9d9d";
				x4.style.color = "#9d9d9d";
				x5.style.color = "#9d9d9d";
				 
			}

			var timoutNow = 1680000; //840000  (14 minutes)
			var timeoutTimer;

			function StartTimers() 
			{
			    timeoutTimer = setTimeout("IdleTimeout()", timoutNow);
			}

			

			function ResetTimers()
		 	{
			    clearTimeout(timeoutTimer);
			    StartTimers();
			}

			function IdleTimeout() 
			{
			    location.href="logout.php";
			}


			var timoutNow1 = 1680000; //840000  (14 minutes) 
			var timeoutTimer1;
			function StartTimers1() 
			{ 
				if(getCookie("allsound")=="true")
				{
					$("#s2").hide();
					$("#s1").show();
				}
				else
				{
					$("#s2").show();
					$("#s1").hide();
				}
			    timeoutTimer1 = setTimeout("IdleTimeout1()", timoutNow);
			}


			function IdleTimeout1() 
			{
			    location.href="user_section/logout.php";
			}


			function ResetTimers1()
			 {
			    clearTimeout(timeoutTimer1);
			    StartTimers1();
			}
			
	/*****************************************************************************************************************/		
			 function register()
			{
		 
				var uname = document.getElementById("uname").value;
				var pass = document.getElementById("pass").value;
				var cpass = document.getElementById("cpwd").value;
				var emaill = document.getElementById("emaill").value;
				var pic = document.getElementById("pic").value;
				
				if(pic=='')
				{
			    alert('please choose any image');
					return;
				}
				
				if(uname=='')
				{
			   	alert('please enter username');
					return;
				}
				
				if(uname.length<5)
				{
				alert('Length of username should be max or equal to 5');
					return;
				}
				
				if(pass=='')
				{
				alert('please enter password');
					return;
				}
				
				if(pass.length<7)
				{
				alert('Length of password should be max or equal to 7');
					  return;
			    }
				
				if(cpass=='')
				{
					alert('please enter confirm password');
					return;
				}
					
					if(cpass.length<7)
				{
				alert('Length of confirm password should be max or equal to 7');
			    return;
				}
				
				if(pass!=cpass)
				{
					alert('passwords must match');
					return;
				}
				
				if(emaill=='')
				{
					alert('please enter email');
					return;
				} 
					
					var x = document.forms["myform"]["email"].value;
                    var atpos = x.indexOf("@");
                    var dotpos = x.lastIndexOf(".");
                     if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
                    {
                      alert("Not a valid e-mail address");
                      return false;     
                    }
                    myform.submit();
            }


/*****************************************************************************************************************/
function usernamecheck()
{
		var uname = document.getElementById('uname').value;
		var usernamecheck=false;
		if(window.XMLHttpRequest)
		{
			usernamecheck=new XMLHttpRequest();
		}
		else if(window.ActiveXObject)
		{
			usernamecheck=new ActiveXObject("microsoft.XMLHTTP");
		}

		if(usernamecheck)
		{
			usernamecheck.open("GET","usernamecheck.php?uname="+uname+"&id=1");
			usernamecheck.onreadystatechange=function()
			{
			if(usernamecheck.readyState==4)
			{
				document.getElementById('output1').innerHTML=usernamecheck.responseText;
			}
			}
			usernamecheck.send(null);
		}
	
}
/*****************************************************************************************************************/

function emailcheck()
{
	var email = document.getElementById('emaill').value;
	var emailcheck=false;
	if(window.XMLHttpRequest)
	{
		emailcheck=new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		emailcheck=new ActiveXObject("microsoft.XMLHTTP");
	}	
	if(emailcheck)
	{
		emailcheck.open("GET","usernamecheck.php?email="+email+"&idd=2");
		emailcheck.onreadystatechange=function()
		{
		if(emailcheck.readyState==4)
		{
			document.getElementById('output2').innerHTML=emailcheck.responseText;
		}
		}
		emailcheck.send(null);
	}
	
}

/*****************************************************************************************************************/
function edit()
{
	var uid = document.getElementById('uidd').value;
	var password = document.getElementById('passw').value;
	var contact = document.getElementById('contac').value;
	var country = document.getElementById('coun').value;
	var state = document.getElementById('stat').value;
	var city = document.getElementById('cty').value;
	var address = document.getElementById('add').value;

	if(password=='')
	{
		alert('password must be enter');
		return;
	}

	if(password.length<7)
	{
	alert('Length of password should be greater or equal to 7');
	return;
	}

	if(contact.length<10)
	{
	alert('contact must be 10');
	return;
	}

	if(/[a-z]/.test(contact))
	{
	alert('this format of contact not acceptable');
	return;
	}
	if(/[0-9]/.test(country))
	{
	alert('this format of country not acceptable');
	return;
	}
	if(/[0-9]/.test(state))
	{
	alert('this format of  state not acceptable');
	return;
	}
	if(/[0-9]/.test(city))
	{
	alert('this format of  city not acceptable');
	return;
	}
	f.submit();
	}
/*****************************************************************************************************************/
function showpass(a)
{
	var pass=false;
	if(window.XMLHttpRequest)
	{
		pass=new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		pass=new ActiveXObject("microsoft.XMLHTTP");
	}	

		if(pass)
		{
			pass.open("GET","showpass.php?id="+a);
			pass.onreadystatechange=function()
			{
			if(pass.readyState==4)
			{
				document.getElementById('outpass').innerHTML=pass.responseText;
			}
			}
			pass.send(null);
		}

}
/****************************************************************************/
function logcheck(){
var emauser = document.getElementById("emauser").value;
			var pwd = document.getElementById("password").value;

 if(emauser=='' ||emauser==null){
alert("please enter username/email");
return;
}
if(pwd=='' || pwd==null){
alert("please enter password");
return ;
}
f.submit();
}
function adminlogcheck(){
var adminu = document.getElementById("admin_name").value;
			var pwd = document.getElementById("admin_pass").value;

 if(adminu=='' ||adminu==null){
alert("please enter username/email");
return;
}
if(pwd=='' || pwd==null){
alert("please enter password");
return ;
}
f.submit();
}

function bet(a)
{  
	document.getElementById('chkl').disabled=true;
	 var a = document.getElementById('amountbet').value; 

	if(a=='')
	{
		alert('please enter amount');
		document.getElementById('chkl').disabled=false;
		 //document.getElementById('btn1').removeAttribute("disabled");
		return;
	}
  k = a.search("k");
	m = a.search("m");
	b = a.search("b");
	d = a.search("0");

	K = a.search("K");
	M = a.search("M");
	B = a.search("B");

	
	if(k==-1 && m==-1 && b==-1 && K==-1 && M==-1 && B==-1)
	{
		  	document.getElementById('chkl').disabled=false;
		alert('please add K or M or B in bet amount ');
		return;
	} 
	  var numChars = a.match(/[a-zA-Z]/g).length;
	  if(numChars>1)
	  {
	  	alert("Not a valid amount");
	  	document.getElementById('chkl').disabled=false;
	  	return;
	  }

	

	var smallk = a.replace(/[^k]/g, "").length;
	var bigk = a.replace(/[^K]/g, "").length;
	

	
	if(smallk>1)
	{
		alert('k is repeated ..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	if(bigk>1)
	{
		alert('K is repeated..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	if(smallk>0 && bigk>0)
	{
		alert('something went wrong..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	var smallm = a.replace(/[^m]/g, "").length;
	var bigM = a.replace(/[^M]/g, "").length;
	
	
	if(smallm>1)
	{
		alert('m is repeated ..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	if(bigM>1)
	{
		alert('M is repeated..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	if(smallm>0 && bigM>0)
	{
		alert('something went wrong..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	var smallb = a.replace(/[^b]/g, "").length;
	var bigB = a.replace(/[^B]/g, "").length;
	
	
	if(smallb>1)
	{
		alert('b is repeated ..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	if(bigB>1)
	{
		alert('B is repeated..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	if(smallb>0 && bigB>0)
	{
		alert('something went wrong..!');
		document.getElementById('chkl').disabled=false;
		return;
	}

	 if ( a.charAt( 0 ) == 'k') {

      alert( 'wrong syntax for bet amount' );
      document.getElementById('chkl').disabled=false;
      return;

    }

     if ( a.charAt( 0 ) == 'K') {

      alert( 'wrong syntax for bet amount' );
      document.getElementById('chkl').disabled=false;
      return;

    }

    	 if ( a.charAt( 0 ) == 'm') {

      alert( 'wrong syntax for bet amount' );
      document.getElementById('chkl').disabled=false;
      return;

    }

     if ( a.charAt( 0 ) == 'M') {

      alert( 'wrong syntax for bet amount' );
      document.getElementById('chkl').disabled=false;
      return;

    }

    	 if ( a.charAt( 0 ) == 'b') {

      alert( 'wrong syntax for bet amount' );
      document.getElementById('chkl').disabled=false;
      return;

    }

     if ( a.charAt( 0 ) == 'B') {

      alert( 'wrong syntax for bet amount' );
      document.getElementById('chkl').disabled=false;
      return;

    }
if ( a.charAt( 0 ) == 0) {

      alert( 'wrong syntax for bet amount' );
      document.getElementById('chkl').disabled=false;
      return;

    }
   var last_letter = a.substring(a.length-1);
   if(last_letter!="k" && last_letter!="K" && last_letter!="m" && last_letter!="M" && last_letter!="b" && last_letter!="B")
   {
   	alert('something went wrong..! try again');
   	document.getElementById('chkl').disabled=false;
   	return;
   }


	
	if(k==1)
	{				
					var klength = a.replace(/[^k]/g, "").length;
					if(klength>1)
					{
						alert('It seems k is repeated');
						document.getElementById('chkl').disabled=false;
						return;
					}
					else
					{
						var numb = a.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0k is not a valid amount');
							document.getElementById('chkl').disabled=false;
							return;
						} 
					}
	}

	if(K==1)
	{
		
					 var Klength = a.replace(/[^K]/g, "").length;
					if(Klength>1)
					{
						alert('It seems k is repeated');
						document.getElementById('chkl').disabled=false;
						return;
					}
					else
					{
						var numb = a.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0K is not a valid amount');
							document.getElementById('chkl').disabled=false;
							return;
						}
					}
	}

	if(m==1)
	{				var mlength = a.replace(/[^m]/g, "").length;
					if(mlength>1)
					{
						alert('It seems m is repeated');
						document.getElementById('chkl').disabled=false;
						return;
					}
					else
					{
						var numb = a.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0m is not a valid amount');
							document.getElementById('chkl').disabled=false;
							return;
						}
					}
	}

	if(M==1)
	{
		
					 var Mlength = a.replace(/[^M]/g, "").length;
					if(Mlength>1)
					{
						alert('It seems M is repeated');
						document.getElementById('chkl').disabled=false;
						return;
					}
					else
					{
						var numb = a.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0M is not a valid amount');
							document.getElementById('chkl').disabled=false;
							return;
						}
					}
	}

	if(b==1)
	{		
					
					var blength = a.replace(/[^b]/g, "").length;
					if(blength>1)
					{
						alert('It seems b is repeated');
						document.getElementById('chkl').disabled=false;
						return;
					}
					else
					{
						var numb = a.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0b is not a valid amount');
							document.getElementById('chkl').disabled=false;
							return;
						}
					}
	}

	if(B==1)
	{
		
					 var Blength = a.replace(/[^B]/g, "").length;
					if(Blength>1)
					{
						alert('It seems B is repeated');
						document.getElementById('chkl').disabled=false;
						return;
					}
					else
					{
						var numb = a.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0B is not a valid amount');
							document.getElementById('chkl').disabled=false;
							return;
						}
					}
	}


		var obbet=false;
		if(window.XMLHttpRequest)
		{
		obbet=new XMLHttpRequest();
		}
		else if(window.ActiveXObject)
		{
		obbet=new ActiveXObject("microsoft.XMLHTTP");
		}



		if(obbet)
		{
            
			obbet.open("GET","user2.php?amount="+a);
			obbet.onreadystatechange=function()
	    	{
			  if(obbet.readyState==4)
			  {
			  	//if(request==1)
			  	//{
			  		//var checker=obbet.responseText;
					document.getElementById('progress1').innerHTML = obbet.responseText;

					//alert(checker);
					setTimeout("corr()",1000);
			  }
			}
	        obbet.send(null);
		}

}

function corr()
{
document.getElementById("amountbet").value="";
var setval = document.getElementById("progress1").innerHTML;
if(setval!="")
{
document.getElementById("progress1").innerHTML="";
}
document.getElementById('chkl').disabled=false;
}


function search()
{
	var name = document.getElementById('searchname').value;
	if(name=='')
	{
	alert('please enter name');
return false;
	}
	
	var srch=false;
	if(window.XMLHttpRequest)
	{
		srch=new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		srch=new ActiveXObject("microsoft.XMLHTTP");
	}	
	if(srch)
	{

	srch.open("GET","searchname.php?search="+name);
	srch.onreadystatechange=function()
	{
	  if(srch.readyState==4)
	  {
		
		document.getElementById('searchrecord').innerHTML = srch.responseText;
		document.getElementById('allrecord').style.display = "none";
		
	  }
	}
	srch.send(null);
	}
}






function save()
{
  	//var gameamount = document.getElementById('game_amount').value;
	var minamount = document.getElementById('minamount').value;
	var maxamount = document.getElementById('maxamount').value;
	var hashsalt = document.getElementById('hash_salt').value;
	var timelimit = document.getElementById('time_limit').value;
	var commision = document.getElementById('commision').value;
	
	
	k = minamount.search("k");
	m = minamount.search("m");
	b = minamount.search("b");
	

	K = minamount.search("K");
	M = minamount.search("M");
	B = minamount.search("B");


	if(k==-1 && m==-1 && b==-1 && K==-1 && M==-1 && B==-1)
	{
		alert('please add K or M or B in min user bet amount ');
		return;
	} 


	k1 = maxamount.search("k");
	m1 = maxamount.search("m");
	b1 = maxamount.search("b");
	

	K1 = maxamount.search("K");
	M1 = maxamount.search("M");
	B1 = maxamount.search("B");


	if(k1==-1 && m1==-1 && b1==-1 && K1==-1 && M1==-1 && B1==-1)
	{
		alert('please add K or M or B  in max user bet amount ');
		return;
	} 
	var numChars = minamount.match(/[a-zA-Z]/g).length;
	if(numChars>1)
	{
		alert("Not a valid amount");
	  	return;
	}

	

	if ( minamount.charAt( 0 ) == 'k') {

      alert( 'wrong syntax for min bet amount' );
      return;

    }

     if ( minamount.charAt( 0 ) == 'K') {

      alert( 'wrong syntax for min bet amount' );
      return;

    }

    	 if ( minamount.charAt( 0 ) == 'm') {

      alert( 'wrong syntax for min bet amount' );
      return;

    }

     if ( minamount.charAt( 0 ) == 'M') {

      alert( 'wrong syntax for min bet amount' );
      return;

    }

    	 if ( minamount.charAt( 0 ) == 'b') {

      alert( 'wrong syntax for min bet amount' );
      return;

    }

     if ( minamount.charAt( 0 ) == 'B') {

      alert( 'wrong syntax for min bet amount' );
      return;

    }

    if ( minamount.charAt( 0 ) == 0) {

      alert( 'wrong syntax for min bet amount' );
      return;

    }


   var last_letter = minamount.substring(minamount.length-1);
   if(last_letter!="k" && last_letter!="K" && last_letter!="m" && last_letter!="M" && last_letter!="b" && last_letter!="B")
   {
   	alert('something went wrong..! try again');
   	return;
   }
if(k==1)
	{				
					var klength = minamount.replace(/[^k]/g, "").length;
					if(klength>1)
					{
						alert('It seems k is repeated');
						return;
					}
					else
					{
						var numb = minamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0k is not a valid amount');
							return;
						}
					}
	}

	if(K==1)
	{
		
					 var Klength = minamount.replace(/[^K]/g, "").length;
					if(Klength>1)
					{
						alert('It seems k is repeated');
						return;
					}
					else
					{
						var numb = minamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0K is not a valid amount');
							return;
						}
					}
	}

	if(m==1)
	{				var mlength = minamount.replace(/[^m]/g, "").length;
					if(mlength>1)
					{
						alert('It seems m is repeated');
						return;
					}
					else
					{
						var numb = minamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0m is not a valid amount');
							return;
						}
					}
	}

	if(M==1)
	{
		
					 var Mlength = minamount.replace(/[^M]/g, "").length;
					if(Mlength>1)
					{
						alert('It seems M is repeated');
						return;
					}
					else
					{
						var numb = minamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0M is not a valid amount');
							return;
						}
					}
	}

	if(b==1)
	{		
					
					var blength = minamount.replace(/[^b]/g, "").length;
					if(blength>1)
					{
						alert('It seems b is repeated');
						return;
					}
					else
					{
						var numb = minamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0b is not a valid amount');
							return;
						}
					}
	}

	if(B==1)
	{
		
					 var Blength = minamount.replace(/[^B]/g, "").length;
					if(Blength>1)
					{
						alert('It seems B is repeated');
						return;
					}
					else
					{
						var numb = minamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0B is not a valid amount');
							return;
						}
					}
	}


	var numChars = maxamount.match(/[a-zA-Z]/g).length;
	if(numChars>1)
	{
		alert("Not a valid amount");
	  	return;
	}

	

	if ( maxamount.charAt( 0 ) == 'k') {

      alert( 'wrong syntax for max bet amount' );
      return;

    }

     if ( maxamount.charAt( 0 ) == 'K') {

      alert( 'wrong syntax for max bet amount' );
      return;

    }

    	 if ( maxamount.charAt( 0 ) == 'm') {

      alert( 'wrong syntax for max  bet amount' );
      return;

    }

     if ( maxamount.charAt( 0 ) == 'M') {

      alert( 'wrong syntax for max bet amount' );
      return;

    }

    	 if ( maxamount.charAt( 0 ) == 'b') {

      alert( 'wrong syntax for max bet amount' );
      return;

    }

     if ( maxamount.charAt( 0 ) == 'B') {

      alert( 'wrong syntax for max bet amount' );
      return;

    }

    if ( maxamount.charAt( 0 ) == 0) {

      alert( 'wrong syntax for max bet amount' );
      return;

    }


   var last_letter = maxamount.substring(maxamount.length-1);
   if(last_letter!="k" && last_letter!="K" && last_letter!="m" && last_letter!="M" && last_letter!="b" && last_letter!="B")
   {
   	alert('something went wrong..! try again max bet amount');
   	return;
   }
if(k==1)
	{				
					var klength = maxamount.replace(/[^k]/g, "").length;
					if(klength>1)
					{
						alert('It seems k is repeated');
						return;
					}
					else
					{
						var numb = maxamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0k is not a valid amount');
							return;
						}
					}
	}

	if(K==1)
	{
		
					 var Klength = maxamount.replace(/[^K]/g, "").length;
					if(Klength>1)
					{
						alert('It seems k is repeated');
						return;
					}
					else
					{
						var numb = maxamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0K is not a valid amount');
							return;
						}
					}
	}

	if(m==1)
	{				var mlength = maxamount.replace(/[^m]/g, "").length;
					if(mlength>1)
					{
						alert('It seems m is repeated');
						return;
					}
					else
					{
						var numb = maxamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0m is not a valid amount');
							return;
						}
					}
	}

	if(M==1)
	{
		
					 var Mlength = maxamount.replace(/[^M]/g, "").length;
					if(Mlength>1)
					{
						alert('It seems M is repeated');
						return;
					}
					else
					{
						var numb = maxamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0M is not a valid amount');
							return;
						}
					}
	}

	if(b==1)
	{		
					
					var blength = maxamount.replace(/[^b]/g, "").length;
					if(blength>1)
					{
						alert('It seems b is repeated');
						return;
					}
					else
					{
						var numb = maxamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0b is not a valid amount');
							return;
						}
					}
	}

	if(B==1)
	{
		
					 var Blength = maxamount.replace(/[^B]/g, "").length;
					if(Blength>1)
					{
						alert('It seems B is repeated');
						return;
					}
					else
					{
						var numb = maxamount.match(/\d/g);
						numb = numb.join("");	
						
						if(numb>0)
						{
							var request = 1;
						}
						else
						{
							request = 0;
							alert(' 0B is not a valid amount');
							return;
						}
					}
	}

	var gseting=false;
	if(window.XMLHttpRequest)
	{
		gseting=new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		gseting=new ActiveXObject("microsoft.XMLHTTP");
	}	
	if(gseting)
	{
		gseting.open("GET","gamesetting.php?minamount="+minamount+"&maxamount="+maxamount+"&hashsalt="+hashsalt+"&timelimit="+timelimit+"&commision="+commision);
		gseting.onreadystatechange=function()
		{
			if(gseting.readyState==4)
			{
				var status = gseting.responseText;
				
				if(status=1)
				{
					alert("Data Updated successfully.");
					return;
				}
				if(status=3)
				{
					alert("Data Inserted successfully.");
					return;
				}
				if(status=0)
				{
					alert("There is problem in inserting data");
					return;
				}
				//document.getElementById('userbet').innerHTML=gseting.responseText;
			}
		}
		gseting.send(null);
	}
}
/*************************** Timers *********************************/


