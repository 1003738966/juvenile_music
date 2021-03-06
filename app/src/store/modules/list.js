/**
 * Created by skylin on 2017/7/28.
 */

import {ajaxGet, ajaxPost} from '@/api/api'

const list = {
    state: {
       songlist:[
          {
             url:'../../../static/images/liuxing.jpg',
             name:'广汽传祺·巅峰榜·流行指数',
             path:'/popular',
             img:'../../../static/images/popular.png',
             list:[
                  {number:1,id:"1597410", type:3, url:"http://stream1.qqmusic.qq.com:0/1597410.wma", songName:"江南style", singerId:"13143", singerName:"Psy", albumId:"128191", albumName:"PSY 6甲 Part.1", albumLink:"/musicbox/shop/v3/album/91/album_128191.htm", playtime:"219"},
                  {number:2,id:"1539873", type:3, url:"http://stream6.qqmusic.qq.com:0/1539873.wma", songName:"没有什么不同", singerId:"34703", singerName:"曲婉婷", albumId:"107526", albumName:"我的歌声里", albumLink:"/musicbox/shop/v3/album/26/album_107526.htm", playtime:"288"},
                  {number:3,id:"1913719", type:3, url:"http://stream3.qqmusic.qq.com:0/1913719.wma", songName:"想你的夜", singerId:"12770", singerName:"关喆", albumId:"139643", albumName:"身边的故事", albumLink:"/musicbox/shop/v3/album/43/album_139643.htm", playtime:"268"},
                  {number:4,id:"1803555", type:3, url:"http://stream10.qqmusic.qq.com:0/1803555.wma", songName:"怒放的生命", singerId:"4604", singerName:"汪峰", albumId:"140820", albumName:"北京青年 电视原声带", albumLink:"/musicbox/shop/v3/album/20/album_140820.htm", playtime:"275"},
                  {number:5,id:"1773989", type:3, url:"http://stream3.qqmusic.qq.com:0/1773989.wma", songName:"如果分开我也爱你", singerId:"12770", singerName:"关喆", albumId:"139643", albumName:"身边的故事", albumLink:"/musicbox/shop/v3/album/43/album_139643.htm", playtime:"289"},
                  {number:6,id:"1641090", type:3, url:"http://stream9.qqmusic.qq.com:0/1641090.wma", songName:"你并不懂我", singerId:"13578", singerName:"BY2", albumId:"123849", albumName:"2020爱你爱你", albumLink:"/musicbox/shop/v3/album/49/album_123849.htm", playtime:"235"},
             ]
          },
          {
             url:'../../../static/images/rege.jpg',
             name:'巅峰榜·热歌',
             path:'/hotsong',
             img:'../../../static/images/hotsong.jpg',
             list:[
                  {number:1,id:"140677", type:3, url:"http://stream3.qqmusic.qq.com:0/140677.wma", songName:"爱要坦荡荡", singerId:"5117", singerName:"萧萧", albumId:"12416", albumName:"Beautiful Angel", albumLink:"/musicbox/shop/v3/album/16/album_12416.htm", playtime:"238"},
                  {number:2,id:"1756991", type:3, url:"http://stream2.qqmusic.qq.com:0/1756991.wma", songName:"爱，有你才完整", singerId:"11453", singerName:"魏晨", albumId:"138767", albumName:"童话二分之一 电视原声带", albumLink:"/musicbox/shop/v3/album/67/album_138767.htm", playtime:"234"},
                  {number:3,id:"1229385", type:3, url:"http://stream7.qqmusic.qq.com:0/1229385.wma", songName:"风度", singerId:"3954", singerName:"汪苏泷", albumId:"121274", albumName:"万有引力", albumLink:"/musicbox/shop/v3/album/74/album_121274.htm", playtime:"220"},
                  {number:4,id:"1366653", type:3, url:"http://stream8.qqmusic.qq.com:0/1366653.wma", songName:"最亲爱的你", singerId:"4351", singerName:"范玮琪", albumId:"110648", albumName:"爱，在一起Together", albumLink:"/musicbox/shop/v3/album/48/album_110648.htm", playtime:"282"},
                  {number:5,id:"1887792", type:3, url:"http://stream8.qqmusic.qq.com:0/1887792.wma", songName:"流恋", singerId:"4907", singerName:"吴奇隆 严艺丹", albumId:"146668", albumName:"新白发魔女传 电视原声带 Part.1", albumLink:"/musicbox/shop/v3/album/68/album_146668.htm", playtime:"245"},
             ]
          },
          {
             url:'../../../static/images/xinge.jpg',
             name:'巅峰榜·新歌',
             path:'/newsong',
             img:'../../../static/images/newsong.jpg',
             list:[
                  {number:1,id:"1943608", type:3, url:"http://stream10.qqmusic.qq.com:0/1943608.wma", songName:"你懂得", singerId:"12744", singerName:"小沈阳 沈春阳", albumId:"151990", albumName:"后厨 电视原声带", albumLink:"/musicbox/shop/v3/album/90/album_151990.htm", playtime:"274"},
                  {number:2,id:"1518325", type:3, url:"http://stream1.qqmusic.qq.com:0/1518325.wma", songName:"Whistle", singerId:"12740", singerName:"Flo Rida", albumId:"121661", albumName:"Wild Ones", albumLink:"/musicbox/shop/v3/album/61/album_121661.htm", playtime:"225"},
                  {number:3,id:"672519", type:3, url:"http://stream4.qqmusic.qq.com:0/672519.wma", songName:"眼泪的错觉", singerId:"44275", singerName:"王露凝", albumId:"8930", albumName:"2010年四月热搜歌", albumLink:"/musicbox/shop/v3/album/30/album_8930.htm", playtime:"223"},
                  {number:4,id:"435848", type:3, url:"http://stream10.qqmusic.qq.com:0/435848.wma", songName:"放生", singerId:"220", singerName:"范逸臣", albumId:"35459", albumName:"无乐不作 (新歌+精选)", albumLink:"/musicbox/shop/v3/album/59/album_35459.htm", playtime:"272"},
                  {number:5,id:"938054", type:3, url:"http://stream4.qqmusic.qq.com:0/938054.wma", songName:"如果爱忘了", singerId:"7033", singerName:"戚薇", albumId:"79174", albumName:"如果爱忘了", albumLink:"/musicbox/shop/v3/album/74/album_79174.htm", playtime:"239"},
                  {number:6,id:"947618", type:3, url:"http://stream9.qqmusic.qq.com:0/947618.wma", songName:"你在看孤独的风景", singerId:"4545", singerName:"本兮", albumId:"80239", albumName:"你在看孤独的风景", albumLink:"/musicbox/shop/v3/album/39/album_80239.htm", playtime:"250"},
                  {number:7,id:"1857290", type:3, url:"http://stream5.qqmusic.qq.com:0/1857290.wma", songName:"天天想你", singerId:"10", singerName:"陈绮贞", albumId:"145135", albumName:"夏季练习曲世界巡回演唱会录音", albumLink:"/musicbox/shop/v3/album/35/album_145135.htm", playtime:"256"},
                  {number:8,id:"1769730", type:3, url:"http://stream6.qqmusic.qq.com:0/1769730.wma", songName:"大艺术家", singerId:"227", singerName:"蔡依林", albumId:"139346", albumName:"MUSE", albumLink:"/musicbox/shop/v3/album/46/album_139346.htm", playtime:"197"},
                  {number:9,id:"1114377", type:3, url:"http://stream5.qqmusic.qq.com:0/1114377.wma", songName:"因为爱情", singerId:"264", singerName:"王菲 陈奕迅", albumId:"94805", albumName:"2012龙年春晚", albumLink:"/musicbox/shop/v3/album/5/album_94805.htm", playtime:"215"},
                  {number:10,id:"1943208", type:3, url:"http://stream2.qqmusic.qq.com:0/1943208.wma", songName:"只爱到一半", singerId:"11453", singerName:"魏晨", albumId:"149192", albumName:"V SPACE", albumLink:"/musicbox/shop/v3/album/92/album_149192.htm", playtime:"257"},
                  {number:11,id:"1889873", type:3, url:"http://stream8.qqmusic.qq.com:0/1889873.wma", songName:"缺口", singerId:"6204", singerName:"林凡", albumId:"147448", albumName:"我家有喜 电视原声带", albumLink:"/musicbox/shop/v3/album/48/album_147448.htm", playtime:"242"}
             ]
          },
          {
             url:'../../../static/images/mingri.jpg',
             name:'巅峰榜·明日之子',
             path:'/peak',
             img:'../../../static/images/peak.jpg',
             list:[
                  {number:1,id:"1739275", type:3, url:"http://stream1.qqmusic.qq.com:0/1739275.wma", songName:"哥有老婆", singerId:"64495", singerName:"纪晓斌", albumId:"137331", albumName:"哥有老婆", albumLink:"/musicbox/shop/v3/album/31/album_137331.htm", playtime:"239"},
                  {number:2,id:"1050795", type:3, url:"http://stream7.qqmusic.qq.com:0/1050795.wma", songName:"多喜欢你", singerId:"16292", singerName:"小贱", albumId:"89627", albumName:"多喜欢你", albumLink:"/musicbox/shop/v3/album/27/album_89627.htm", playtime:"237"},
                  {number:3,id:"1363973", type:3, url:"http://stream4.qqmusic.qq.com:0/1363973.wma", songName:"Someone Like You", singerId:"12578", singerName:"Adele", albumId:"110534", albumName:"21(Japan Bonus Track Version)", albumLink:"/musicbox/shop/v3/album/34/album_110534.htm", playtime:"287"},
                  {number:4,id:"231008", type:3, url:"http://stream9.qqmusic.qq.com:0/231008.wma", songName:"只想一生跟你走", singerId:"174", singerName:"张学友", albumId:"20178", albumName:"一生跟你走 (年度代表作品辑)", albumLink:"/musicbox/shop/v3/album/78/album_20178.htm", playtime:"313"},
                  {number:5,id:"410316", type:3, url:"http://stream8.qqmusic.qq.com:0/410316.wma", songName:"青花瓷", singerId:"4558", singerName:"周杰伦", albumId:"33021", albumName:"我很忙", albumLink:"/musicbox/shop/v3/album/21/album_33021.htm", playtime:"239"},
                  {number:6,id:"1200324", type:3, url:"http://stream7.qqmusic.qq.com:0/1200324.wma", songName:"藕断丝连", singerId:"7298", singerName:"陈瑞", albumId:"101397", albumName:"把你藏心里", albumLink:"/musicbox/shop/v3/album/97/album_101397.htm", playtime:"291"},
                  {number:7,id:"1191160", type:3, url:"http://stream9.qqmusic.qq.com:0/1191160.wma", songName:"兄弟抱一下", singerId:"221", singerName:"庞龙", albumId:"100659", albumName:"兄弟抱一下", albumLink:"/musicbox/shop/v3/album/59/album_100659.htm", playtime:"265"},
                  {number:8,id:"678753", type:3, url:"http://stream8.qqmusic.qq.com:0/678753.wma", songName:"十一年", singerId:"3558", singerName:"邱永传", albumId:"57259", albumName:"2010年5月新歌速递", albumLink:"/musicbox/shop/v3/album/59/album_57259.htm", playtime:"254"},
                  {number:9,id:"797227", type:3, url:"http://stream9.qqmusic.qq.com:0/797227.wma", songName:"可惜不是你", singerId:"44", singerName:"梁静茹", albumId:"69903", albumName:"现在开始我爱你(Disc1)", albumLink:"/musicbox/shop/v3/album/3/album_69903.htm", playtime:"285"},             
            ]
          },
          {
             url:'../../../static/images/zhongguo.jpg',
             name:'问问音箱·巅峰榜·中国新歌声',
             path:'/china',
             img:'../../../static/images/china.jpg',
             list:[
                  {number:1,id:"777178", type:3, url:"http://stream5.qqmusic.qq.com:0/777178.wma", songName:"你是我的眼", singerId:"11606", singerName:"林宥嘉", albumId:"65505", albumName:"昨天今天明天", albumLink:"/musicbox/shop/v3/album/5/album_65505.htm", playtime:"283"},
                  {number:2,id:"1193426", type:3, url:"http://stream3.qqmusic.qq.com:0/1193426.wma", songName:"有我在", singerId:"4651", singerName:"罗志祥", albumId:"100593", albumName:"有我在", albumLink:"/musicbox/shop/v3/album/93/album_100593.htm", playtime:"264"},
                  {number:3,id:"691943", type:3, url:"http://stream1.qqmusic.qq.com:0/691943.wma", songName:"HIGH歌", singerId:"11476", singerName:"黄龄", albumId:"58502", albumName:"特别", albumLink:"/musicbox/shop/v3/album/2/album_58502.htm", playtime:"283"},
                  {number:4,id:"462620", type:3, url:"http://stream9.qqmusic.qq.com:0/462620.wma", songName:"难以启齿的柔弱", singerId:"12111", singerName:"金志文", albumId:"37632", albumName:"爱比不爱更寂寞", albumLink:"/musicbox/shop/v3/album/32/album_37632.htm", playtime:"250"},
                  {number:5,id:"1067128", type:3, url:"http://stream2.qqmusic.qq.com:0/1067128.wma", songName:"老男孩", singerId:"11761", singerName:"筷子兄弟", albumId:"90932", albumName:"父亲", albumLink:"/musicbox/shop/v3/album/32/album_90932.htm", playtime:"300"},
                  {number:6,id:"434074", type:3, url:"http://stream1.qqmusic.qq.com:0/434074.wma", songName:"最初的梦想", singerId:"4351", singerName:"范玮琪", albumId:"35325", albumName:"Faces Of FanFan 新歌＋精选32首全纪录", albumLink:"/musicbox/shop/v3/album/25/album_35325.htm", playtime:"298"},
                  {number:7,id:"1844597", type:3, url:"http://stream6.qqmusic.qq.com:0/1844597.wma", songName:"诗人漫步", singerId:"227", singerName:"蔡依林", albumId:"139346", albumName:"MUSE", albumLink:"/musicbox/shop/v3/album/46/album_139346.htm", playtime:"308"},
            ]
          },
          {
             url:'../../../static/images/wangluo.jpg',
             name:'巅峰榜·网络歌曲',
             path:'/network',
             img:'../../../static/images/wang.png',
             list:[
                  {number:1,id:"674077", type:3, url:"http://stream7.qqmusic.qq.com:0/674077.wma", songName:"手放开", singerId:"38", singerName:"李圣杰", albumId:"56866", albumName:"孤鸾疗伤版", albumLink:"/musicbox/shop/v3/album/66/album_56866.htm", playtime:"265"},
                  {number:2,id:"1539092", type:3, url:"http://stream3.qqmusic.qq.com:0/1539092.wma", songName:"好男人都死哪儿去了", singerId:"37459", singerName:"崔子格", albumId:"123853", albumName:"好男人都死哪儿去了", albumLink:"/musicbox/shop/v3/album/53/album_123853.htm", playtime:"240"},
                  {number:3,id:"434447", type:3, url:"http://stream6.qqmusic.qq.com:0/434447.wma", songName:"擦肩而过", singerId:"4715", singerName:"郑源", albumId:"35352", albumName:"擦肩而过", albumLink:"/musicbox/shop/v3/album/52/album_35352.htm", playtime:"234"},
                  {number:4,id:"1014867", type:3, url:"http://stream4.qqmusic.qq.com:0/1014867.wma", songName:"朋友的酒", singerId:"6862", singerName:"李晓杰", albumId:"84524", albumName:"2011年10月新歌速递", albumLink:"/musicbox/shop/v3/album/24/album_84524.htm", playtime:"261"},
                  {number:5,id:"1385291", type:3, url:"http://stream4.qqmusic.qq.com:0/1385291.wma", songName:"凌乱的华丽", singerId:"28634", singerName:"单色凌", albumId:"112454", albumName:"凌乱的华丽 EP", albumLink:"/musicbox/shop/v3/album/54/album_112454.htm", playtime:"186"},
                  {number:6,id:"1403189", type:3, url:"http://stream6.qqmusic.qq.com:0/1403189.wma", songName:"一生无悔", singerId:"19229", singerName:"高安 杭娇", albumId:"114086", albumName:"一唱而红", albumLink:"/musicbox/shop/v3/album/86/album_114086.htm", playtime:"242"},
                  {number:7,id:"1547646", type:3, url:"http://stream10.qqmusic.qq.com:0/1547646.wma", songName:"胡闹", singerId:"178", singerName:"吴克羣", albumId:"124530", albumName:"寂寞来了怎么办", albumLink:"/musicbox/shop/v3/album/30/album_124530.htm", playtime:"329"},             
             ]
          },
          {
             url:'../../../static/images/neidi.jpg',
             name:'巅峰榜·内地',
             path:'/inland',
             img:'../../../static/images/inland.jpg',
             list:[
                  {number:1,id:"1887796", type:3, url:"http://stream8.qqmusic.qq.com:0/1887796.wma", songName:"留香", singerId:"4907", singerName:"吴奇隆", albumId:"146668", albumName:"新白发魔女传 电视原声带 Part.1", albumLink:"/musicbox/shop/v3/album/68/album_146668.htm", playtime:"196"},
                  {number:2,id:"1037897", type:3, url:"http://stream7.qqmusic.qq.com:0/1037897.wma", songName:"我想我不够好", singerId:"28634", singerName:"单色凌", albumId:"87797", albumName:"11月网络红歌2", albumLink:"/musicbox/shop/v3/album/97/album_87797.htm", playtime:"172"},
                  {number:3,id:"1878998", type:3, url:"http://stream3.qqmusic.qq.com:0/1878998.wma", songName:"伤心童话（电影版）", singerId:"24833", singerName:"胡夏", albumId:"143913", albumName:"2012年09月新歌速递", albumLink:"/musicbox/shop/v3/album/13/album_143913.htm", playtime:"278"},
                  {number:4,id:"916320", type:3, url:"http://stream1.qqmusic.qq.com:0/916320.wma", songName:"全世界宣布爱你", singerId:"22874", singerName:"孙子涵", albumId:"77451", albumName:"一年一度的夏天", albumLink:"/musicbox/shop/v3/album/51/album_77451.htm", playtime:"235"},
                  {number:5,id:"432421", type:3, url:"http://stream3.qqmusic.qq.com:0/432421.wma", songName:"如果沒有你", singerId:"54", singerName:"莫文蔚", albumId:"35165", albumName:"就i Karen 莫文蔚精选", albumLink:"/musicbox/shop/v3/album/65/album_35165.htm", playtime:"289"},
                  {number:6,id:"1136672", type:3, url:"http://stream4.qqmusic.qq.com:0/1136672.wma", songName:"经过", singerId:"11446", singerName:"陈楚生 何洁", albumId:"96774", albumName:"夫妻那些事", albumLink:"/musicbox/shop/v3/album/74/album_96774.htm", playtime:"244"},
                  {number:7,id:"1232479", type:3, url:"http://stream5.qqmusic.qq.com:0/1232479.wma", songName:"一个人不可能", singerId:"11979", singerName:"丁当", albumId:"101565", albumName:"好难得", albumLink:"/musicbox/shop/v3/album/65/album_101565.htm", playtime:"290"},
                  {number:8,id:"936753", type:3, url:"http://stream2.qqmusic.qq.com:0/936753.wma", songName:"说好了不见面", singerId:"16292", singerName:"小贱", albumId:"76932", albumName:"2011年8月新歌速递2", albumLink:"/musicbox/shop/v3/album/32/album_76932.htm", playtime:"208"},             
             ]

          },
          {
             url:'../../../static/images/gangtai.jpg',
             name:'巅峰榜·港台',
             path:'/taiwan',
             img:'../../../static/images/taiwan.jpg',
             list:[
                  {number:1,id:"1494222", type:3, url:"http://stream6.qqmusic.qq.com:0/1494222.wma", songName:"万有引力", singerId:"3954", singerName:"汪苏泷", albumId:"121274", albumName:"万有引力", albumLink:"/musicbox/shop/v3/album/74/album_121274.htm", playtime:"246"},
                  {number:2,id:"1842091", type:3, url:"http://stream5.qqmusic.qq.com:0/1842091.wma", songName:"再不疯狂我们就老了", singerId:"4615", singerName:"李宇春", albumId:"100385", albumName:"再不疯狂我们就老了", albumLink:"/musicbox/shop/v3/album/85/album_100385.htm", playtime:"246"},
                  {number:3,id:"440817", type:3, url:"http://stream3.qqmusic.qq.com:0/440817.wma", songName:"我们都一样", singerId:"6499", singerName:"张杰", albumId:"35875", albumName:"明天过后", albumLink:"/musicbox/shop/v3/album/75/album_35875.htm", playtime:"303"},
                  {number:4,id:"793420", type:3, url:"http://stream5.qqmusic.qq.com:0/793420.wma", songName:"Rolling in the Deep", singerId:"12578", singerName:"Adele", albumId:"67005", albumName:"21 (Target Deluxe Edition)", albumLink:"/musicbox/shop/v3/album/5/album_67005.htm", playtime:"229"},
                  {number:5,id:"1913422", type:3, url:"http://stream3.qqmusic.qq.com:0/1913422.wma", songName:"御龙品青梅", singerId:"4674", singerName:"刘惜君", albumId:"121963", albumName:"御龙在天场景音乐", albumLink:"/musicbox/shop/v3/album/63/album_121963.htm", playtime:"207"},
                  {number:6,id:"1197338", type:3, url:"http://stream7.qqmusic.qq.com:0/1197338.wma", songName:"逆战", singerId:"6499", singerName:"张杰", albumId:"101177", albumName:"逆战", albumLink:"/musicbox/shop/v3/album/77/album_101177.htm", playtime:"229"},
                  {number:7,id:"874843", type:3, url:"http://stream5.qqmusic.qq.com:0/874843.wma", songName:"不要在我寂寞的时候说爱我（国）", singerId:"4715", singerName:"郑源", albumId:"33812", albumName:"源情歌", albumLink:"/musicbox/shop/v3/album/12/album_33812.htm", playtime:"244"},
                  {number:8,id:"1673329", type:3, url:"http://stream7.qqmusic.qq.com:0/1673329.wma", songName:"单身美好", singerId:"11626", singerName:"郭静", albumId:"133127", albumName:"花是爱 电视原声带", albumLink:"/musicbox/shop/v3/album/27/album_133127.htm", playtime:"249"},             
             ]
          },
          {
             url:'../../../static/images/oumei.jpg',
             name:'巅峰榜·欧美',
             path:'/europe',
             img:'../../../static/images/europe.jpg',
             list:[
                  {number:1,id:"935920", type:3, url:"http://stream7.qqmusic.qq.com:0/935920.wma", songName:"策马奔腾", singerId:"5829", singerName:"凤凰传奇", albumId:"77377", albumName:"大声唱", albumLink:"/musicbox/shop/v3/album/77/album_77377.htm", playtime:"282"},
                  {number:2,id:"447257", type:3, url:"http://stream4.qqmusic.qq.com:0/447257.wma", songName:"AlwaysOnline", singerId:"4286", singerName:"林俊杰", albumId:"36160", albumName:"JJ陆", albumLink:"/musicbox/shop/v3/album/60/album_36160.htm", playtime:"222"},
                  {number:3,id:"430057", type:3, url:"http://stream10.qqmusic.qq.com:0/430057.wma", songName:"类似爱情", singerId:"165", singerName:"萧亚轩", albumId:"34887", albumName:"三面夏娃", albumLink:"/musicbox/shop/v3/album/87/album_34887.htm", playtime:"282"},
                  {number:4,id:"1919590", type:3, url:"http://stream9.qqmusic.qq.com:0/1919590.wma", songName:"还好有你在", singerId:"14262", singerName:"至上励合", albumId:"149889", albumName:"还好有你在", albumLink:"/musicbox/shop/v3/album/89/album_149889.htm", playtime:"293"},
                  {number:5,id:"1113312", type:3, url:"http://stream6.qqmusic.qq.com:0/1113312.wma", songName:"滴答", singerId:"6307", singerName:"侃侃", albumId:"94666", albumName:"《北京爱情故事》音乐原声", albumLink:"/musicbox/shop/v3/album/66/album_94666.htm", playtime:"232"},
                  {number:6,id:"1600197", type:3, url:"http://stream8.qqmusic.qq.com:0/1600197.wma", songName:"我知道你都知道", singerId:"5062", singerName:"薛之谦", albumId:"122328", albumName:"几个薛之谦", albumLink:"/musicbox/shop/v3/album/28/album_122328.htm", playtime:"274"},
                  {number:7,id:"1761210", type:3, url:"http://stream7.qqmusic.qq.com:0/1761210.wma", songName:"快乐 不再快乐", singerId:"31719", singerName:"付梦妮", albumId:"138767", albumName:"童话二分之一 电视原声带", albumLink:"/musicbox/shop/v3/album/67/album_138767.htm", playtime:"252"},
                  {number:8,id:"974039", type:3, url:"http://stream1.qqmusic.qq.com:0/974039.wma", songName:"爱着你却伤了她", singerId:"19722", singerName:"冷漠", albumId:"90215", albumName:"爱过以后", albumLink:"/musicbox/shop/v3/album/15/album_90215.htm", playtime:"260"},             
             ]
          },
          {
             url:'../../../static/images/hanguo.jpg',
             name:'巅峰榜·韩国',
             path:'/korea',
             img:'../../../static/images/korea.jpg',
             list:[
                  {number:1,id:"1891844", type:3, url:"http://stream9.qqmusic.qq.com:0/1891844.wma", songName:"愿得一人心", singerId:"23080", singerName:"李行亮", albumId:"141889", albumName:"愿得一人心", albumLink:"/musicbox/shop/v3/album/89/album_141889.htm", playtime:"277"},
                  {number:2,id:"1831828", type:3, url:"http://stream7.qqmusic.qq.com:0/1831828.wma", songName:"爱的回归线", singerId:"6119", singerName:"陈韵若 陈每文", albumId:"97617", albumName:"爱情公寓3 电视原声带", albumLink:"/musicbox/shop/v3/album/17/album_97617.htm", playtime:"257"},
                  {number:3,id:"577172", type:3, url:"http://stream2.qqmusic.qq.com:0/577172.wma", songName:"爱情转移", singerId:"143", singerName:"陈奕迅", albumId:"48918", albumName:"1997-2007 跨世纪国语精选 CD2", albumLink:"/musicbox/shop/v3/album/18/album_48918.htm", playtime:"262"},
                  {number:4,id:"1459416", type:3, url:"http://stream6.qqmusic.qq.com:0/1459416.wma", songName:"无颜女", singerId:"22704", singerName:"徐良 小凌", albumId:"121966", albumName:"无颜女", albumLink:"/musicbox/shop/v3/album/66/album_121966.htm", playtime:"214"},
                  {number:5,id:"1923586", type:3, url:"http://stream8.qqmusic.qq.com:0/1923586.wma", songName:"可能你还爱我", singerId:"11957", singerName:"炎亚纶", albumId:"150218", albumName:"纪念日", albumLink:"/musicbox/shop/v3/album/18/album_150218.htm", playtime:"278"},
                  {number:6,id:"726895", type:3, url:"http://stream9.qqmusic.qq.com:0/726895.wma", songName:"最炫民族风", singerId:"5829", singerName:"凤凰传奇", albumId:"61517", albumName:"我从草原来 新歌+精选", albumLink:"/musicbox/shop/v3/album/17/album_61517.htm", playtime:"284"},             
             ]
          },
          {
             url:'../../../static/images/riben.jpg',
             name:'巅峰榜·日本',
             path:'/japan',
             img:'../../../static/images/japan.jpg',
             list:[
                  {number:1,id:"1781758", type:3, url:"http://stream7.qqmusic.qq.com:0/1781758.wma", songName:"任由爱", singerId:"13578", singerName:"BY2", albumId:"140197", albumName:"爱情是从告白开始的 电视原声带", albumLink:"/musicbox/shop/v3/album/97/album_140197.htm", playtime:"210"},
                  {number:2,id:"1474843", type:3, url:"http://stream9.qqmusic.qq.com:0/1474843.wma", songName:"胡萝卜须", singerId:"7221", singerName:"许嵩", albumId:"119459", albumName:"梦游计", albumLink:"/musicbox/shop/v3/album/59/album_119459.htm", playtime:"231"},
                  {number:3,id:"1554114", type:3, url:"http://stream9.qqmusic.qq.com:0/1554114.wma", songName:"拥抱你的微笑", singerId:"11626", singerName:"郭静", albumId:"125039", albumName:"原来爱就是甜蜜 电视原声带", albumLink:"/musicbox/shop/v3/album/39/album_125039.htm", playtime:"240"},
                  {number:4,id:"974808", type:3, url:"http://stream9.qqmusic.qq.com:0/974808.wma", songName:"依然爱你", singerId:"265", singerName:"王力宏", albumId:"81359", albumName:"火力全开 新歌+精选", albumLink:"/musicbox/shop/v3/album/59/album_81359.htm", playtime:"246"},
                  {number:5,id:"1791017", type:3, url:"http://stream10.qqmusic.qq.com:0/1791017.wma", songName:"存在", singerId:"4604", singerName:"汪峰", albumId:"140820", albumName:"北京青年 电视原声带", albumLink:"/musicbox/shop/v3/album/20/album_140820.htm", playtime:"284"},
                  {number:6,id:"1500512", type:3, url:"http://stream8.qqmusic.qq.com:0/1500512.wma", songName:"这样爱了", singerId:"19868", singerName:"张婧", albumId:"115748", albumName:"轩辕剑之天之痕", albumLink:"/musicbox/shop/v3/album/48/album_115748.htm", playtime:"263"},             
             ]
          },
          {
             url:'../../../static/images/mv.jpg',
             name:'巅峰榜·MV',
             path:'/mv',
             img:'../../../static/images/mv1.jpg',
             list:[
                  {number:1,id:"1531817", type:3, url:"http://stream9.qqmusic.qq.com:0/1531817.wma", songName:"幻听", singerId:"7221", singerName:"许嵩", albumId:"119459", albumName:"梦游计", albumLink:"/musicbox/shop/v3/album/59/album_119459.htm", playtime:"273"},
                  {number:2,id:"1833391", type:3, url:"http://stream2.qqmusic.qq.com:0/1833391.wma", songName:"末日不孤单", singerId:"61981", singerName:"李代沫 陈浩轩", albumId:"135242", albumName:"2012年08月新歌速递", albumLink:"/musicbox/shop/v3/album/42/album_135242.htm", playtime:"272"},
                  {number:3,id:"1319052", type:3, url:"http://stream6.qqmusic.qq.com:0/1319052.wma", songName:"我的歌声里", singerId:"34703", singerName:"曲婉婷", albumId:"107526", albumName:"我的歌声里", albumLink:"/musicbox/shop/v3/album/26/album_107526.htm", playtime:"208"},
                  {number:4,id:"1878910", type:3, url:"http://stream2.qqmusic.qq.com:0/1878910.wma", songName:"最近好吗", singerId:"224", singerName:"张韶涵", albumId:"130382", albumName:"有形的翅膀", albumLink:"/musicbox/shop/v3/album/82/album_130382.htm", playtime:"249"},
                  {number:5,id:"916834", type:3, url:"http://stream5.qqmusic.qq.com:0/916834.wma", songName:"那些年", singerId:"24833", singerName:"胡夏", albumId:"77485", albumName:"那些年，我们一起追的女孩", albumLink:"/musicbox/shop/v3/album/85/album_77485.htm", playtime:"371"},             
             ]
          },
          {
             url:'../../../static/images/tengxun.jpg',
             name:'巅峰榜·腾讯音乐人原创榜',
             path:'/tencent',
             img:'../../../static/images/tencent.jpg',
             list:[
                  {number:1,id:"1439470", type:3, url:"http://stream8.qqmusic.qq.com:0/1439470.wma", songName:"一吻天荒", singerId:"4357", singerName:"胡歌", albumId:"115748", albumName:"轩辕剑之天之痕", albumLink:"/musicbox/shop/v3/album/48/album_115748.htm", playtime:"250"},
                  {number:2,id:"1913708", type:3, url:"http://stream2.qqmusic.qq.com:0/1913708.wma", songName:"淋雨一直走", singerId:"224", singerName:"张韶涵", albumId:"130382", albumName:"有形的翅膀", albumLink:"/musicbox/shop/v3/album/82/album_130382.htm", playtime:"205"},
                  {number:3,id:"1067125", type:3, url:"http://stream2.qqmusic.qq.com:0/1067125.wma", songName:"父亲", singerId:"11761", singerName:"筷子兄弟", albumId:"90932", albumName:"父亲", albumLink:"/musicbox/shop/v3/album/32/album_90932.htm", playtime:"301"},
                  {number:4,id:"1078214", type:3, url:"http://stream5.qqmusic.qq.com:0/1078214.wma", songName:"后会无期", singerId:"22704", singerName:"徐良", albumId:"91325", albumName:"不良少年", albumLink:"/musicbox/shop/v3/album/25/album_91325.htm", playtime:"211"},
                  {number:5,id:"1908164", type:3, url:"http://stream3.qqmusic.qq.com:0/1908164.wma", songName:"爱输给了谁", singerId:"15809", singerName:"黄勇", albumId:"143913", albumName:"2012年09月新歌速递", albumLink:"/musicbox/shop/v3/album/13/album_143913.htm", playtime:"209"},
                  {number:6,id:"804997", type:3, url:"http://stream4.qqmusic.qq.com:0/804997.wma", songName:"因为爱情", singerId:"143", singerName:"陈奕迅 王菲", albumId:"68074", albumName:"Stranger Under My Skin", albumLink:"/musicbox/shop/v3/album/74/album_68074.htm", playtime:"217"},             
             ]
          },
          {
             url:'../../../static/images/kge.jpg',
             name:'巅峰榜·K歌金曲',
             path:'/greathit',
             img:'../../../static/images/greathit.png',
             list:[
                  {number:1,id:"185675", type:3, url:"http://stream2.qqmusic.qq.com:0/185675.wma", songName:"我怀念的", singerId:"109", singerName:"孙燕姿", albumId:"15902", albumName:"逆光", albumLink:"/musicbox/shop/v3/album/2/album_15902.htm", playtime:"287"},
                  {number:2,id:"2441405", type:3, url:"http://stream9.qqmusic.qq.com:0/2441405.wma", songName:"不再让你孤单", singerId:"208", singerName:"水木年华", albumId:"150859", albumName:"2012年10月新歌速递", albumLink:"/musicbox/shop/v3/album/59/album_150859.htm", playtime:"343"},
                  {number:3,id:"416764", type:3, url:"http://stream4.qqmusic.qq.com:0/416764.wma", songName:"洋葱", singerId:"11608", singerName:"杨宗纬", albumId:"33703", albumName:"鸽子", albumLink:"/musicbox/shop/v3/album/3/album_33703.htm", playtime:"278"},
                  {number:4,id:"97870", type:3, url:"http://stream7.qqmusic.qq.com:0/97870.wma", songName:"一直很安静", singerId:"3346", singerName:"阿桑", albumId:"8229", albumName:"寂寞在唱歌", albumLink:"/musicbox/shop/v3/album/29/album_8229.htm", playtime:"251"},
                  {number:5,id:"469831", type:3, url:"http://stream2.qqmusic.qq.com:0/469831.wma", songName:"关不上的窗", singerId:"4365", singerName:"周传雄", albumId:"38202", albumName:"恋人创世纪", albumLink:"/musicbox/shop/v3/album/2/album_38202.htm", playtime:"293"},
                  {number:6,id:"1092641", type:3, url:"http://stream4.qqmusic.qq.com:0/1092641.wma", songName:"我想大声告诉你", singerId:"15798", singerName:"樊凡", albumId:"92824", albumName:"我想大声告诉你", albumLink:"/musicbox/shop/v3/album/24/album_92824.htm", playtime:"275"},
                  {number:7,id:"797241", type:3, url:"http://stream9.qqmusic.qq.com:0/797241.wma", songName:"暖暖", singerId:"44", singerName:"梁静茹", albumId:"67399", albumName:"现在开始我爱你(Disc2)", albumLink:"/musicbox/shop/v3/album/99/album_67399.htm", playtime:"243"},
                  {number:8,id:"1414751", type:3, url:"http://stream4.qqmusic.qq.com:0/1414751.wma", songName:"慢慢", singerId:"174", singerName:"张学友", albumId:"20164", albumName:"Black & White", albumLink:"/musicbox/shop/v3/album/64/album_20164.htm", playtime:"282"},                         
             ]
          },
          

       ]

    },

    mutations: {
        
    },

    actions: {
       

    }
}

export default list
