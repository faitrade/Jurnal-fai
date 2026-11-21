FAITRADE V2 — Trading Journal & SOP
===================================

ISI PAKET
- index.html     Aplikasi utama (dashboard, jurnal, kalkulasi risk/reward, SOP, grafik, riwayat, backup/import-export)
- manifest.json  Metadata PWA
- sw.js          Service worker/cache PWA
- Code.gs        Google Apps Script backup Drive (tetap kompatibel dengan versi lama)

FITUR V2
1. Dashboard dibuat minimal: Balance dan P&L Today.
2. Add Trade: input lot, Entry, SL, TP. Risk nominal, Risk % dari balance saat ini, potential reward, dan RR dihitung otomatis.
3. P/L aktual boleh dikosongkan saat trade belum ditutup. Isi P/L saat edit trade setelah posisi selesai.
4. Fitur versi lama tetap dibawa: riwayat trade, deposit/withdraw, SOP Trading Rules, SOP Entry, status sesi, balance curve, distribusi win/loss, filter, edit/hapus, JSON/CSV/Excel export, import, dan Google Drive push/pull.

CARA UPDATE GITHUB PAGES
1. Ekstrak ZIP ini.
2. Buka repository GitHub yang sama dengan website FAITRADE lama.
3. Upload isi folder hasil ekstrak (bukan file ZIP-nya).
4. Replace file dengan nama sama: index.html, manifest.json, sw.js, dan Code.gs.
5. Commit langsung ke main branch. Jangan hapus repository.
6. Tunggu GitHub Pages selesai deploy, lalu buka website dan refresh. Jika masih tampilan lama, tutup tab/PWA lalu buka lagi; cache service worker sudah diberi versi baru.

DATA LAMA
- Aplikasi menggunakan localStorage key yang sama dengan versi awal (journal_sop_v1), sehingga data lama pada browser dan alamat website/origin yang sama akan tetap terbaca.
- Sebelum update, sebaiknya Export JSON dari aplikasi lama sebagai backup.
- Jika website dipindah ke alamat/domain/repository Pages yang berbeda, browser menganggapnya origin berbeda. Import backup JSON ke versi baru agar trade, saldo, cashflow, dan SOP berpindah.

PENTING — AKURASI RISK/REWARD
- Formula: Risk = |Entry - SL| × Lot × Nilai Kontrak; Reward = |TP - Entry| × Lot × Nilai Kontrak.
- Nilai Kontrak adalah nilai uang akun untuk pergerakan harga 1.00 pada 1 lot. Nilainya berbeda menurut simbol, broker, jenis akun, dan mata uang akun. Atur di tombol Saldo dan cek contract size/tick value di spesifikasi simbol broker.
- Contoh ilustrasi XAUUSD standard USD bisa sekitar 100 USD per gerakan harga 1.00 per 1 lot, tetapi jangan anggap angka ini pasti.
- Untuk akun USC/cent, masukkan nilai dalam USC/cent, bukan USD. Jangan memakai angka 100 USD sebagai 100 USC. Cek spesifikasi broker terlebih dahulu.
- Kalkulasi ini estimasi dan belum memasukkan spread, komisi, swap, slippage, atau perbedaan harga eksekusi.
- P&L Today dihitung dari hasil P/L yang direalisasikan (diisi) hari ini. Saat P/L aktual diisi pada form/edit trade, aplikasi mencatat tanggal realisasi hari ini.

PENYIMPANAN & PRIVASI
- Data utama disimpan di browser perangkat yang digunakan. Export JSON secara berkala.
- Google Drive sync bersifat opsional dan memerlukan URL Web App Google Apps Script milik pengguna.
