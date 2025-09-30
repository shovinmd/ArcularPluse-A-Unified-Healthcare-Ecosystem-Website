'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "a68293d80a36ba3a064916a8fab6b964",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "80513e3424082518293ca73e6e84de28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4766abb29d73c95813c51423373fa1a8",
".git/logs/refs/heads/main": "21d7e6b6bc7fddba5f633a7001a1ca84",
".git/logs/refs/remotes/origin/main": "da57c941aaddf5879778e3720d3196fc",
".git/objects/00/013a98d3d8eb0184867abca233c7969c86ffee": "c63e707942f79126838b5d4833100e2e",
".git/objects/01/207a48c00d27bb4f6b128743d0fbd5d513e0d8": "ffda8587b1f584d730704050d345d31a",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/43027405fa19b93c38cca5ad088f5d4ad78bec": "8dfc9d91bce6b6845f074099ddf37ece",
".git/objects/07/db5900ad5bc3e4b5e059cd5d0769934ef51697": "b2a726c43231ccd2a8cb636200c5fa02",
".git/objects/09/460a7e42c96d39fc9b4c93c132870a40e76fdf": "4a66cda05f8d2030185cee902a147988",
".git/objects/13/ba177c562c404c38866ac78e2e011b0d65bc17": "a3983fb2d0dd77f4c502da7020a4192b",
".git/objects/14/21190c83d5c59aaaad20fd93ef2a0ae8786fe4": "e76c9f1d51d612f1a18591b07a5f9f8d",
".git/objects/18/5c012eb91e4af6318389b3b76c806210eadad1": "55d732642dc86c66e7a0eeaf2b2ac05d",
".git/objects/18/f21119c32d57d7bbb580e598be13988a929e83": "0c29fffc5a248fb8c6732b822100df73",
".git/objects/1d/137e14cb69cfc84ce3020a9a94173fea3bc863": "d40a37700d9b2f56837b88ee4d51459f",
".git/objects/1d/5dfe1192b8b3a384a7d5485a74c9a8deaff906": "443663b358aad36d77c4ede1a4e365b2",
".git/objects/1f/72f8f58e233991a6b421a20681e1f10d8d6ec3": "da4f47557491e407934b71e7a8d0e186",
".git/objects/20/2f97f738553fd59798563f36a4ea7a5cb397b0": "36e9886f56808017422416f72005b610",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/66971e2a11b3bb8d0c35748b788a5ac63573d0": "afe1bf8167837859b5c629f9f5708805",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/28/765f92d8b6aeee35d60a250bd53f7293b3cc1e": "5f7aa990523f72ae5258ed2601e8e645",
".git/objects/29/318360b84492195e3fdcd967a24e0b040d9a68": "ad23669d8e119a2575dbffddb3cdb6e1",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/b14436f1a2a22f85eef9da2365948c336db208": "fb465a12f7d6d1b6c99f24c8264e6087",
".git/objects/2f/a67bac7e42e6e7fb9ccf0d61f84429dd1f76f4": "5d96870aeaeea0b2089133b17ec1e919",
".git/objects/31/3d865f10d1721cb9442ac5e2c47dee26b3095d": "92b52d3b31e0614ad15347632f7714af",
".git/objects/31/a7e0b38a54f8b6631bce2b1ccd795432fa2460": "b72f9ba6c594ba48533e7d74e90b4850",
".git/objects/32/69314ccf7e0c8d2735fee13a17df28da3d5ba0": "53bfba15f2d6569ceeab88070bc612f9",
".git/objects/32/77c9af6fb184025d5637180fdda76dba39b28e": "b54448561f3b1640733f919d2c38b60b",
".git/objects/37/ce37067bdcfdbeccd70fa13527757dacdf9452": "5fbafd88caa013e475d9fc6009abf7e8",
".git/objects/38/dda15723a129a79ab4cd916b0dc4fbc4146c1b": "ec5430a6d3486546d65916c7fc7f741b",
".git/objects/3a/623ad51da1ac0f9135254793bce6216338737c": "dac8806eeb5931860b96de5d9cd5565c",
".git/objects/3a/f09f527a8fcefddb4ad27f4a1a0d6a20bfc7d3": "5bf2ab7d317d30d05b719c9642461d4c",
".git/objects/3c/026868ea6c5a67a2deea9457fda0134b92c45a": "1c141741fd89743ebd1f472b83b48ee0",
".git/objects/3d/f9025983a748731f7724c9cb871df64f2c6233": "1688e76f5c9424c334fb2b18e4e32d53",
".git/objects/3f/8cb8178e9e69cd4083479da079a74ff0d665c1": "78d0f2f6da2e8c60465fa6518a5a3b08",
".git/objects/3f/8d067fa955a5da515573fc869afe03cb5e0b71": "a6415c93cb01e932936573ec97b9ddb2",
".git/objects/40/04c6598d58c85315e15850ecb0feb393b6f68d": "1405b4baaea48f8f6fb7196db5746914",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/45/033faa0d08e062c9021e5c4ecffd1fb3ef7981": "c7bea3f7e95eb2d125949e86b74a9bba",
".git/objects/45/564b65275f71dd8d484c37985caf9fc0f09afe": "819a8bc9ec0755125541da8bcee576a3",
".git/objects/4b/496e0b68aacf7827abb90e250ff1a9f10710ba": "a4e53818de4f121235ecdae7f55257a7",
".git/objects/4c/5be844ca2a9011177ca8c9d2ae1b57ef5c8bd5": "93b327c7f27f76c0461c14ecc74e158d",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/d740d23d0cb47e4c00f51683d81ecc6469fd79": "e1a730fe7d9cff4adbdf5f77a8641567",
".git/objects/4e/9e334eb96ed10d2ed21cea2ecaa2ba54f8b5ff": "fca9d676303e0bfb4e33f7a5c3ef97b3",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/50/8f4b3b8533cd08198d49f61aa8dc9689560093": "fa113af7092bd834a5d01ccd52a1b82e",
".git/objects/50/f45415929fc440293ec2118433ffb9ebfa12d9": "aaf2523727a8beee567c29feb2432567",
".git/objects/51/837843755e5dfe4a248fb3c3a941f77784af10": "d66187f78054eb1833f57bceccf0cc84",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/52/6eeb2f9fdc31e0b0ef5bad37292d115f0c07c2": "9c5970887283f7ff9cb9bf9ecaad0ce6",
".git/objects/58/50b5a2b33214ad461b803f61d577f708e475d4": "bd155e0d189b4eed874a0d3ebffc7e7b",
".git/objects/5f/832edacc3e0ebc914f273fbd662ca012a4f130": "d7f83a9674574649e754039427fccb3a",
".git/objects/5f/c5ccd656cbc0445d4729c0cfb2e7d180170e77": "18754b8a590d97f5be9da65f183f7075",
".git/objects/5f/c906641cad2ff743fe7962d6885f33b57d810f": "20f38a6e5001f09e239bedbd62b2f3ee",
".git/objects/5f/f4803b708b604cd06594563f9accd6ad1f753e": "ec4a59b0a07426e3d29f59065be6277a",
".git/objects/60/551ea5947cb8d33ac501d193d97b7cb572e298": "873d82f241e02d9bf2218a8f6c3e927f",
".git/objects/61/2919b0d483c5d1709e97785a742758db2be9aa": "ae76ca2285a2905f2553f23eb7700785",
".git/objects/61/e637400c92cfd009c09b889f3beee3832f5d28": "68074af7774e144d5ea03ddee9fbcb5a",
".git/objects/62/c8f1d1ec5022000161fb846a62cb53a94f9cf7": "d268a60209d94c2c387e5d82e0a7e81c",
".git/objects/65/23ee3abd49e64cbb7347f079678d17a8116b7a": "adba57161b922e43e246ccde8f456221",
".git/objects/65/3a642e80e473dc62e4dd9f849cd5fafaa1ad61": "f95150981213b148dd39bc7d47b066ab",
".git/objects/67/0475ea66cbcdaa35f7fd58bf9ecbb6693e2152": "8f30fb4e35bfb49e6101dc9e812a31b1",
".git/objects/69/00101c5a8f1b17688b5cbca0ae0c8cd12581f9": "9544a4d026ebf22d82f49142938bb115",
".git/objects/69/8fbb57122ec9cc43e66ae76637a99611ec5c43": "1813756eb73c0bfdd09ff1db64a72f25",
".git/objects/69/b6d37c14c59ff5b8c97f1d308f54307498ec87": "2972fa1c9540592c0d9bab40908f699e",
".git/objects/6c/3fbc47a6842bf605279af4d712fb8609c72965": "91f65ca820b694780896155dfbc70acd",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/71/0bf9d5e33bbdfc40593b6058fb4e6f5a1d56b2": "fd3265f1fab4532d60278ec28ca661f9",
".git/objects/71/fb475aaf945a479bb457ddeaea4d917bf0164b": "1478e089feda87679a2a5e0c66e36f94",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/76/dce1a339b0084c5cc17e2bcf8b4412482a24d0": "bf71ce0694ee24438b8ff95057f2f15b",
".git/objects/78/7838f872d2cef97d9df6ae1a77672487770eb1": "64a3673c360fb6667f250eff3a2e5477",
".git/objects/78/b48376729ad6b0875154016f260e72b1f13a95": "1b8d7a510b904ed92914dba02b79faf4",
".git/objects/78/d8beb8b999ce808d95c1835a09aaf3c2aa13da": "2ef048c9dde4b89115b769b075e4c222",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/72a19415afd8f85007d25eb2952e650e7afac2": "ee18d4a842390b0b06015eb486ab81de",
".git/objects/7a/a13a1ded7b391e27bd36645ea0c320ae2ce4a6": "32e3457c2af8a4caf4b0e03bff261116",
".git/objects/7b/b693e9dc1ae620e9f3d9f3d4670271ebbe8398": "a52f038b3248de0ec5aa3751ec0cc402",
".git/objects/80/a0975d2f007594356fb7257dd3caf8c2b11de6": "0e8c44fc2141132cc98da9c1be9ea92b",
".git/objects/80/e701db187bd36e595df083169843caa1906d17": "8ea1b45a3ba78decaa90ead29ea111f7",
".git/objects/84/fbe0e242ac6ad5b5a4035196c7dc58ee8378fc": "8d31b6411f770092c5ff00a227185bcb",
".git/objects/87/7327525bdb47d1323c28c5d456e9110319ad9f": "9a7ed77bfa42f3e1c76d2f864ced9833",
".git/objects/88/ea7ee042f93a070e27218c67d1582f4525bed1": "351de7b19c2141eda56dc6dbf92cca46",
".git/objects/8a/cee20d92e126d2fdc093d5e7e16f16e2872428": "0bf27bd087f6626d65257a81ee364dd0",
".git/objects/90/c15abbe3461ebf5dc62e60393ef700a082f81e": "c21fb04f86db6ad4eb0202fb1d2a7382",
".git/objects/94/27301218c06680d52b266fc5dc00068c6f2100": "3c079f1d73a38f9d10108f5890e17998",
".git/objects/95/6ff4314cdb9a16f29ba6d62008415c064d7a6f": "03d4f1593b6c64ac2fe445d96d77bbc6",
".git/objects/96/9a9bcefcb3c158e6133aa81cd73ccf556fad5e": "bb7add6e59a4fb2877768a23083b2fee",
".git/objects/96/ba0c4adb570d442f2ac4ffe0155234d5566647": "a91582adf73eec57acdbe55355a2b8ed",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/7934660e5f932fed697985bff3153aa4dbd693": "a62e7a5919d24b78877c1e6dfbd188dc",
".git/objects/9a/cbe7b2603320c789d99382bee42d470dfe0bcb": "6dea1a6604a90d18fdca424bab9a884c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/7d856796123a84cb149cc7b9c7b7cd0c243e82": "e340f3e07a24ed120b72aeccf5f8e1fb",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/92d66f2b051479d3b004fc4f7e285db542342d": "0371645425654abdae9121e9832578e9",
".git/objects/9e/dd3de172a554f90c86142063034f567dec9988": "f9b92534960194c4555fd3478c046e6c",
".git/objects/a0/715b889608c573598369cb8e6d89ca97938a79": "41dbd973f19e4cfb7fc7ff904e841c04",
".git/objects/a0/9645220e86d3d514dc3777997f00a28a093c22": "021a3f6ac6cadd601428576f96af2238",
".git/objects/a3/aab4e6b6e5f7064f3e8838f56dbad7fad0c25a": "e53451aca25278409ab7c2b499014ccd",
".git/objects/a5/e9e45d69320b6243a308e02062b2ee7d71accf": "e52d33aa1f932de1a27630cbdcc0677a",
".git/objects/a7/959ecda132a229b4ef1173651dd91f278c67f0": "a87e21ae8772f7af05c98504dd80c1e0",
".git/objects/a9/63aa6ba222b54ef4ce901135a0d74c19b25252": "440a569716147e962165a8b78c4e87ab",
".git/objects/a9/a03bc44e124a8835bf50736814a96670fec1ba": "dd2dd6513633fc07c84a2caf938c80a2",
".git/objects/ac/bbeebf921d0cdf9bcdbbce5f2d99eafaea1e7c": "c50cfa1ae89e9dba9d3296d33d606eed",
".git/objects/ad/278021449bcbd584e54f2f70006bf0049babfb": "bb48da7099ca0f5168f51fc230dbfca5",
".git/objects/ae/b656a262e842779c6ecee8d77010bfc16ef909": "7dcffa5f05a3d9043caa6e8bf3ecca02",
".git/objects/ae/c4141a06447e38e843af1d44cc1532f4b8c0e8": "9b1931b4cc3998ae1b8891f571499912",
".git/objects/af/ebad08c878277cdd42a0d6592ca638fc9e14e4": "ecc04b78adff9ab5eca196d21df0f795",
".git/objects/b1/bec4d7ad066068528145951ceccf1b33fe4f31": "dfaa70a7b8d0558459ed2a517e64ef1f",
".git/objects/b2/ddeb13e16cdbacd6818174bc68f2698193adc8": "bf5ba446773b81d1ab4a9d87ff826720",
".git/objects/b2/eec4a297c5abcff90421b5e2559226feb45d6c": "9c4323bc947f4eb691af682cd1bad24d",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/bb/fccc56dfcd13da23e5901b2a55255ab23cb665": "96b894fb5ff0b6d708389fb56d7671b6",
".git/objects/bf/7a80cf3621f5d4740432e137aa4913ea7f8e1e": "6d30b660d6f4eab672bb8361cc561c1f",
".git/objects/c0/3c15418727bdc64f1d447ff6e074edf115d884": "bbc02be419ae29e62b92ecaba5533ab4",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/bc0e68e1a86974fe8fe4d34e3bdca75b3a4ac4": "5d226bc79bb833ac804247e8825127e5",
".git/objects/ce/a6212f0e11447696cb9ef575a76abe46c1b99e": "600cd7005357da4ddca708dfb54d5f1b",
".git/objects/d0/539a542ff502766a77263085698bf2c4b3f5a4": "78c55917da18b7d8a1935c947e454b07",
".git/objects/d2/e1b73eb29f48a23b6f84815c2d154ebc2609a8": "bd781903d0e8fed48be04204f259f785",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/abbbccd6bd2849d821cbf880b7698a29b8325c": "5647b76b4c3b1493fb602728afc959ff",
".git/objects/d8/5c9243aa65b39ef7b0bfada776f5458ab11211": "3109eb8fd457a6a5aa4cc3bb166029f9",
".git/objects/dd/e25f7e22bef7ca8bba56fbb1ea2ccad2d17c71": "82dd448ea1dbde9b3a9e82b175cc8bc1",
".git/objects/df/100c47b1dd2b600ff4fe56280402ce59f876b7": "5b7e1bb4a7fe3a8b8ba580eebdfa3a3b",
".git/objects/e2/d408bcba6d3f08b162af99dbaef8d590bed996": "3973d7cd060cd0c0556d49b3d893c7ab",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/2dc3963ec8fcaa8926fde40ec0f61fc02372d7": "4170e4f9d089d4e73006ce262c210a71",
".git/objects/e5/93f1222042af209ffca478f401d70f9bbd5892": "45e5db405b8dfb634e2707b3b4d8fdfd",
".git/objects/e7/96fd1e898b61d461d736f5b09ac8133be4ef7b": "dc5f546fc933d5150f5974f2d9467f5c",
".git/objects/e9/dfaf7226414c974033e14e3f0b1636b85bee14": "d56ad2434a293e86ec8e5fcdf75ece5f",
".git/objects/ea/2eeb17b4fff2a2f07023ad0b71b91366d163c9": "0ab58927a0f0e9117db685a6006c2673",
".git/objects/ea/5b246770d8e8f9cb0245a5e734506993d260c8": "15e680d400b9d3e8efff5aa6b764cf2c",
".git/objects/ec/8ee5aaa14340d9de3ba9e5920e23ab8f2aa676": "412e187289343585f61da6e7845a0cc7",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/bb5b83d3f1a71c445977639da5f15d4f76b367": "9923337b48a05f2ac502c7ad42a7a61a",
".git/objects/ef/bd67ba6a8b97c21d9a079b1505afbc95e2143c": "43417d604a318fda59f88cc9b786c4be",
".git/objects/f0/477071048381ecce26c3ffb9edbde1d7ce7fbc": "83403fa8754e280fd47f0de8760853a0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1cd40c8db106a6a1d128308212308108e113b4": "803e09f19211a82a1d05f3726c57299d",
".git/objects/f2/c6ad1f872d01d4090a3b985ed079fba4f80139": "f0575d84b2f9524cad407ed8dd390c12",
".git/objects/f3/f1bfab7d90031fea37b9aa7b6ea29414bd620f": "26eb2908766b8fcbf3868e5f6dbb71e3",
".git/objects/f5/5f5df9c22f36cb5929f544b5a9f4f01f035a35": "569703daa513acfeeac1f9899f818bcd",
".git/objects/f5/957ffefbf4ee6c2c9c2f6ff2df690c644bc34e": "1e48dde198ad9209bcfaf7ea74763ce7",
".git/objects/f5/9d586331aa45145b7aa75cf6824103963d886d": "93697664a8bf56275cce3126493caa4c",
".git/objects/f6/aca5684697b17cd6c17a6185d291ab444e0774": "623e15976473c1038d3efe6f701e954a",
".git/objects/fa/059d594506f44a8eb4782d323e972d569e7cf4": "3152932bb653271b7c5806542c4d5f4a",
".git/objects/fb/128b3c223600f8239e9cf804e6a08e55c673e3": "c930e58f59263b6095bf60711dd92226",
".git/objects/fb/2a109fcf45b50f4306aa5d46365dd45d7de08a": "ebc7d7da232aab8eecbea383cb555b19",
".git/objects/fd/ec7b7e78c3225a2568855b50d00128bb123fd7": "4de4d13f97e935cb97071838c083553b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/ed9bdc3e67cd32036cc9a8da377ba2e7741d49": "7844011add3d4ab1ac1fe36e154dfc11",
".git/refs/heads/main": "b3cb0dfd55baa4abe27516662ee11165",
".git/refs/remotes/origin/main": "b3cb0dfd55baa4abe27516662ee11165",
"assets/AssetManifest.bin": "0d0ebe4453d0b68cb1c6fe96ebd2721a",
"assets/AssetManifest.bin.json": "3100ba4a86323b68e4a00373442f279a",
"assets/AssetManifest.json": "2a9b029b122beba8ecdd6202554da4de",
"assets/assets/images/audio/SOS.mp3": "8e37c28f94e3f6634be9888b092d41a1",
"assets/assets/images/ChatArc.png": "0f933b95f18e948b16320d8d167d9979",
"assets/assets/images/Female/doc/angry.png": "699e967581ca21dafd4a6359d419b367",
"assets/assets/images/Female/doc/cry.png": "fd8ca455721a06b7c7d05d7f8eec85d0",
"assets/assets/images/Female/doc/happy.png": "4f9c94f160865dc817e15245a4d1f1e0",
"assets/assets/images/Female/doc/like.png": "d44198e460c815ad34e01f9664be3c68",
"assets/assets/images/Female/doc/love.png": "f3a32ad346f296c0c1bb5ab5483f28b8",
"assets/assets/images/Female/doc/oops.png": "3322395006cd988a81a825483e3bf955",
"assets/assets/images/Female/doc/think.png": "5f572e776eed135cdb819d10e26d41d6",
"assets/assets/images/Female/doc/welcome.png": "db3a376c7e563ec1442476e18dd83140",
"assets/assets/images/Female/hosp/happy.png": "c0f756f0b014f4d00f03a57eba5ae9e8",
"assets/assets/images/Female/hosp/think.png": "cb140fdc578f55da26db1b912dd11015",
"assets/assets/images/Female/lab/angry.png": "d5e728803029690040f9092e51af8060",
"assets/assets/images/Female/lab/cry.png": "9a32364efd66a1a1b7f0f91f16615c25",
"assets/assets/images/Female/lab/happy.png": "23478f729f2f76920e99240a56170d5a",
"assets/assets/images/Female/lab/like.png": "ad33fa0b39235028fc2d64161f39e796",
"assets/assets/images/Female/lab/ohh.png": "e4bcf3fcf1f1f8e648e9c563f6188806",
"assets/assets/images/Female/lab/think.png": "d0620f445b1dcee2c475d4411f3ae735",
"assets/assets/images/Female/lab/welcom.png": "c88627a7a51a4acaff5bf0635852b092",
"assets/assets/images/Female/nurs/clam.png": "273598830897d385f9e8538c9872c044",
"assets/assets/images/Female/nurs/cry.png": "7f47785e51f774cd65a114e3a69f7fa2",
"assets/assets/images/Female/nurs/happy.png": "73560f065d91507fe69836fa18e6cfa5",
"assets/assets/images/Female/nurs/like.png": "26a12643eab3f9980c6aef5375dde83b",
"assets/assets/images/Female/nurs/love.png": "f2298b8cf7d6c407a79b0902dddf90a2",
"assets/assets/images/Female/nurs/oops.png": "249e79960046647349df01eec7cf7cfb",
"assets/assets/images/Female/nurs/think.png": "5a9a4111000dc593bc70c60b57e831b6",
"assets/assets/images/Female/nurs/welcome.png": "5969f51233296262d99d2af78d8ecd2b",
"assets/assets/images/Female/pat/angry.png": "8564fd3466a311214e2bc1a62f173e2c",
"assets/assets/images/Female/pat/cry.png": "50f5c1feeda27c3e174e3f3e623f7134",
"assets/assets/images/Female/pat/happy.png": "81e627158cabdb8cdd1c919f73fa7605",
"assets/assets/images/Female/pat/like.png": "f3b6cc164fe4663d3cd93f921b5d8d43",
"assets/assets/images/Female/pat/love.png": "73b2cc95aaf4b0dfb54ea96685b3e9a8",
"assets/assets/images/Female/pat/think.png": "0a15b3a7364f9300cbfb8349774392cf",
"assets/assets/images/Female/pharm/404%2520ohh.png": "f23c1b3a9c057d6f1f59ad6ab2cf77bf",
"assets/assets/images/Female/pharm/clame.png": "76f38024362f9013835323b213dac482",
"assets/assets/images/Female/pharm/cry.png": "3179dc19ad56bf65a17f39299c601fc4",
"assets/assets/images/Female/pharm/happy.png": "44cd7a18f4bb341b4e2cb2bbb7967978",
"assets/assets/images/Female/pharm/love.png": "81b054fb744b3041a1ae654209aaa25d",
"assets/assets/images/Female/pharm/sad.png": "bbe1d71a24bbf9a9b3758cbe0e56d88c",
"assets/assets/images/Female/pharm/smile.png": "a3e6d858f44aa84368373adf2c1f4686",
"assets/assets/images/Female/pharm/think.png": "c6317f4f78278db4046e6c77c917e758",
"assets/assets/images/google_logo.png": "55a16466273b22f06a016e9975d92e7f",
"assets/assets/images/Icon.png": "d2ef10fa8c6bc54740eae07d1f3f1688",
"assets/assets/images/intro.gif": "f0911b7e946b5213f3342e8344c81d2b",
"assets/assets/images/introweb.gif": "213130e7b1eb76d1f89a6185a0470a44",
"assets/assets/images/logo.png": "d996f0719089ac5448ae43baeb32c3ae",
"assets/assets/images/logo1.png": "fa1b04ebb16adfe53fcd51f7003c3294",
"assets/assets/images/Male/doc/angry.png": "b1b87bc4c69cbd8cc47c545fbd2f1cfe",
"assets/assets/images/Male/doc/cry.png": "40309f58afa4cf448e13433daf7c5ec9",
"assets/assets/images/Male/doc/good.png": "9a03f3d52a295f1c4a0a91959edab80b",
"assets/assets/images/Male/doc/happy.png": "2142f52e7a0f899fe7bf495a9913cced",
"assets/assets/images/Male/doc/love.png": "d467af62670e7d9cf291b615fbdb3808",
"assets/assets/images/Male/doc/ohh.png": "9044bb1f163f2b9f33c856eb371d454b",
"assets/assets/images/Male/doc/smile.png": "2142f52e7a0f899fe7bf495a9913cced",
"assets/assets/images/Male/doc/think.png": "df1b642bba8b18d616b5e046bafb3a95",
"assets/assets/images/Male/doc/welcome.png": "def76914739a829ecc287ef4b2fbf7fe",
"assets/assets/images/Male/hosp/happy.png": "2e14202445c446b06d34e9c83f174464",
"assets/assets/images/Male/hosp/think.png": "2e14202445c446b06d34e9c83f174464",
"assets/assets/images/Male/lab/angry.png": "36764631a9d1231a2cef7d4700094bb7",
"assets/assets/images/Male/lab/clam.png": "f6f22fdd94daa58c58861710c6b12c07",
"assets/assets/images/Male/lab/cry.png": "6bdea88187961ca1bd44c662d99fc364",
"assets/assets/images/Male/lab/love.png": "a7bd8f01087072af2af49b6149cd8b31",
"assets/assets/images/Male/lab/think.png": "0d788da4e351b4a5ebe3787421d3b5e2",
"assets/assets/images/Male/lab/welcome.png": "527c6674ae7c77b3d257023befc66b4e",
"assets/assets/images/Male/nurs/angry.png": "cb16ca9ee1e0ac3d473e45455d199e65",
"assets/assets/images/Male/nurs/clam.png": "7f86e37fcdb4979fa48455fdf8d07d1b",
"assets/assets/images/Male/nurs/cry.png": "9142841d35cd1d8f4dce50cb6b9d80ec",
"assets/assets/images/Male/nurs/love.png": "f8ad9f86b17378448b85236e1063340c",
"assets/assets/images/Male/nurs/ohh.png": "115d015f67c7952398df112b5f44865b",
"assets/assets/images/Male/nurs/smile.png": "377011cdceaeb1f61dd955b8793bfee5",
"assets/assets/images/Male/nurs/think.png": "995c69d702b09d7b752ea993472b64d1",
"assets/assets/images/Male/nurs/welcom.png": "ee5403cae0e3234a89f12df344d7d1e3",
"assets/assets/images/Male/pat/angry.png": "b2751521ad3bc1a66a26489199045dae",
"assets/assets/images/Male/pat/happy.png": "3e4429b5e9454646236ac04bae424de5",
"assets/assets/images/Male/pat/like.png": "3e4429b5e9454646236ac04bae424de5",
"assets/assets/images/Male/pat/love.png": "1e1f315514059adebe145cc1ab454be2",
"assets/assets/images/Male/pat/peace.png": "25345913a801931d5673cf735d3134ee",
"assets/assets/images/Male/pat/sad.png": "3b87b60302acfd21707cdbc21c8fcd68",
"assets/assets/images/Male/pat/think.png": "df1b642bba8b18d616b5e046bafb3a95",
"assets/assets/images/Male/pharm/happy.png": "a1975e2b229ac113166cdc388d45fbc5",
"assets/assets/images/Male/pharm/think.png": "cb1b409a8698316f6092137fca1296d6",
"assets/assets/images/notify%2520icon.jpg": "1f4a123078eac66130fbe308596c700a",
"assets/FontManifest.json": "7475626943e8f47e1f4927b2a14cf8c8",
"assets/fonts/MaterialIcons-Regular.otf": "057c7251e6f6d65f2e241ab7144f15d4",
"assets/NOTICES": "f98726a20f93be251a556d64e1f090aa",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "c650b8af21e7e7c5cce27618cd12c849",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5de0060b0e44c22743e34b3ffe6443de",
"icons/Icon-192.png": "4becb8814843e3d4b3edc5ae7df7a6a5",
"icons/Icon-512.png": "97dbf594454967db8894c8a941ae298a",
"icons/Icon-maskable-192.png": "4becb8814843e3d4b3edc5ae7df7a6a5",
"icons/Icon-maskable-512.png": "97dbf594454967db8894c8a941ae298a",
"index.html": "5a3f12a69a43dc252000861c262d4e19",
"/": "5a3f12a69a43dc252000861c262d4e19",
"main.dart.js": "7cb24e0c05340e9cebc59a60e5e416d5",
"manifest.json": "d451dea379b0306395bd9ffbffbeea29",
"version.json": "664b6b5c65f941161daa90d20c8c03e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
