const fs = require('fs')

// fs.writeFileSync('catatan.txt', 'Nama Saya Reno ')
// fs.appendFileSync('catatan.txt', 'Saya tinggal di Padang')

// const catatan= require('./catatan.js')
// const pesan = catatan()
// console.log(pesan)

// const validator = require('validator')
// const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://proska.com'))

const chalk = require('chalk');

console.log(chalk.blue('print warna biru sukses'));

const command = process.argv[2]
console.log(process.argv)

if (command === 'tambah') {
 console.log('Tambah Catatan')
} else if (command === 'tambah') {
    console.log('Hapus Catatan')
}

const yargs = require('yargs') 
const catatan = require('./catatan.js') 
// Kustomisasi versi yargs 
yargs.version('10.1.0') 
 
// Membuat perintah (command) 'tambah' 
yargs.command({ 
     
    command: 'tambah', 
    describe: 'tambah sebuah catatan baru', 
    builder: { 
        judul: { 
            describe: 'Judul catatan', 
            demandOption: true, 
            type: 'string' 
        }, 
        isi: { 
            describe: 'Isi catatan', 
            demandOption: true, 
            type: 'string' 
        } 
    }, 
    handler: function (argv) { 
        console.log('Judul: ' + argv.judul) 
        console.log('Isi: ' + argv.isi) 
    } 
}) 
 
// Perintah hapus 
yargs.command({ 
    command: 'hapus', 
    describe: 'hapus catatan', 
    handler: function () { 
        console.log('Catatan berhasil dihapus') 
    } 
}) 

yargs.parse()