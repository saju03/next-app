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

export interface errToken{
  token:string;
  status:number;
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


export interface MultiCitySearchDataType {
    fromCity1: string|AirportData|null;
    toCity1: string|AirportData|null;
    fromCity2: string|AirportData|null;
    toCity2: string|AirportData|null;
    fromCity3: string|AirportData|null;
    toCity3: string|AirportData|null;
    fromCity4: string|AirportData|null;
    toCity4: string|AirportData|null;
    legDate1: string|Date|null;
    legDate2: string|Date|null;
    legDate3: string|Date|null;
    legDate4: string|Date|null;
    adult: number;
    child: number;
    infant: number;
    searchType: string;
    fromCity: AirportData|null;
    toCity: AirportData|null;
    fromDate: string;
    toDate: string; 
}

export type OneWayRoundSearchDataType= {
    fromCity: AirportData|null;
    toCity: AirportData|null;
    fromDate: string; 
    toDate: string;
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
  

  
export interface AuthState {
  accessToken: string;
  refreshToken: string;
  expireTime: string;
}

export interface MinDateState {
  leg1: Date;
  leg2: Date;
  leg3: Date;
  leg4: Date;
  [key: string]: Date
}