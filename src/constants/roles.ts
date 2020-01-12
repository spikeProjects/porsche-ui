const DEALER = 'ROLE_DEALER';
const DEALER_MANAGER = 'ROLE_DEALER_M';
const PCN_REGION_C = 'ROLE_PCN_REGION_C';
const PCN_REGION_S = 'ROLE_PCN_REGION_S';
const PCN_REGION_N = 'ROLE_PCN_REGION_N';
const PCS_SUPERVISOR = 'ROLE_PCS_SUP';
const PCS_AGENT = 'ROLE_PCS_AGENT';
const PCN_CONNECT = 'ROLE_PCN_CONNECT';
const NOT_AUTHENTICATE = 'not authenticate';

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