import {roundRegExp, floatRoundRegExp, urlRegExp} from '../../shared/constants/regExp'

const naturalRoundMessage='请输入非负整数，最大限值9999';
const roundFloatMessage='请输入大于0的数字，最大限值9999，最多两位小数';
const roundMessage='请输入正整数，最大限值9999';

export const validateMaxValue=(value,maxValue,cb)=>{//小于maxValue
  if(!value && value!==0)return true;
  if(cb(value)){
    if(value<=maxValue)return true;
  }
  return false;
};

//正整数
export const validateRound=(value)=>{//是否正整数
  if(!value && value!==0)return true;
  return roundRegExp.test(value);
};

export const validateMaxRound=(value,maxValue)=>{//是否正整数，且小于maxValue
  if(!value && value!==0)return true;
  if(validateRound(value)){
    if(value<=maxValue)return true;
  }
  return false;
};

export const validateMaxValueRound=(value,callback)=>{//是否正整数，且小于9999 提示
  if(!value && value!==0)return true;
  if(!validateMaxRound(value,9999)){
    callback&&callback(roundMessage);
    return false;
  }
  return true;
};

//非负整数
export const validateNaturalRound=(value)=>{//是否非负整数
  if(!value && value!==0)return true;
  return validateRound(value)||value==='0'||value===0;
};

export const validateMaxNaturalRound=(value,maxValue)=>{//是否非负整数，且小于maxValue
  if(!value && value!==0)return true;
  if(validateNaturalRound(value)){
    if(value<=maxValue)return true;
  }
  return false;
};

export const validateMaxValueNaturalRound=(value,callback)=>{//是否非负整数，且小于9999
  if(!value && value!==0)return true;
  if(!validateMaxNaturalRound(value,9999)){
    callback && callback(naturalRoundMessage);
    return false;
  }
  return true;
};

//浮点数
export const validateFloatRound=(value)=>{//是否正整数或正浮点数
  if(value || value===0){
    if(value.indexOf('.')>-1){
      return floatRoundRegExp.test(value);
    }else {
      return validateRound(value);
    }
  }
  return  true;
};

export const validateMaxValueFloatRound=(value,callback,dot=2)=>{//请输入大于0的数字，最大限值9999，最多 dot 位小数
  if(!value && value!==0)return true;
  if(!validateMaxValue(value,9999,validateFloatRound)){
    callback && callback(roundFloatMessage);
    return false;
  }else {
    if(value.indexOf('.')>-1){
      if(value.split('.')[1] && value.split('.')[1].length>dot){
        callback && callback(roundFloatMessage);
        return  false;
      }
    }
  }
  return true;
};

//是否为http和https的url
export const isUrl=(value)=>{
  if(value){
    return urlRegExp.test(value);
  }
  return false;
};
