
import "./ECVerify.sol";

contract Patient {
  
  mapping (address => string) private resources;


 function addData(string _data,address _owner) constant returns(bool)
 {

    resources[_owner] = _data;
    return true;

 } 

 function getData(address _owner) constant returns (string)
 {

      return resources[_owner];

 }
 


}