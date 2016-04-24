import rp from 'request-promise';

// add this somewhere in the middle
const FortuneCookie = {
  getOne() {
    return rp('http://fortunecookieapi.com/v1/cookie')
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res[0].fortune.message;
      });
  }
};

export default FortuneCookie ;
