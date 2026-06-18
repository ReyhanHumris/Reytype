// Indonesian common words for typing practice
const indonesianWords = [
  'yang', 'dan', 'ini', 'itu', 'dengan', 'untuk', 'pada', 'adalah', 'dari',
  'dalam', 'tidak', 'akan', 'juga', 'sudah', 'saya', 'kami', 'kita', 'mereka',
  'ada', 'bisa', 'harus', 'oleh', 'sebagai', 'setelah', 'karena', 'seperti',
  'ketika', 'masih', 'hanya', 'telah', 'belum', 'sangat', 'lebih', 'antara',
  'tahun', 'orang', 'banyak', 'hari', 'waktu', 'dapat', 'semua', 'baru',
  'kata', 'menjadi', 'rumah', 'dunia', 'hidup', 'kerja', 'nama', 'besar',
  'kecil', 'perlu', 'baik', 'lain', 'punya', 'sama', 'setiap', 'tentang',
  'membuat', 'sedang', 'hingga', 'melalui', 'sebuah', 'bagian', 'program',
  'kepada', 'tetapi', 'bahwa', 'secara', 'namun', 'selalu', 'paling', 'sering',
  'mulai', 'sejak', 'tanpa', 'kemudian', 'menurut', 'mungkin', 'sendiri',
  'berapa', 'begitu', 'beberapa', 'saat', 'terhadap', 'meskipun', 'hampir',
  'jawab', 'tentu', 'selama', 'sambil', 'kembali', 'negara', 'pemerintah',
  'teman', 'anak', 'sekolah', 'belajar', 'menulis', 'membaca', 'berbicara',
  'bermain', 'makan', 'minum', 'tidur', 'bangun', 'jalan', 'pintu', 'buku',
  'meja', 'kursi', 'lantai', 'dinding', 'atap', 'pohon', 'bunga', 'langit',
  'matahari', 'bulan', 'bintang', 'hujan', 'angin', 'sungai', 'gunung',
  'pantai', 'laut', 'tanah', 'udara', 'cahaya', 'suara', 'warna', 'putih',
  'hitam', 'merah', 'biru', 'hijau', 'kuning', 'pagi', 'siang', 'sore',
  'malam', 'minggu', 'bulan', 'senin', 'selasa', 'rabu', 'kamis', 'jumat',
  'sabtu', 'cepat', 'lambat', 'tinggi', 'rendah', 'panjang', 'pendek',
  'lebar', 'sempit', 'tebal', 'tipis', 'keras', 'lembut', 'dingin', 'panas',
  'basah', 'kering', 'gelap', 'terang', 'benar', 'salah', 'mudah', 'sulit',
  'senang', 'sedih', 'marah', 'takut', 'berani', 'kuat', 'lemah', 'indah',
  'cantik', 'tampan', 'pintar', 'rajin', 'malas', 'sabar', 'ramah', 'jujur',
  'masalah', 'jawaban', 'pertanyaan', 'cerita', 'pesan', 'harapan', 'mimpi',
  'tujuan', 'rencana', 'pikiran', 'perasaan', 'kenangan', 'pengalaman',
  'kesempatan', 'perubahan', 'kemajuan', 'keberhasilan', 'kebahagiaan',
  'persahabatan', 'keluarga', 'masyarakat', 'lingkungan', 'teknologi',
  'komputer', 'internet', 'aplikasi', 'sistem', 'informasi', 'komunikasi',
  'pendidikan', 'kesehatan', 'ekonomi', 'budaya', 'seni', 'musik', 'film',
  'makanan', 'minuman', 'pakaian', 'sepatu', 'kendaraan', 'perjalanan',
  'tempat', 'kota', 'desa', 'provinsi', 'indonesia', 'jakarta', 'bandung',
  'surabaya', 'medan', 'semarang', 'yogyakarta', 'bali', 'lombok', 'flores',
  'manado', 'makassar', 'jayapura', 'kalimantan', 'sulawesi', 'sumatera',
  'papua', 'nusa', 'ende', 'manggarai', 'kupang'
];

// English common words for typing practice
const englishWords = [
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it',
  'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this',
  'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or',
  'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
  'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
  'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know',
  'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could',
  'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come',
  'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how',
  'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because',
  'any', 'these', 'give', 'day', 'most', 'find', 'here', 'thing', 'many',
  'still', 'long', 'great', 'another', 'right', 'place', 'every', 'before',
  'should', 'need', 'high', 'life', 'each', 'world', 'next', 'hand',
  'state', 'keep', 'never', 'last', 'let', 'begin', 'seem', 'help',
  'show', 'part', 'against', 'between', 'turn', 'same', 'ask', 'move',
  'try', 'point', 'city', 'home', 'small', 'found', 'study', 'real',
  'leave', 'school', 'night', 'number', 'write', 'open', 'group', 'room',
  'side', 'water', 'young', 'early', 'head', 'story', 'change', 'play',
  'children', 'might', 'while', 'close', 'stand', 'light', 'thought',
  'follow', 'mother', 'father', 'family', 'country', 'house', 'book',
  'table', 'music', 'power', 'money', 'learn', 'food', 'build', 'level',
  'plan', 'run', 'best', 'door', 'face', 'name', 'game', 'hold', 'line',
  'fire', 'hard', 'start', 'kind', 'read', 'land', 'voice', 'speed',
  'together', 'problem', 'friend', 'became', 'morning', 'nothing',
  'important', 'already', 'answer', 'body', 'system', 'question',
  'during', 'student', 'understand', 'computer', 'market', 'class',
  'program', 'language', 'report', 'through', 'service', 'company',
  'practice', 'develop', 'process', 'result', 'create', 'design',
  'simple', 'reason', 'future', 'modern', 'record', 'common', 'strong',
  'possible', 'public', 'produce', 'value', 'history', 'nature',
  'feeling', 'picture', 'special', 'project', 'quality', 'believe',
  'human', 'method', 'minute', 'second', 'window', 'travel', 'machine',
  'across', 'above', 'below', 'inside', 'outside', 'around', 'paper',
  'color', 'ocean', 'river', 'island', 'mountain', 'forest', 'garden',
  'weather', 'summer', 'winter', 'spring', 'autumn', 'flower', 'animal',
  'beautiful', 'keyboard', 'typing', 'challenge', 'success', 'digital',
  'screen', 'technology', 'software', 'website', 'application', 'browser'
];

/**
 * Generate a random array of words for the typing test
 * @param {string} language - 'id' for Indonesian, 'en' for English
 * @param {number} count - Number of words to generate
 * @returns {string[]} Array of random words
 */
export function generateWords(language = 'en', count = 200) {
  const wordList = language === 'id' ? indonesianWords : englishWords;
  const words = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    words.push(wordList[randomIndex]);
  }
  return words;
}

export { indonesianWords, englishWords };
