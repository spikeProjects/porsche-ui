
export const serviceUnitStatus=(text)=>{
  const status={
    '-10' :'待激活',
    '0' :'未使用',
    '10' :'冻结中',
    '20' :'已使用',
    '30' :'已过期',
    '40' :'已失效'
  };
  return status[text];
};

export const customerAccountStatus=(text)=>{
  const status={
    '0' :'冻结',
    '1' :'生效'
  };
  return status[text];
};

export const tipCustmer={
  'frozen':'mock数据暂无‘冻结’功能',
  'unfreeze':'mock数据暂无‘解冻’功能'
};

export const tagStatus={
  '90':'tag-green',
  '20':'tag-gray',
  '10':'tag-red'
};
