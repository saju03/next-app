import moment from "moment/min/moment-with-locales";
const resourceKeys = window.resourceKeys;

export function getBookingClass(key) {
    switch (key) {
        case "Y":
            return resourceKeys.flight_economy;
        case "W":
            return resourceKeys.flight_class_premium_economy;
        case "C":
            return resourceKeys.AirlineSeo_business_class;
        case "F":
            return resourceKeys.AirlineSeo_first_class;
        default:
            return "Unknown"; // or any other default value you prefer
    }
}

export function getTravelClassResourceKey(key) {
    switch (key) {
        case "Economy":
            return resourceKeys.flight_economy;
        case "PremiumEconomy":
            return "flight_class_premium_economy";
        case "BusinessClass":
            return "flight_class_business_class";
        case "FirstClass":
            return "flight_class_first_class";
        default:
            return "";
    }
}
export function getPaxType(pax) {
    switch (parseInt(pax)) {
        case 0:
            return resourceKeys.adult;

            break;

        case 1:
            return resourceKeys.child;

            break;

        case 2:
            return resourceKeys.infant;

            break;

        default:
            break;
    }
}

export const getFullDateAr = (dateTime) => {
    if (window.culture == "ar") {
        const date = new Date(dateTime);
        const month = moment(dateTime).locale("ar").format("MMM");
        const day = moment(dateTime).locale("ar").format("ddd");
        const year = date.getFullYear();

        return month + " " + day + " " + year;
    }
    // moment(flight.Arrival.DateTime).locale('ar_SA').format("DD MMM")
};
export const getFullDateArb = (dateTime) => {
    if (window.culture == "ar") {
        const date = new Date(dateTime);
        const month = moment(dateTime).locale("ar").format("MMM");
        const dayNumber = moment(dateTime).format("DD");
        const year = date.getFullYear();
        return month + " " + dayNumber + " " +','+ year;
    }
};

export const getDay = (dateTime) => {
  if (window.culture == "ar") {
      const date = new Date(dateTime);
      const month = moment(dateTime).locale("ar").format("MMM");
      const day = moment(dateTime).locale("ar").format("dddd");
      const year = date.getFullYear();
      return day ;
  }

};

export const getDateAr = (dateTime) => {
    const date = new Date(dateTime);
    const month = moment(dateTime).locale("ar").format("MMM");
    const day = date.getDay();
    let a = month + " " + day;
    return month + " " + day;
};

export const getMonthDayAr = (date) => {
  const dateMonth = new Date(date);
  const monthDay = moment(date).locale("ar").format("MMM");
  const day = moment(date).format("D");
  return monthDay +" " + day;
}

