const allAssets = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,jfif,svg,PNG,JPG,JPEG,WEBP,JFIF,SVG}', { eager: true });

/**
 * Returns the URL of an asset by its key/filename.
 * @param {string} name - The key or relative filename (e.g. 'tk1', 'ttk1.jpeg')
 */
export function getAssetUrl(name) {
  // 1. Try exact match in the mapping
  const mapping = {
    'tk1': 'ttk1.jpeg', 'tk2': 'ttk2.webp', 'tk3': 'ttk3.webp', 'tk4': 'ttk4.png', 'tk5': 'ttk5.webp',
    'tk6': 'ttk6.webp', 'tk7': 'ttk7.webp', 'tk8': 'ttk8.jpg', 'tk9': 'ttk9.png', 'tk10': 'ttk10.jpeg',
    'tk11': 'ttk11.jpeg', 'tk12': 'ttk12.jpg', 'tk13': 'ttk13.jpg',
    'ap1': 'apoceus1.jpg', 'ap2': 'apoceus2.jpg', 'ap3': 'apoceus3.jpg', 'ap4': 'apoceus4.webp',
    'ap5': 'apoceus5.png', 'ap6': 'apoceus6.jfif', 'ap7': 'apoceus7.jfif', 'ap8': 'apoceus8.webp',
    'ap9': 'apoceus9.jpg', 'ap10': 'apoceus10.jpg', 'ap11': 'apoceus11.jpg', 'ap12': 'apoceus12.jpg',
    'zs1': 'zombie1.jpg', 'zs2': 'zombie2.jpg', 'zs3': 'zombie3.jpg', 'zs4': 'zombie4.jpg',
    'zs5': 'zombie5.png', 'zs6': 'zombie6.jpg', 'zs7': 'zombie7.jpg', 'zs8': 'zombie8.jpg',
    'zs9': 'zombie9.jpg', 'zs10': 'zombie10.jpg',
    'sn1': 'survival1.jpg', 'sn2': 'Survival2.jpg', 'sn3': 'Survival3.jpg', 'sn4': 'Survival4.jpg',
    'sn5': 'Survival5.jpg', 'sn6': 'Survival6.jpg', 'sn7': 'Survival7.jpg', 'sn8': 'Survival8.jpg',
    'sn9': 'Survival9.jpg',
    'dw1': 'doozy1.jfif', 'dw2': 'Doozy2.jpg', 'dw3': 'Doozy3.jpg', 'dw4': 'Doozy4.jpg',
    'dw5': 'Doozy5.jpg', 'dw6': 'Doozy6.jpg', 'dw7': 'Doozy7.jpg', 'dw8': 'Doozy1.jpg',
    'rzc1': 'RiftZone2.jpg',
    'gb1': 'Getback1.png', 'gb2': 'Getback2.png', 'gb3': 'Getback3.png', 'gb4': 'Getback4.png',
    'gb5': 'Getback5.png', 'gb6': 'Getback6.png', 'gb7': 'Getback7.png', 'gb8': 'Getback8.png',
    'gb9': 'Getback9.png', 'gb10': 'Getback10.png', 'gb11': 'Getback11.png', 'gb12': 'Getback12.png',
    'gb13': 'Getback13.png', 'gb14': 'Getback14.png', 'gb15': 'Getback15.png', 'gb16': 'Getback16.png',
    'gb17': 'Getback17.png', 'gb18': 'Getback18.png', 'gb19': 'Getback19.png', 'gb20': 'Getback20.png',
    'gb21': 'Getback21.png', 'gb22': 'Getback22.png', 'gb23': 'Getback23.png', 'gb24': 'Getback24.png',
    'gb25': 'Getback25.png', 'gb26': 'Getback26.png', 'gb27': 'Getback27.png', 'gb28': 'Getback28.png',
    'gb29': 'Getback29.png', 'gb30': 'Getback30.png', 'gb31': 'Getback31.png', 'gb32': 'Getback32.png',
    'gb33': 'Getback33.png', 'gb34': 'Getback34.png', 'gb35': 'Getback35.png', 'gb36': 'Getback36.png',
    'gb37': 'Getback37.png', 'gb38': 'Getback38.png', 'gb39': 'Getback39.png', 'gb40': 'Getback40.png',
    'fap1': 'farmacia1.jpg', 'fap2': 'farmacia2.jpeg', 'fap3': 'farmacia3.jpeg', 'fap4': 'farmacia4.jpg',
    'ks1': 'KustomsSports1.jpg', 'ks2': 'KustomsSports2.jpg', 'ks3': 'KustomsSports3.jpg',
    'ks4': 'KustomsSports4.jpg', 'ks5': 'KustomsSports5.jpg', 'ks6': 'KustomsSports6.jpg',
    'ks7': 'KustomsSports7.jpg', 'ks8': 'KustomsSports8.jpg', 'ks9': 'KustomsSports9.jpg',
    'ks10': 'KustomsSports.jpg',
    'hb1': 'hb1.jpg', 'hb2': 'hb2.jpg', 'hb3': 'hb3.jpg', 'hb4': 'hb4.jpg',
    'tw1': 'travel.jpg', 'tw2': 'travel2.jpg',
    'ts1': 'TSStopWatch.jpg',
    'uj1': 'UJ1.jpg', 'uj2': 'UJ2.png', 'uj3': 'UJ3.jpg', 'uj4': 'UJ4.png', 'uj5': 'UJ5.png',
    'uj6': 'UJ6.png', 'uj7': 'UJ7.png', 'uj8': 'UJ8.png', 'uj9': 'UJ9.png', 'uj10': 'UJ10.jpg',
    'uj11': 'UJ11.jpg', 'uj12': 'UJ12.jpg', 'uj13': 'UJ13.jpg', 'uj14': 'UJ14.png', 'uj15': 'UJ15.jpg',
    'uj16': 'UJ16.jpg', 'uj17': 'UJ17.jpg', 'uj18': 'UJ18.jpg', 'uj19': 'UJ19.png', 'uj20': 'UJ20.png',
    'uj21': 'UJ21.png', 'uj22': 'UJ22.png', 'uj23': 'UJ23.png', 'uj24': 'UJ24.jpg', 'uj25': 'UJ25.jpg',
    'ml1': 'microlab.jpg', 'ml3': 'microlab3.jpg', 'ml4': 'microlab4.jpg', 'ml5': 'microlab5.jpg',
    'ml6': 'microlab6.jpg', 'ml7': 'microlab7.jpg', 'ml8': 'microlab8.jpg',
  };

  const fileName = mapping[name] || name;
  const path = `../assets/${fileName}`;

  return allAssets[path]?.default || null;
}
