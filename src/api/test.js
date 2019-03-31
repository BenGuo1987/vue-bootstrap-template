import http from '@/api/http';

class Test {
  getCurrentprice () {
    return http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }

  getCurrentpriceTest () {
    return http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}

export default new Test();
