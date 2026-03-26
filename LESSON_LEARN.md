# Lesson Learn: Himakom Pokedex (Teknocamp Week 2)

### 1. Arsitektur Data dan State Management
Pelajaran utama dari proyek ini adalah bagaimana mengelola data yang sangat besar secara efisien menggunakan **Pinia Store**. Alih-alih melakukan penarikan data (fetching) yang berat di setiap halaman, aplikasi menggunakan sistem **Global Search Logic** dengan mengunduh daftar nama Pokémon terlebih dahulu untuk pencarian instan. Selain itu, pemisahan antara data ringan (daftar nama) dan data berat (detail gambar/statistik) melalui proses **Data Enrichment** (Gerbang Kedua) membuktikan bahwa performa aplikasi dapat tetap kencang meskipun harus mengonsumsi ribuan data dari API eksternal.

### 2. Efisiensi Navigasi melalui Pagination
Implementasi **Pagination** menggunakan konsep **Offset** dan **Limit** mengajarkan pentingnya "pemuatan data bertahap" dalam pengembangan web modern. Dengan menghitung lompatan data secara matematis, aplikasi hanya memproses informasi yang benar-benar dibutuhkan oleh pengguna pada saat itu saja. Hal ini tidak hanya menghemat kuota internet dan beban server (PokeAPI), tetapi juga mencegah terjadinya penumpukan data yang berlebihan di memori browser pengguna.

### 3. Manipulasi Data Lokal (Local CRUD)
Proyek ini mendemonstrasikan bagaimana sebuah aplikasi dapat memberikan pengalaman pengguna yang interaktif melalui operasi **CRUD (Create, Read, Update, Delete) secara lokal**. Dengan memanipulasi *state* di dalam memori (menggunakan fungsi `unshift` untuk menambah atau `filter` untuk menghapus), aplikasi memberikan respon yang sangat cepat terhadap setiap aksi pengguna tanpa harus selalu bergantung pada respon dari database atau server eksternal untuk setiap perubahan kecil.

### 4. Kesimpulan
Secara keseluruhan, pengerjaan penugasan **Teknocamp Week 2** ini memberikan pemahaman mendalam mengenai siklus hidup pengembangan aplikasi frontend yang modern dan terstruktur. Melalui integrasi **Nuxt 4, Tailwind CSS, dan Pinia**, saya belajar bahwa membangun aplikasi bukan hanya tentang membuat tampilan yang estetik secara visual, tetapi juga tentang bagaimana merancang logika data yang aman (Error Handling), responsif (Async/Await), dan efisien (Pagination). Kesimpulannya, kemampuan untuk memecah kode menjadi komponen-komponen kecil serta mengelola alur data secara terpusat di dalam Store adalah kunci utama dalam menciptakan aplikasi yang mudah dipelihara (maintainable) dan siap untuk dikembangkan ke skala yang lebih besar.

---
*Dibuat untuk memenuhi tugas Teknocamp Unit Teknologi HIMAKOM 2026.*
