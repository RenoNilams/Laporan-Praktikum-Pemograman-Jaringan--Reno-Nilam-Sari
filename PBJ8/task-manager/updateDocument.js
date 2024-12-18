const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
  try {
    await client.connect();
    console.log('Berhasil terhubung ke MongoDB database server');

    const db = client.db(namaDatabase);

    // Memperbaharui Data dengan perintah updateMany
    db.collection('tugas').updateMany(
      { StatusPenyelesaian: false },
      { $set: { StatusPenyelesaian: true } }
    ).then((result) => {
      console.log('Jumlah dokumen yang diperbarui:', result.modifiedCount);
    }).catch((error) => {
      console.error('Terjadi kesalahan saat memperbarui data:', error);
    }).finally(() => {
      client.close();
      console.log('Koneksi ke database telah ditutup');
    });

    // Memperbaharui Data dengan perintah updateOne
    // const updateOnePromise = db.collection('pengguna').updateOne(
    //   { _id: new ObjectId('67624d5b894390b3e7260141') },
    // //   { $set: { nama: 'Renoo' } }
    //   { $inc: { usia: 1 } }
    // );

    // updateOnePromise.then((result) => {
    //   console.log('Hasil updateOne:', result);
    // }).catch((error) => {
    //   console.error('Terjadi kesalahan saat memperbarui data:', error);
    // }).finally(() => {
    //   client.close();
    //   console.log('Koneksi ke database telah ditutup');
    // });

  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

main().catch(console.error);
