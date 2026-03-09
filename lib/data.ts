export interface Treatment {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  details: string;
}

export const treatments: Treatment[] = [
  {
    id: '1',
    title: 'Saç Ekimi',
    slug: 'sac-ekimi',
    description: 'Modern tekniklerle doğal ve kalıcı saç ekimi çözümleri.',
    image: 'https://picsum.photos/seed/hair/800/600',
    details: 'FUE ve DHI teknikleri ile en doğal sonuçları elde ediyoruz. Uzman ekibimizle saç dökülmesi sorununuza kalıcı çözüm sunuyoruz.'
  },
  {
    id: '2',
    title: 'Botoks',
    slug: 'botoks',
    description: 'Kırışıklık giderme ve gençleşme için profesyonel botoks uygulamaları.',
    image: 'https://picsum.photos/seed/botox/800/600',
    details: 'Mimik çizgilerini hafifletmek ve daha taze bir görünüm kazanmak için güvenli botoks uygulamaları yapıyoruz.'
  },
  {
    id: '3',
    title: 'Ozon Terapi',
    slug: 'ozon-terapi',
    description: 'Vücut direncinizi artıran ve hücre yenilenmesini destekleyen ozon tedavisi.',
    image: 'https://picsum.photos/seed/ozone/800/600',
    details: 'Bağışıklık sistemini güçlendiren, kronik yorgunluğu gideren ve genel sağlık durumunu iyileştiren ozon terapi seansları.'
  },
  {
    id: '4',
    title: 'Lazer Epilasyon',
    slug: 'lazer-epilasyon',
    description: 'İstenmeyen tüylerden kalıcı olarak kurtulmanın en modern yolu.',
    image: 'https://picsum.photos/seed/laser/800/600',
    details: 'Son teknoloji cihazlarımızla her cilt tipine uygun, acısız ve etkili lazer epilasyon hizmeti sunuyoruz.'
  },
  {
    id: '5',
    title: 'Dermal Dolgu',
    slug: 'dermal-dolgu',
    description: 'Yüz hatlarını belirginleştirme ve hacim kazandırma uygulamaları.',
    image: 'https://picsum.photos/seed/filler/800/600',
    details: 'Dudak dolgusu, elmacık kemiği belirginleştirme ve nazolabial çizgilerin giderilmesi için hyaluronik asit bazlı dolgu uygulamaları.'
  },
  {
    id: '6',
    title: 'Soğuk Lipoliz',
    slug: 'soguk-lipoliz',
    description: 'Bölgesel yağlanmalara karşı cerrahisiz dondurarak zayıflama.',
    image: 'https://picsum.photos/seed/cool/800/600',
    details: 'Vücudun belirli bölgelerindeki dirençli yağ hücrelerini dondurarak yok eden etkili bir vücut şekillendirme yöntemi.'
  },
  {
    id: '7',
    title: 'Scarlet X',
    slug: 'scarlet-x',
    description: 'Altın iğne radyofrekans teknolojisi ile cilt yenileme ve sıkılaştırma.',
    image: 'https://picsum.photos/seed/scarlet/800/600',
    details: 'Cilt kalitesini artıran, gözenekleri sıkılaştıran ve ince kırışıklıkları gideren yeni nesil altın iğne tedavisi.'
  },
  {
    id: '8',
    title: 'Endermoloji',
    slug: 'endermoloji',
    description: 'Selülit tedavisi ve vücut sıkılaştırma için mekanik masaj teknolojisi.',
    image: 'https://picsum.photos/seed/lpg/800/600',
    details: 'LPG teknolojisi ile bağ dokusunu uyararak selülit görünümünü azaltan ve vücudu şekillendiren uygulama.'
  },
  {
    id: '9',
    title: 'Ultraformer',
    slug: 'ultraformer',
    description: 'Ameliyatsız yüz germe ve odaklı ultrason ile cilt sıkılaştırma.',
    image: 'https://picsum.photos/seed/hifu/800/600',
    details: 'HIFU teknolojisi ile cildin derin katmanlarına etki ederek doğal bir germe ve gençleşme etkisi sağlar.'
  }
];
