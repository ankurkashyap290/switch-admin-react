// import { getToken } from "helpers/utility";

// make query string for list
// send currentPage, pageSize - MUST for paging, sorter in payload
export function makePagingSortQueryString(payload) {
  const { currentPage, pageSize, ...rest } = payload;
  let { sorter } = payload;
  const params = {
    _limit: pageSize,
    _page: currentPage,
  };
  if (sorter) {
    sorter = sorter.split('#');
    params._sort = sorter[0];
    params._order = sorter[1];
  }
  if (rest) {
    for (const key in rest) {
      if (rest[key]) {
        params[key] = rest[key];
      }
    }
  }
  return params;
}

// const apiUtils = {
//   generateTokenHeader: function() {
//     let authCache = getToken();
//     // console.log("authCache", authCache.toJS());
//     let {
//       idToken,
//       merchantId,
//       userId,
//       role,
//       locationId,
//       timezone
//     } = authCache.toJS();

//     let headers = {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${idToken}`
//     };

//     let extra_params = [];
//     extra_params["user_id"] = userId;
//     extra_params["role"] = role;
//     extra_params["merchant_id"] = merchantId || "";
//     extra_params["location_id"] = locationId || "";
//     extra_params["timezone"] = timezone || null;

//     return { extra_params, headers };
//   },
//   error: function(e) {
//     let errorJson = e.errorJson || { message: e.toString() };
//     return { error: errorJson, status: "ERROR" };
//   },

// };

// export function clearToken() {
//     localStorage.removeItem("authCache");
//     localStorage.removeItem("expiresAt");
//   }

//   export function getToken() {
//     try {
//       let authCache = {};
//       let isValid =
//         new Date().getTime() < JSON.parse(localStorage.getItem("expiresAt"));
//       if (isValid) {
//         authCache = JSON.parse(localStorage.getItem("authCache"));
//       } else {
//         authCache = {};
//       }
//       return new Map({ ...authCache });
//     } catch (err) {
//       clearToken();
//       return new Map();
//     }
//   }

//   export function setToken(authCache) {
//     try {
//       // Set the time that the access token will expire at
//       let expiresAt = authCache.expiresAt; //JSON.stringify(360000 * 1000 + new Date().getTime());
//       localStorage.setItem("authCache", JSON.stringify(authCache));
//       localStorage.setItem("expiresAt", expiresAt);
//       return true;
//     } catch (err) {
//       return false;
//     }
//   }

//   export function timeDifference(givenTime) {
//     givenTime = new Date(givenTime);
//     const milliseconds = new Date().getTime() - givenTime.getTime();
//     const numberEnding = number => {
//       return number > 1 ? "s" : "";
//     };
//     const number = num => (num > 9 ? "" + num : "0" + num);
//     const getTime = () => {
//       let temp = Math.floor(milliseconds / 1000);
//       const years = Math.floor(temp / 31536000);
//       if (years) {
//         const month = number(givenTime.getUTCMonth() + 1);
//         const day = number(givenTime.getUTCDate());
//         const year = givenTime.getUTCFullYear() % 100;
//         return `${day}-${month}-${year}`;
//       }
//       const days = Math.floor((temp %= 31536000) / 86400);
//       if (days) {
//         if (days < 28) {
//           return days + " day" + numberEnding(days);
//         } else {
//           const months = [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec"
//           ];
//           const month = months[givenTime.getUTCMonth()];
//           const day = number(givenTime.getUTCDate());
//           return `${day} ${month}`;
//         }
//       }
//       const hours = Math.floor((temp %= 86400) / 3600);
//       if (hours) {
//         return `${hours} hour${numberEnding(hours)} ago`;
//       }
//       const minutes = Math.floor((temp %= 3600) / 60);
//       if (minutes) {
//         return `${minutes} minute${numberEnding(minutes)} ago`;
//       }
//       return "a few seconds ago";
//     };
//     return getTime();
//   }

//   // send data to return and status ok / error to test
//   export function mockFetch(data, status = "ok", waitFor = 1000) {
//     let p = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         status == "ok" ? resolve(data) : reject(data);
//       }, waitFor);
//     });

//     return p;
//   }

// export default apiUtils;
