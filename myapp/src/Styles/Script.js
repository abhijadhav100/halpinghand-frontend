function showForm(userType) {
    const donorForm = document.getElementById('donorForm');
    const trustForm = document.getElementById('trustForm');
    const donorBtn = document.getElementById('donorBtn');
    const trustBtn = document.getElementById('trustBtn');

    if (userType === 'donor') {
        donorForm.style.display = 'block';
        trustForm.style.display = 'none';
        donorBtn.classList.add('btn-primary');
        donorBtn.classList.remove('btn-outline-primary');
        trustBtn.classList.add('btn-outline-primary');
        trustBtn.classList.remove('btn-primary');
    } else if (userType === 'trust') {
        donorForm.style.display = 'none';
        trustForm.style.display = 'block';
        trustBtn.classList.add('btn-primary');
        trustBtn.classList.remove('btn-outline-primary');
        donorBtn.classList.add('btn-outline-primary');
        donorBtn.classList.remove('btn-primary');
    }
}