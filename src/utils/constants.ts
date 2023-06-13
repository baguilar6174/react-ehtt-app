export const EMPTY_STRING = '' as const;
export const EMPTY_SPACE_STRING = ' ' as const;
export const ZERO_STR = '0' as const;
export const ONE_STR = '1' as const;
export const TWO_STR = '2' as const;
export const THREE_STR = '3' as const;
export const FOUR_STR = '4' as const;
export const FIVE_STR = '5' as const;
export const SIX_STR = '6' as const;
export const ZERO = 0 as const;
export const ONE = 1 as const;
export const TWO = 2 as const;
export const THREE = 3 as const;
export const FOUR = 4 as const;
export const SIX = 6 as const;
export const SEVEN = 7 as const;
export const EIGHT = 8 as const;
export const THIRTY = 30 as const;
export const FIFTY = 50 as const;
export const SIXTY = 60 as const;

export const PIPE = '|' as const;
export const UNDERSCORE = '_' as const;
export const DASH = '-' as const;
export const HASH = '#' as const;
export const DAY = 24 as const;
export const DOT = '•' as const;
export const DOT_STR = '.' as const;
export const PLUS_SYMBOL = '+' as const;
export const EMAIL_SYMBOL = '@' as const;
export const ARS_SYMBOL = '$' as const;
export const MINUTES = 60 as const;
export const SECOND = 1000 as const;
export const MINUS_ONE = -1 as const;
export const TEN = 10 as const;

export const MOBILE = 'mobile';
export const DESKTOP = 'desktop';
export const FINISHED = 'FINISHED';
export const PROCESSING = 'PROCESSING';
export const PENDING = 'PENDING';
export const FAILED = 'FAILED';

export const BACK_ROUTER = MINUS_ONE;

export const ROUTE_PARAM_ID = ':id' as const;

export const QUERY_STRING = {
	JOINER_PROP: '&',
	JOINER_VALUE: '='
} as const;

export const CORPORATE = 'corporate';

export const FEATURE = {
	REQUEST_CREDIT_CARD: 'creditCards.requestCreditCard.send',
	CREDIT_CARDS_READ: 'creditCards.read',
	LOANS_READ: 'loans.read',
	LANDMARKS_LIST: 'landmarks.list',
	OFFERT_TO_UPDATE_SECURITY_DATA_EMAIL: 'offerToUpdateSecurityData.checkIfEmailNeedsToBeRefreshed',
	OFFERT_TO_UPDATE_SECURITY_DATA_TOKEN: 'offerToUpdateSecurityData.checkIfTokenNeedsToBeRefreshed',
	OFFERT_TO_UPDATE_SECURITY_DATA_MODO: 'offerToUpdateSecurityData.checkIfMODONeedsToBeRefreshed',
	OFFERT_TO_UPDATE_SECURITY_DATA_TYC: 'spa.session.acceptTermsAndConditions',
	PREFERENCES_OTP_CONFIGURATION_VALIDATE_DEVICE: 'preferences.otp.configuration.validate.device',
	PREFERENCES_BIOMETRY_FINGERPRINT: 'preferences.fingerprint.pre',
	MODIFY_USER_DATA: 'preferences.userData.modify.send'
} as const;

export const VERIFY_FEATURES_AVAILABLE = [
	FEATURE.OFFERT_TO_UPDATE_SECURITY_DATA_EMAIL,
	FEATURE.OFFERT_TO_UPDATE_SECURITY_DATA_TOKEN,
	FEATURE.OFFERT_TO_UPDATE_SECURITY_DATA_MODO,
	FEATURE.OFFERT_TO_UPDATE_SECURITY_DATA_TYC,
	FEATURE.PREFERENCES_OTP_CONFIGURATION_VALIDATE_DEVICE,
	FEATURE.PREFERENCES_BIOMETRY_FINGERPRINT,
	FEATURE.MODIFY_USER_DATA
] as const;

export const PRODUCT_TYPE = {
	CURRENT_ACCOUNT: 'CC'
} as const;

export const CURRENCY_LABEL_PREFIX = 'spa.currency.label.';

export const REGEX_STREET_NUMBER_ONBOARDING_MAX_LENGTH = /^\d{1,8}$/;
export const REGEX_NUMBERS = /\d/g;

export const LANGUAGE = {
	ES_AR: 'es-AR'
} as const;

export const CURRENCY = {
	ARG_ISO: 'ARS'
} as const;

export const CHANNEL = {
	FRONTEND: 'frontend'
} as const;

export const NOTIFICATIONS = {
	MAX_BADGE: 99,
	SHOW_MORE_LINK: '/communications/details',
	MAX_LENGTH_COMMUNICATION_TEXT: 50
} as const;

export const DEFAULT_BRANCHES_DISTANCE = '5350';
export const DEFAULT_MAP_ZOOM = 15;

/** Short duration */
export const DURATION_S = 2000 as const;
/** Medium duration */
export const DURATION_M = 4000 as const;
/** Long duration */
export const DURATION_L = 6000 as const;
/** Extra Long duration */
export const DURATION_XL = 8000 as const;
/** Permanent */
export const PERMANENT = 0 as const;

/** duration to redirect to the store (QR PAYMENT)*/
export const DURATION_REDIRECT_DEEPLINK = 5000 as const;

// TODO: We need to know all the posible environment colors,
// without calling @bancor-components
export const DEFAULT_ENVIRONMENT_COLOR = 'dark-green';

export const ZERO_CODE_POINT = 0x30 as const;
export const NINE_CODE_POINT = 0x39 as const;
export const KEY_SEED = 'seed' as const;
export const KEY_TOKEN = 'TOKEN' as const;
export const KEY_EMAIL = 'EMAIL' as const;
export const KEY_MODO = 'MODO' as const;
export const KEY_TERMS_CONDITIONS = 'TYC' as const;
export const KEY_SEED_USER = 'seedUser' as const;

export const TYPE_OTP = 'softToken' as const;
export const TYPE_SMS = 'otpSMS' as const;

export const EXPIRED_CODE_ERROR = 'API509E' as const;

export const SECURITY_EVENT_KEYS = {
	PASSWORD: 'Password',
	SOFT_TOKEN: 'SoftToken',
	BIOMETRY: 'Biometry'
} as const;

export const BANCOR_CARD = 'BANCOR' as const;
export const PREPAID_CARD = 'Prepaga' as const;

// Keycodes for keyboards events
export const KEY_CODE = {
	BACKSPACE: 'Backspace',
	ARROW_LEFT: 'ArrowLeft',
	ARROW_RIGHT: 'ArrowRight',
	ARROW_DOWN: 'ArrowDown',
	ARROW_UP: 'ArrowUp',
	DELETE: 'Delete',
	TAB: 'Tab',
	SPACE: ' ',
	ENTER: 'Enter',
	HOME: 'Home',
	END: 'End',
	PAGE_UP: 'PageUp',
	PAGE_DOWN: 'PageDown',
	ESCAPE: 'Escape',
	UNIDENTIFIED: 'Unidentified'
};

export const NODE_NAME = {
	BUTTON: 'BUTTON'
};

export const USA_COUNTRY_CODE = 'US' as const;
export const ARG_COUNTRY_CODE = 'AR' as const;

export const DBVS_NOT_FOUND = 'DBVSNotFound' as const;

export const SPA_WIDGET_PROMOTIONS = 'promotions.widget' as const;
