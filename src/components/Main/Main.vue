<template>
  <div>
    <HeaderV></HeaderV>
    <NavierV></NavierV>
    <router-view></router-view>
    <h3>图源：FALL 2016: A Unity of Strength, Confidence and Complexity, Pantone

      红色为何如此受人们喜爱？从美学和心理学上找原因的话，可以发现歌德曾在《颜色论》中论述到：如果说白色代表纯洁与高尚，黑色是邪恶与残暴的化身，那么红色就拥有强烈的文化属性，象征热情与自由。

      而从文化的角度来说，对于同属东亚文明圈又长期保持文化交流的中日韩三国而言，红色就有着类似却又有些许不同的文化特征。

      以日韩为例，红色主要代表力量和权威。

      在韩国的民间传说中，红色是宇宙之源太阳的颜色，因此拥有强大力量。韩国人的护身符都用红色书写，巫教中也相信红玫瑰可以驱鬼。他们对于红色代表力量的认知还影响到了现代社会——韩国国家足球队的官方球迷会就被称为「红魔鬼」，每次韩国队有重要比赛时，现场就会成为红色的海洋。在中国文化中，红色则拥有更为丰富和广袤的含义。毫不夸张地说，红色几乎是中国文化的象征性颜色。《说文解字》中就有提到：「赤，南方色也。从大，从火。」意思是红色代表南方，是火的颜色，因此炎帝被称为「赤帝」，他的子孙后代也被称为「赤子」。而在建筑文化和服饰文化中，红色往往象征着身份地位。建筑作为人们安身立命之所，不但反映了审美情趣，也反映了世界观。红色被古人视为正色，于是从周代开始，帝王的宫殿就遍饰红色。明清皇宫紫禁城中，用得最多的颜色也是红黄两色，彰显皇帝的权威和威严。而在服饰上，唐代制度就规定朝廷五品以上官员才可着朱服，帽子上的顶戴红色的深浅更是用来区分官员身份的高低。在「学而优则仕」的官本位封建社会，能穿上这类服装自然意味着成功和受社会好评。

      除去作为身份的象征，红色更是一直被当作吉祥喜庆的代表色。例如满堂红的中式婚礼，新娘出嫁当天要穿的「凤冠霞帔」，婚礼所需的几乎一切物品、举行婚礼仪式的场所都要以红色为主基调，体现了人们把红色等同于吉祥好运和喜庆的象征的心理。</h3>
    <button @click="clearStorage">clear storage</button>
    <FooterV></FooterV>
  </div>
</template>
<script>
  import * as localStore from '@/handler/LocalStore.js';

  import HeaderV from '../Header/Header.vue';
  import NavierV from '../Navier/Navier.vue';
  import FooterV from '../Footer/Footer.vue';

  export default{
    name: 'main-vue',
    methods: {
      clearStorage(){
        const commit = this.$store.dispatch;
        localStore.clear('sess', commit);
      }
    },
    components: {
      HeaderV, NavierV,FooterV
    }
  }
</script>
<style></style>
