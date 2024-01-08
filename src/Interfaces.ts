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
    fromCity1: string|AirportData|null;
    toCity1: string|AirportData|null;
    fromCity2: string|AirportData|null;
    toCity2: string|AirportData|null;
    fromCity3: string|AirportData|null;
    toCity3: string|AirportData|null;
    fromCity4: string|AirportData|null;
    toCity4: string|AirportData|null;
    legDate1: string|AirportData|null;
    legDate2: string|AirportData|null;
    legDate3: string|AirportData|null;
    legDate4: string|AirportData|null;
    adult: number;
    child: number;
    infant: number;
    searchType: string;
    fromCity: AirportData|null;
    toCity: AirportData|null;
    fromDate: string; // Assuming fromDate is a string
    toDate: string; // Assuming toDate is a string
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
    MultiCitySearchData: TwoSearchTypes;
    setMultiCitySearchData: React.Dispatch<React.SetStateAction<TwoSearchTypes>>;
    index:number;
    isMultiCity:boolean;
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

  export interface SearchDataProps{
    searchData:TwoSearchTypes;
    setSearchData:React.Dispatch<React.SetStateAction<TwoSearchTypes>>
    index:number;
    isMultiCity:boolean;
  }
  