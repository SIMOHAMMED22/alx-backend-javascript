export default function getResponseFromAPI() {
  let myPromise = new Promise(function (myResolve, myReject) {
    myResolve();
    myReject();
  });
  return myPromise;
}
