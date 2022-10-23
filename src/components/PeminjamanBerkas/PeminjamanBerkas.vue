<template>
   <div class="container">
        <h1 align="center">Peminjaman Berkas</h1>
        <router-link to="/entridatapeminjaman" class="btn btn-primary mb-2" role="button"><i class="bi bi-file-earmark-plus"></i>  Entri Data</router-link>
      <form class="d-flex" method="post">
        <input class="form-control-search mb-2" type="text" name="keyword" placeholder="Cari kata kunci.." aria-label="Search">
        <button class="btn btn-outline-primary mb-2" type="submit" name="cari"><i class="bi bi-search"></i></button>
      </form>
      <table class="table table-light ">
        <thead>
       <tr class="table-secondary">
      <th scope="col">ID</th>
      <th scope="col">Tanggal Pinjam</th>
      <th scope="col">Tanggal Kembali</th>
      <th scope="col">Indeks</th>
      <th scope="col">Nama Peminjam</th>
      <th scope="col">Bidang</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Aksi</th>
          </tr>
        </thead>
        </table>
        </div>
</template>