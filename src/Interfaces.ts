export interface Headers {
  [key: string]: string;
}
export interface Config {
  headers: Headers;
}

export interface ApiResponse {
  userName: string;
  password: string;
}

export interface TokenTypes {
  access_token: string;
  expireTime: Date;
  token_type: string;
  refresh_token: string;
}

export type userInfoType = {
  userName: string;
  password: string;
};
export type loginErrType = {
  message: string;
  status: number;
};

export type IP = string | null;
export type ParamsType = {
  Device: string;
  UserAgent: string;
  IPAddress: IP;
  AffiliateID: any;
  Securitykey: string;
  IsMobileWeb: boolean;
};
export interface ApiResponse {
  userName: string;
  password: string;
}


export  type MultiCitySearchDataType = {
    fromCity1: string;
    toCity1: string;
    fromCity2: string;
    toCity2: string;
    fromCity3: string;
    toCity3: string;
    fromCity4: string;
    toCity4: string;
    legDate1: string;
    legDate2: string;
    legDate3: string;
    legDate4: string;
    adult: number;
    child: number;
    infant: number;
    searchType: string;
}

export type OneWayRoundSearchDataType= {
    fromCity: AirportData|null;
    toCity: AirportData|null;
    fromDate: string; // Assuming fromDate is a string
    toDate: string; // Assuming toDate is a string
    adult: number;
    child: number;
    infant: number;
    searchType: string;
  }


export interface MultiCityComponentProps {
    MultiCitySearchData: MultiCitySearchDataType;
    setMultiCitySearchData: React.Dispatch<React.SetStateAction<MultiCitySearchDataType>>;
  }

  export type TwoSearchTypes =  OneWayRoundSearchDataType|MultiCitySearchDataType

  export  interface AirportData {
    _index: string;
    _type: string;
    _id: string;
    _score: string;
    _source: {
      id: number;
      code: string;
      name: string;
      arabicname: string;
      city: string;
      arabiccity: string;
      countrycode: string;
      countryname: string;
      arabiccountryname: string;
      isdomestic: boolean;
      isallairport: boolean;
      hidden: boolean;
      ranking: number;
      parentid: number;
      longitude: string;
      latitude: string;
      displayname: null | string; 
      displaynamear: null | string; 
    };
  };