<template>
<div class="container">
<div class="row flex-lg-nowrap">
  <div class="col">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
        <h1 align="center">Entri Data Peminjaman Berkas</h1>
            <form method="POST">
              <div class="mb-3">
              <label for="l tanggal_pinjam" class="form-label">Tanggal Pinjam</label>
                    <input type="datetime-local" name="tp" class="form-control" id="l tanggal_pinjam" aria-describedby="emailHelp" required>
                </div>
                <div class="mb-3">
                <label for="l tanggal_kembali" class="form-label">Tanggal Kembali</label>
                    <input type="datetime-local" name="tk" class="form-control" id="l tanggal_kembali" required>
                </div>
                <div class="mb-3">
                    <label for="l indeks" class="form-label">Indeks</label>
                    <input type="text" name="ind" class="form-control" id="l indeks" required>
                </div>
                <div class="mb-3">
                    <label for="l nama_peminjam" class="form-label">Nama Peminjam</label>
                    <input type="text" name="nam" class="form-control" id="l nama_peminjam" required>
                <div class="mb-3">
                    <label for="l bidang" class="form-label">Bidang</label>
                    <input type="text" name="bid" class="form-control" id="l bidang" required>
                </div>
                <div class="mb-3">
                <label for="l keterangan" class="form-label">Keterangan</label>
                    <input type="text" name="ket" class="form-control" id="l keterangan" required>
                </div>
                </div>
                <div class="row">
                <div class="col d-flex justify-content-end">
                <button type="submit" name="submit" class="btn btn-primary mb-3">TAMBAH</button>
                </div>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
</template>