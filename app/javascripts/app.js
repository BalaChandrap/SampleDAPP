var accounts;
var account;
var strData;
var pt;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};
function setStatus1(message) {
  var status = document.getElementById("status1");
  status.innerHTML = message;
};
function setStatus3(message) {
  var status = document.getElementById("account");
  status.innerHTML = message;
};



function check() {
	var strData1 = StoreData.deployed();
	
	//var response = true;
	
	setStatus("Entered the check block");
	
	var tempAccount = document.getElementById("account1").value;
	
	//var tempAccount = '0xa23a2c069fef74ef212e2f8f300aedae4c8f8abb';
	
	var tempString = document.getElementById("identifier1").value;
	
	setStatus("Verifying. Please wait.."+tempAccount);
	
  strData1.checkIdentifier(tempString,tempAccount).then(function(response) {
	  console.log("success!",response);
	  
	  var temp = response;
	  
	  //setStatus3("Account is "+account);
	  
	   //setStatus1("outside if and response is "+tempString+" and account is "+tempAccount);
	  
	  if(temp == true)
	  {
	  	setStatus("Identifier verified successfully.");
	  }
	  else
	  {
	  	setStatus("Identifier not found.");
	  }
	 
	  
  },function(error){
	  console.log("Error!",error);
	   setStatus("error"+response);
  }
);	
}


function store() {
	setStatus("Buying please wait.");
	//var strData = StoreData.deployed();
	
	setStatus("Entered the check block");
	
//	var tempAccount = document.getElementById("account2").value;
	
//	var tempString = document.getElementById("identifier2").value;

  var tempAccount = "0x458cadeeb81925fd620d599baf4bbdeea2889815";
	
	var tempString = "hello";

  var result = web3.eth.sign("0x458cadeeb81925fd620d599baf4bbdeea2889815",web3.sha3("hello")); 
  console.log(result);
	setStatus1(result);

	setStatus("Verifying. Please wait.."+tempAccount);
	
	//strData.store(tempString,0x8e3772675ae80ebb2719b64502a2db74e508fea5);
	
    strData.store(tempString,tempAccount,result,web3.sha3("hello"),{from: tempAccount}).then(function(response) {
  	  console.log("success!",response);
      alert(response);
  	   setStatus("Successfully stored "+tempString);
	   //check1();
     	setStatus2(response);
    },function(error){
  	  console.log("Error!",error);
  	   setStatus("error"+response);
    }
  );
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
	strData = StoreData.deployed();
  pt = Patient.deployed();
  });
}



function addResource()
{

    var data = "Hi, I am a patient";
    var owner = "0x458cadeeb81925fd620d599baf4bbdeea2889815";


     pt.addData(data,owner,{from: owner}).then(function(response) {
  	  console.log("success!",response);
      alert(response);
  	   setStatus("Successfully stored "+data);
     	setStatus2(response);
    },function(error){
  	  console.log("Error!",error);
      alert("error"+response);
  	   setStatus("error"+response);
    }
  );

}

function getResource()
{
   alert("clicked");
    var owner = "0x458cadeeb81925fd620d599baf4bbdeea2889815";
      pt.getData(owner,{from: owner}).then(function(response) {
  	  console.log("success!",response);
      alert(response);
  	   setStatus("Successfully got "+response);
    },function(error){
  	  console.log("Error!",error);
  	   setStatus("error"+response);
    }
  );
}
