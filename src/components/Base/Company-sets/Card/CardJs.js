import http from '@api/http';
import api from '@api/apis.js'
//import router from '@/router/index.js'

//const $router = router;

function getCard(data) {
  if (data.status === -404) return false;
  const status = data.response? data.response.httpStatus || false : false;
  if (!status) return;
  if (!status.toString().length > 0) return;
  if (!status.toString().toUpperCase() === 'OK') return;
  return data.response.object;
}

export default {

  get(){
    return http.get(api.COMPANY.GET.card, '', true)
      .then(data => {
        const info = getCard(data);
        if (!info) return false;
        return {
          name: info.name,
          address: info.address,
          tel: info.tel || info.mobile,
          email: info.email,
          website: '',
          id: info.id
        }
      })
      .catch(err => {alert(err)})
  },
  post(form){
    if (!form instanceof Object) return;
    return http.post(api.COMPANY.POST.card, form)
      .then(resp => {console.log('response=', resp)})
      .catch(err => {alert(err)})
  }
}
