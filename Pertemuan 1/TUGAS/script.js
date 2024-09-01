function validateForm() {
    // validasi nama produk tidak boleh kosong
    if (document.forms["formData"]["nama-produk"].value == "") {
        alert("Nama Produk tidak boleh kosong")
        return false
    }

    // validasi deskripsi produk tidak boleh kosong
    if (document.forms["formData"]["deskripsi"].value == "") {
        alert("Deskripsi tidak boleh kosong")
        return false
    }

    // validasi kategori tidak boleh kosong
    if (document.forms["formData"]["kategori"].value == "") {
        alert("Kategori harus dipilih")
        return false
    }

    // validasi sub kategori tidak boleh kosong
    if (document.forms["formData"]["sub-kategori"].value == "") {
        alert("Sub kategori harus dipilih")
        return false
    }

    // validasi harga satuan tidak boleh kosong
    if (document.forms["formData"]["harga-satuan"].value == "") {
        alert("Harga satuan tidak boleh kosong")
        return false
    }

    // validasi jenis pembelian tidak boleh kosong
    if (document.forms["formData"]["grosir"].value == "") {
        alert("grosir harus diisi")
        return false
    }

    // validasi apabila pembelian grosir maka harga grosir tidak boleh kosong
    if (document.forms["formData"]["grosir"].value == "ya") {
        if (document.forms["formData"]["harga-grosir"].value == "") {
            alert("Harga grosir tidak boleh kosong")
            return false
        }
    }

    // validasi jumlah jasa kirim yang dipilih minimal 3
    var jasa_kirim = document.forms["formData"]["jasa-kirim"]
    var jumlahJasaKirim = 0
    for (let i = 0; i < jasa_kirim.length; i++) {
        if (jasa_kirim[i].checked == true) {
            jumlahJasaKirim++
        }
    }

    if (jumlahJasaKirim < 3) {
        alert("Pilih minimal 3 jasa kirim")
        return false
    }

    // validasi captcha 
    var captcha = document.forms["formData"]["captcha"].value
    var inputCaptcha = document.forms["formData"]["input-captcha"].value
    if (inputCaptcha != captcha) {
        alert("captcha salah")
        generateCaptcha()
        return false
    }

    alert("Pengisian Form Berhasil")
    return true
    
    
}

// fungsi untuk mengubah pilihan sub kategori berdasarkan kategori yang dipilih
function setSubKategori() {
    let kategori = document.forms["formData"]["kategori"].value;
    let subKategoriElement = document.getElementById("sub-kategori");
    
    if (kategori == "baju") {
        subKategoriElement.innerHTML = 
        '<option value="">--Pilih Sub Kategori--</option>' +
        '<option value="baju-pria">Baju Pria</option>' + 
        '<option value="baju-wanita">Baju Wanita</option>' + 
        '<option value="baju-anak">Baju Anak</option>';
    } else if (kategori == "elektronik") {
        subKategoriElement.innerHTML = 
        '<option value="">--Pilih Sub Kategori--</option>' +
        '<option value="mesin-cuci">Mesin Cuci</option>' + 
        '<option value="kulkas">Kulkas</option>' + 
        '<option value="ac">AC</option>';
    } else if (kategori == "alat-tulis") {
        subKategoriElement.innerHTML = 
        '<option value="">--Pilih Sub Kategori--</option>' +
        '<option value="kertas">Kertas</option>' + 
        '<option value="map">Map</option>' + 
        '<option value="pulpen">Pulpen</option>';        
    } else {
        subKategoriElement.innerHTML = '<option value="">Pilih Sub Kategori</option>';
    }
}


// fungsi untuk mengaktifkan input harga grosir apabila pembelian grosir
function isGrosir() {
    if (document.forms["formData"]["grosir"].value == "tidak") {
        document.getElementById("harga-grosir").disabled = true
    }
    else {
        document.getElementById("harga-grosir").disabled = false

    }
}

// fungsi untuk generate captcha
function generateCaptcha() {
    var captcha = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    for (var i = 0; i < 5; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }
    
    document.getElementById("captcha").value = captcha;
}

