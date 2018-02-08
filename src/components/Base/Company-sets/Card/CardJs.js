import http from '@api/http';
import api from '@api/apis.js'
import router from '@/router/index.js'

const $router = router;

function getCard(data) {
  const status = data.response.httpStatus || false;
  if (!status && !status.toString().length>0) return;
  if (!status.toString().toUpperCase() === 'OK') return;
  return data.response.object;
}

export default {

  get(){
    return http.get(api.company_api.GET.card,'',true)
      .then( data => {
        const info =  getCard(data);
        return {
          name : info.name,
          address : info.address,
          tel : info.tel || info.mobile,
          email : info.email,
          website : '',
          id : info.id
        }
      })
  },
  post(form){
    if (!form instanceof Object) return;
    return http.post(api.company_api.POST.card,form)
      .then(resp =>{
        console.log('response=' ,resp)
      })
  }
}
