class account{

accId=100346875675;
accName='sathish kumar'
accBalance=500;

open_Account(){
    console.log('Account open successfully')
}
deposit_Amount(){
    console.log('Amount Deposit Successfully');
}
withdrawal(){
console.log('withdrawal successfully');
}
get_Bal(){
    console.log('server Busy');
}
close_Account(){
    console.log('your account was deactivated');
}

}
let a1= new account();
a1.open_Account();
a1.deposit_Amount();
a1.withdrawal();
a1.get_Bal();
a1.close_Account();
