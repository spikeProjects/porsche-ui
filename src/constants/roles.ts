const DEALER = 'ROLE_DEALER';
const DEALER_MANAGER = 'ROLE_DEALER_M';
const PCN_REGION_C = 'ROLE_PCN_REGION_C';
const PCN_REGION_S = 'ROLE_PCN_REGION_S';
const PCN_REGION_N = 'ROLE_PCN_REGION_N';
const PCS_SUPERVISOR = 'ROLE_PCS_SUP';
const PCS_AGENT = 'ROLE_PCS_AGENT';
const PCN_CONNECT = 'ROLE_PCN_CONNECT';
const NOT_AUTHENTICATE = 'not authenticate';
const DEALER_M = 'DEALER_M';
// TODO
const SP = 'SP';
const PCN = 'PCN';
const WAREHOUSE = 'WAREHOUSE';
const PCS = 'PCS';
const PCS_M = 'PCS_M';

const PCN_NAME = '管理员';
const DEALER_ROLE_NAME = '经销商代表';
const DEALER_M_ROLE_NAME = '经销商经理';
const SP_ROLE_NAME = '服务供应商';
const WAREHOUSE_ROLE_NAME = '仓库';
const PCS_ROLE_NAME = '客户服务';
const PCS_M_ROLE_NAME = '客服经理';


const ROLES = {
  PCS: 'PCS',   //客服
  PCN: 'PCN',   //管理员
  DEALER: 'DEALER',  //经销商
  SP: 'SP'  //SP
};

const ALL = [
    DEALER,
    DEALER_MANAGER,
    PCN_REGION_C, PCN_REGION_S, PCN_REGION_N,
    PCS_SUPERVISOR, PCS_AGENT,
    PCN_CONNECT
];
const PCN_REGION = [
    PCN_REGION_C, PCN_REGION_S, PCN_REGION_N
];
const DETAILS_INFO_ROLE = [
    PCN_CONNECT,
    PCS_AGENT,
    PCS_SUPERVISOR
];
const DASH_BOARD_ROLE = [
    DEALER,
    DEALER_MANAGER,
    PCN_REGION_C, PCN_REGION_S, PCN_REGION_N,
    PCN_CONNECT
];

export default {
    ALL,
    PCN_REGION,
    DEALER,
    DEALER_MANAGER,
    PCN_REGION_C,
    PCN_REGION_S,
    PCN_REGION_N,
    PCS_SUPERVISOR,
    PCS_AGENT,
    PCN_CONNECT,
    NOT_AUTHENTICATE,
    DETAILS_INFO_ROLE,
    DASH_BOARD_ROLE,

    ROLES
};

export const getRoleName = (role: any)=>{
    let roleName;
    switch (role) {
    case PCN:
      roleName = PCN_NAME;
      break;
    case DEALER:
      roleName = DEALER_ROLE_NAME;
      break;
    case DEALER_M:
      roleName = DEALER_M_ROLE_NAME;
      break;
    case SP:
      roleName = SP_ROLE_NAME;
      break;
    case WAREHOUSE:
      roleName = WAREHOUSE_ROLE_NAME;
      break;
    case PCS:
      roleName = PCS_ROLE_NAME;
      break;
    case PCS_M:
      roleName = PCS_M_ROLE_NAME;
      break;
    default:
      roleName = '';
      break;
    }
    return roleName;
  };
