import Encode from '@/components/Base/Rules/Encode/Encode.vue'

const encode = {
  path: 'rules/encode',
  component: Encode
};

const meter_type = {
  path : 'rules/meter-type',
  component : []
};

const price = {
  path: 'rules/price',
  component: []
};

const redirect = {
  path: 'rules',
  redirect: 'rules/encode'
}

export default {
  encode, meter_type, price ,redirect
}
