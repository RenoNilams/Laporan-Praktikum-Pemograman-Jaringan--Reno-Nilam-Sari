// Mengimport modul MongoClient dan ObjectId dari 'mongodb'.
const { MongoClient, ObjectId } = require('mongodb');

// Mendefinisikan URL MongoDB server yang akan digunakan untuk koneksi.
const url = 'mongodb://127.0.0.1:27017';

// Membuat instance ongoClient dengan URL koneksi yang telah terdefinisikan sebelumnya.
const client = new MongoClient(url);

// Mendefinisikan nama database yang akan digunakan.
const namaDatabase = 'task-manager';

// Membuat instace ObjectId baru. ObjectId digunakan untuk menghasilkan unik identifier untuk dokumen MongoDB.
const id = new ObjectId();

// Mencetak ObjectId yang baru dibuat ke konsol.
console.log(id);

// Mencetak respresentasi hexadecimal dari ObjectId ke konsol.
console.log(id.id);

// Mencetak panjang (jumlah karakter) dari representasi hexadecimal ObjectId ke konsol.
console.log(id.id.length);

// Mencetak timestamp yang terkait dengan ObjectId ke konsol. Kode ini akan memberikan data waktu kapan ObjectId tersebut dibuat.
console.log(id.getTimestamp());

// Mencetak panjang dari representasi ObjectId dalam bentuk string heksadesimal.
console.log(id.toHexString().length);

// BAGIAN INI ADALAH FUNGSI UTAMA YANG BERJALAN SECARA ASYNCHRONOUS
// Mendefinisikan fungsi async 'main' untuk melakukan operasi-operasi terkait MongoDB.
async function main() {
    try {
        // BAGIAN INI TERKAIT KONEKSI KE DATABASE DAN MEMASUKAN DATA
        // Menggunakan 'await' untuk menghubungkan ke server MongoDB.
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');

        // Memilih database dengan nama 'task-manager' yang telah didefinisikan sebelumnya.
        const db = client.db(namaDatabase);

        // Memilih koleksi 'pengguna' di dalam database.
        const clPengguna = db.collection('pengguna');

        // Memilih koleksi 'tugas' di dalam database.
        const clTugas = db.collection('tugas');

        // MEMASUKAN SATU DATA (DOKUMEN)
        // Memasukkan dokumen ke dalam koleksi 'pengguna'.
        const insertPengguna = await clPengguna.insertOne({
            _id: id,
            nama: 'Randi',
            usia: 25
        });
        console.log('Memasukkan data Pengguna ke koleksi =>', insertPengguna);

        // MEMASUKAN BANYAK DATA (DOKUMEN)
        // Memasukkan beberapa dokumen ke dalam koleksi 'tugas'.
        const insertTugas = await clTugas.insertMany([
            {
                Deskripsi: 'Membersihkan rumah',
                StatusPenyelesaian: true
            },
            {
                Deskripsi: 'Mengerjakan tugas kuliah',
                StatusPenyelesaian: false
            },
            {
                Deskripsi: 'Memberikan bimbingan',
                StatusPenyelesaian: false
            }
        ]);
        console.log('Memasukkan data Tugas ke koleksi =>', insertTugas);

        // Mengembalikan pesan sukses setelah operasi selesai.
        return 'Data selesai dimasukkan.';
    } catch (err) {
        // BAGIAN INI MENANGANI ERROR
        // Menangani kesalahan dengan mencetak pesan kesalahan ke konsol.
        console.error('Terjadi kesalahan:', err);
    } finally {
        // Selalu menutup koneksi ke server MongoDB setelah operasi selesai, baik sukses maupun gagal.
        await client.close();
    }
}

// Memanggil fungsi 'main' dan menangani hasilnya menggunakan 'then' dan 'catch' untuk mencetak hasil atau pesan kesalahan ke konsol.
main().then(console.log).catch(console.error);