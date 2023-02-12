export interface Buisness {
  id: string;
  img: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  products: Product[];
}

export interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
  // description: string;
}

export const businesses: Buisness[] = [
  {
    id: "mona",
    name: "Monas Crafts and Designs",
    img: "https://i.imgur.com/Bqug2BD.png",
    shortDescription: "Hand-crafted designs by Mona",
    longDescription:
      "Mona is a 40-year-old entrepreneur who runs a successful craft and design business. She started her business from scratch when she was struggling to make ends meet after a difficult divorce. Mona always had a passion for crafting, and after attending a few workshops, she began creating beautiful pieces that she sold at local markets. Today, Mona has her own studio where she creates unique, hand-crafted pieces that people love. Her story is one of resilience and determination.",
    products: [
      {
        id: "craft1",
        img: "https://image.everypixel.com/blockchain/f8/c2/f8c2a731-f273-4305-90f8-c65df1f6da4e.jpg",
        name: "Hand-crafted vase",
        price: 25.99,
      },
      {
        id: "craft2",
        img: "https://image.everypixel.com/blockchain/fc/8d/fc8d557a-826e-47f0-afa1-2b0ea707f07f.jpg",
        name: "Decorative Coffee Mug",
        price: 45.99,
      },
      {
        id: "craft3",
        img: "http://image.shutterstock.com/display_pic_with_logo/3994366/431914957/stock-photo-young-woman-with-muesli-bowl-girl-eating-breakfast-cereals-with-nuts-pumpkin-seeds-oats-and-431914957.jpg",
        name: "Hand-crafted bowl",
        price: 35.99,
      },
      {
        id: "craft4",
        img: "http://st3.depositphotos.com/2249091/12743/i/450/depositphotos_127438338-Traditional-Christmas-tree.jpg",
        name: "Wall Decoration",
        price: 20.99,
      },
    ],
  },
  {
    id: "amara",
    name: "Amara's Fashion Boutique",
    img: "https://i.imgur.com/SmMihM3.png",
    shortDescription: "Trendy and affordable clothes for all sizes",
    longDescription:
      "Amara is a 25-year-old fashion enthusiast who started her own clothing store. She noticed that most fashion retailers don't cater to women with different body types, and decided to open her own boutique to solve this problem. Amara's store provides trendy, comfortable, and affordable clothes for women of all sizes. Her story is one of passion and inclusivity.",
    products: [
      {
        id: "outfit1",
        img: "https://www.everypixel.com/preview_collections/20221003/futuristic_woman_7",
        name: "Off-shoulder top",
        price: 35.99,
      },
      {
        id: "outfit2",
        img: "https://image.shutterstock.com/display_pic_with_logo/2391122/258673688/stock-photo-beautiful-young-sexy-girl-with-long-wavy-brunette-hair-with-a-bright-evening-make-up-perfect-summer-258673688.jpg",
        name: "Pink Top",
        price: 39.99,
      },
      {
        id: "outfit3",
        img: "https://image.shutterstock.com/display_pic_with_logo/2391122/258673688/stock-photo-beautiful-young-sexy-girl-with-long-wavy-brunette-hair-with-a-bright-evening-make-up-perfect-summer-258673688.jpg",
        name: "White Off-Top",
        price: 50.99,
      },
      {
        id: "outfit4",
        img: "https://image.shutterstock.com/display_pic_with_logo/594385/594385,1275486622,32/stock-photo-attractive-young-fashion-model-in-designer-dress-posing-54393049.jpg",
        name: "Designer T-shirt",
        price: 70.99,
      },
      {
        id: "outfit5",
        img: "https://image.shutterstock.com/display_pic_with_logo/594385/594385,1275486624,33/stock-photo-attractive-young-fashion-model-in-designer-dress-posing-54393052.jpg",
        name: "Flower T-shirt",
        price: 40.99,
      },
    ],
  },
  {
    id: "samantha",
    name: "Samantha's Eco-friendly home decor",
    img: "https://i.imgur.com/7PaDhEQ.png",
    shortDescription: "Eco-friendly home decor",
    longDescription:
      "Samantha is a 35-year-old entrepreneur who is passionate about the environment. She started her own eco-friendly home decor business to create beautiful and sustainable pieces for the home. Samantha's story is one of a strong, independent woman who is making a positive impact on the world.",
    products: [
      {
        id: "decor1",
        img: "http://st.depositphotos.com/1001855/4928/i/450/depositphotos_49287151-Vintage-home-decor.jpg",
        name: "Sustainable Glass Vase",
        price: 49.99,
      },
      {
        id: "decor2",
        img: "https://image.everypixel.com/blockchain/bd/b4/bdb40262-8bad-45cb-830e-ba041806b501.jpg",
        name: "Upcycled planters",
        price: 348.99,
      },
      {
        id: "decor4",
        img: "http://image.shutterstock.com/display_pic_with_logo/169660/189037031/stock-photo-two-bouquet-of-lilac-flowers-in-zinc-pots-on-a-white-wooden-board-home-decor-in-a-rustic-style-189037031.jpg",
        name: "Liliac Planters",
        price: 45.99,
      },
      {
        id: "decor5",
        img: "http://thumbs.dreamstime.com/x/vase-red-flowers-modern-white-living-room-28843616.jpg",
        name: "Rose Vase",
        price: 42.99,
      },
      {
        id: "decor6",
        img: "http://image.shutterstock.com/display_pic_with_logo/633439/324204629/stock-photo-happy-thanksgiving-tag-pumpkins-and-autumn-home-decor-with-rustic-wood-background-324204629.jpg",
        name: "Halloween Vase",
        price: 75.99,
      },
    ],
  },
  {
    id: "maria",
    img: "https://i.imgur.com/YDgne21.png",
    name: "Maria's Pretty Jewelry",
    shortDescription: "Handmade jewelry by Maria",
    longDescription:
      "Maria is a 50-year-old woman who started making jewelry as a hobby, but her pieces quickly caught the attention of her friends and family. She turned her hobby into a full-fledged business, creating beautiful and unique pieces that people love. Maria's story is one of creativity and the power of following your passion.",
    products: [
      {
        id: "jewelry1",
        img: "http://static0.bigstockphoto.com/thumbs/2/3/1/large2/132117830.jpg",
        name: "Handmade rings",
        price: 19.99,
      },
      {
        id: "jewelry2",
        img: "http://images.assetsdelivery.com/thumbnails/carla720/carla7201309/carla720130900048.jpg",
        name: "Handmade Bracelet",
        price: 29.99,
      },
      {
        id: "jewelry3",
        img: "http://st.depositphotos.com/1009905/3984/i/450/depositphotos_39840633-Handmade-jewelry.jpg",
        name: "Handmade Neckless and bracelet set",
        price: 40.99,
      },
      {
        id: "jewelry4",
        img: "http://st2.depositphotos.com/4406731/6496/i/450/depositphotos_64966341-Handmade-jewelry-magical-beautiful-earrings-made-of-epoxy-resin-and-plants-and-flowers.jpg",
        name: "Handmade Earrings",
        price: 49.99,
      },
    ],
  },
];
