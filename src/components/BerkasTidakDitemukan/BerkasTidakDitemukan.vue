 <template>
        <div class="container">
        <h1 align="center">Berkas Tidak Ditemukan</h1>
    <router-link to="/entridatatidakditemukan" class="btn btn-primary mb-2" role="button"><i class="bi bi-file-earmark-plus"></i>  Entri Data</router-link>
      <form class="d-flex" method="post">
        <input class="form-control-search mb-2" type="text" name="keyword" placeholder="Cari kata kunci.." aria-label="Search">
        <button class="btn btn-outline-primary mb-2" type="submit" name="cari"><i class="bi bi-search"></i></button>
      </form>
      <table class="table table-light ">
        <thead>
       <tr class="table-secondary">
      <th scope="col">ID</th>
      <th scope="col">Jenis Berkas</th>
      <th scope="col">Indeks</th>
      <th scope="col">Tanggal Pinjam</th>
      <th scope="col">Tanggal Sekarang</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Aksi</th>
          </tr>
        </thead>
        </table>
        </div>
</template>