document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginModal = document.getElementById('loginModal');
  const adminDashboard = document.getElementById('adminDashboard');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('adminPass').value;
    if(pass === '1234') {
      loginModal.classList.add('hidden');
      adminDashboard.classList.remove('hidden');
    } else {
      alert('Diso ny tenimiafina!');
    }
  });

  const imgUpload = document.getElementById('imgUpload');
  if(imgUpload) {
    imgUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const max_size = 800;
          if(width > height && width > max_size) {
            height *= max_size / width;
            width = max_size;
          } else if(height > max_size) {
            width *= max_size / height;
            height = max_size;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
          const container = document.getElementById('imgPreviewContainer');
          container.innerHTML = `<p class="text-xs text-amber-400 mt-2">Voatsindry sy voatsitsy soa aman-tsara:</p><img src="${dataUrl}" class="mt-2 rounded-xl h-32 object-cover">`;
        }
        img.src = event.target.result;
      }
      reader.readAsDataURL(file);
    });
  }
});
