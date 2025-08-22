const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('previewImg');
const editBtn = document.getElementById('editBtn');
const replacementInput = document.getElementById('replacementInput');

fileInput.addEventListener('change', e => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => preview.src = reader.result;
  reader.readAsDataURL(file);
});

editBtn.addEventListener('click', () => {
  const replacement = replacementInput.value.trim();
  if (replacement) {
    preview.src = replacement;
    return;
  }

  // Default replacement image path
  const defaultPath = 'wow.bg/cc14d7c6d4576a0dda7d3e6b2ce6ed54.jpg';
  preview.src = defaultPath;
});
