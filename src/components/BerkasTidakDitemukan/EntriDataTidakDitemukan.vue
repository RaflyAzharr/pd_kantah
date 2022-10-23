<template>
<div class="container">
<div class="row flex-lg-nowrap">
  <div class="col">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
        <h1 align="center">Entri Data Berkas Tidak Ditemukan</h1>
            <form method="POST">
              <div class="mb-3">
              <label for="l jenis_berkas" class="form-label">Jenis Berkas</label>
                    <input type="text" name="tp" class="form-control" id="l jenis_berkas" aria-describedby="emailHelp" required>
                </div>
                <div class="mb-3">
                <label for="l indeks" class="form-label">Indeks</label>
                    <input type="text" name="ind" class="form-control" id="l indeks" required>
                </div>
                <div class="mb-3">
                    <label for="l tanggal_pinjam" class="form-label">Tanggal Pinjam</label>
                    <input type="datetime-local" name="tp" class="form-control" id="l tanggal_pinjam" required>
                </div>
                <div class="mb-3">
                    <label for="l tanggal_sekarang" class="form-label">Tanggal Sekarang</label>
                    <input type="datetime-local" name="ts" class="form-control" id="l tanggal_sekarang" required>
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