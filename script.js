function validateForm() {
    // Mendapatkan nilai dari input
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const nomorHandphone = document.getElementById('nomor_handphone').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    // Menghapus pesan kesalahan sebelumnya
    document.getElementById('error-nama').innerText = '';
    document.getElementById('error-email').innerText = '';
    document.getElementById('error-nomor').innerText = '';
    document.getElementById('error-alamat').innerText = '';
    document.getElementById('error-pesan').innerText = '';

    // Membuat array untuk menyimpan pesan kesalahan
    let errors = [];

    // Memeriksa setiap kolom
    if (nama === '') {
        errors.push('Nama Lengkap harus diisi.');
        document.getElementById('error-nama').innerText = 'Nama Lengkap harus diisi.';
    }
    if (email === '') {
        errors.push('Email harus diisi.');
        document.getElementById('error-email').innerText = 'Email harus diisi.';
    }
    if (nomorHandphone === '') {
        errors.push('Nomor Handphone harus diisi.');
        document.getElementById('error-nomor').innerText = 'Nomor Handphone harus diisi.';
    }
    if (alamat === '') {
        errors.push('Alamat harus diisi.');
        document.getElementById('error-alamat').innerText = 'Alamat harus diisi.';
    }
    if (pesan === '') {
        errors.push('Pesan harus diisi.');
        document.getElementById('error-pesan').innerText = 'Pesan harus diisi.';
    }

    
    if (errors.length === 0) {
        
        const whatsappNumber = '6281382146788'; 
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Nama:%20${encodeURIComponent(nama)}%0AEmail:%20${encodeURIComponent(email)}%0ANomor%20HP:%20${encodeURIComponent(nomorHandphone)}%0AAlamat:%20${encodeURIComponent(alamat)}%0APesan:%20${encodeURIComponent(pesan)}`;
        
       
        window.open(whatsappUrl, '_blank').focus();
    }
}