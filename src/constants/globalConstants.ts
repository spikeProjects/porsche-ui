export const PPN_LOGIN = 'www.baidu.com';  //TO DO

export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const CONFLICT = 409;
export const INTERNAL_SERVER_ERROR = 500;
export const ECONNABORTED = 'ECONNABORTED';

export const UNAUTHORIZED_ERROR_MESSAGE = '';
export const FORBIDDEN_ERROR_MESSAGE = '';
export const NO_RESPONSE_ERROR_MESSAGE = '';

// below are action types
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

export const UPDATE_UNPICKED_EARLYBIRD_SUCCESS = 'UPDATE_UNPICKED_EARLYBIRD_SUCCESS';

export const API_ERROR = 'API_ERROR';
export const API_ERROR_RESET = 'API_ERROR_RESET';
export const SAVE_ERROR = 'SAVE_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SHOW_ERROR_POPUP = 'SHOW_ERROR_POPUP';

export const SAVE_SEARCH_TEXT = 'SAVE_SEARCH_TEXT';
export const RESET_SEARCH_TEXT = 'RESET_SEARCH_TEXT';

export const DOWNLOAD_FILE_REQUEST = 'DOWNLOAD_FILE_REQUEST';
export const DOWNLOAD_FILE_SUCCESS = 'DOWNLOAD_FILE_SUCCESS';
export const DOWNLOAD_FILE_FAILURE = 'DOWNLOAD_FILE_FAILURE';

// roles
export const DEALER = 'ROLE_DEALER';
export const DEALER_MANAGER = 'ROLE_DEALER_M';
export const PCN_REGION_C = 'ROLE_PCN_REGION_C';
export const PCN_REGION_S = 'ROLE_PCN_REGION_S';
export const PCN_REGION_N = 'ROLE_PCN_REGION_N';
export const PCS_SUPERVISOR = 'ROLE_PCS_SUP';
export const PCS_AGENT = 'ROLE_PCS_AGENT';
export const PCN_CONNECT = 'ROLE_PCN_CONNECT';
export const NOT_AUTHENTICATE = 'not authenticate';

export const ALL = [
    DEALER,
    DEALER_MANAGER,
    PCN_REGION_C, PCN_REGION_S, PCN_REGION_N,
    PCS_SUPERVISOR, PCS_AGENT,
    PCN_CONNECT
];

export const PCN_REGION = [
    PCN_REGION_C, PCN_REGION_S, PCN_REGION_N
];

export const DETAILS_INFO_ROLE = [
    PCN_CONNECT,
    PCS_AGENT,
    PCS_SUPERVISOR
];

export const DASH_BOARD_ROLE = [
    DEALER,
    DEALER_MANAGER,
    PCN_REGION_C, PCN_REGION_S, PCN_REGION_N,
    PCN_CONNECT
];


// export default {
//     ALL,
//     PCN_REGION,
//     DEALER,
//     DEALER_MANAGER,
//     PCN_REGION_C,
//     PCN_REGION_S,
//     PCN_REGION_N,
//     PCS_SUPERVISOR,
//     PCS_AGENT,
//     PCN_CONNECT,
//     NOT_AUTHENTICATE,
//     DETAILS_INFO_ROLE,
//     DASH_BOARD_ROLE,
//     MENU_ASSET_NAME
// };

