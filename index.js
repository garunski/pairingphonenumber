module.exports = class PhoneNumber{
  constructor(phone){
    this.phone = phone;
  }

  number(){
    const VALID_PHONE_LENGTH_WITH_COUNTRY_CODE = 11;
    const VALID_PHONE_LENGTH_WITHOUT_COUNTRY_CODE = 10;

    let cleanPhone = this.phone.match(/\d/g).join('');

    if(cleanPhone.length !== VALID_PHONE_LENGTH_WITHOUT_COUNTRY_CODE){
      return null;
    } else if(cleanPhone.length === 11){
      if(!cleanPhone.startsWith('1')){
        return null;
      } else {
        return cleanPhone.substring(1);
      }
      
    }
    
    return cleanPhone;
  }
}