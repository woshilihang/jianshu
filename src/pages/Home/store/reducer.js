import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '故事与干货',
      imgUrl: 'https://upload.jianshu.io/collections/images/332244/1486873758.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
    },
    {
      id: 2,
      title: '一场无形的战争',
      imgUrl: 'https://upload.jianshu.io/collections/images/1691297/crop1543827490353.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
    },
    {
      id: 3,
      title: '热点传达室',
      imgUrl: 'https://upload.jianshu.io/collections/images/1680236/crop1541479097624.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
    },
    {
      id: 4,
      title: '我是来搞笑的',
      imgUrl: 'https://upload.jianshu.io/collections/images/333582/719612344102851487.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
    },
    {
      id: 5,
      title: '一分钟微小说',
      imgUrl: 'https://upload.jianshu.io/collections/images/447557/crop1501947115655.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
    },
    {
      id: 6,
      title: '读书品文',
      imgUrl: 'https://upload.jianshu.io/collections/images/634084/1521781253.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '半生之性与爱',
      desc: '男人因爱而性，女人因性而爱？ 一个很复杂的话题，为什么有太多的女人受伤害，成比例角度讲，因为女人更感性，更无法从一个被宠的角色轮为一个被抛弃的角...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/12493791-5d9a8db16923869d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '金庸经典语录：你只有一个缺点，你不是她',
      desc: '你样样都好，样样比她强， 你只有一个缺点，你不是她。 ——《天龙八部》 阿朱就是阿朱。 四海列国，千秋万代， 就只有一个阿朱。 ——《天龙八部》...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/11555800-a2647c022f1fde74.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 3,
      title: '100个虚拟产品关键词，加躺赚3万的执行思路！--玩家老高',
      desc: '探索营销心理学，深入互联网思维，分析赚钱思路，分享创业项目，就在：玩家老高！祝大家早日实现财富自由！‍ 互联网上的被动躺赚项目，首选还是某宝虚拟...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/13916874-faf3ed0610b21dcb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 4,
      title: '付费文档，一次耕耘长期躺赚。',
      desc: '文档项目。 于《文库，豆丁，道客巴巴……文档下载，一个无本赚钱的项目》中，阿力推推简述过文档代下载项目。 利润空间是在线的，推哥安排人试了下，上...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/13205339-6b65d05dfddac894.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },{
      id: 3,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
      id: 4,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
      id: 5,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },
  ]
});


export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
