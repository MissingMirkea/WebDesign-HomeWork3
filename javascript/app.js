var form = document.getElementById('project-form');
var tbody = document.getElementById('projects-tbody');
var nameInput = document.getElementById('project-name');
var descInput = document.getElementById('project-description');
var urlInput = document.getElementById('project-url');
var techSelect = document.getElementById('project-technology');
var dateInput = document.getElementById('project-date');


var nameError = document.getElementById('project-name-error');
var descError = document.getElementById('project-description-error');
var urlError = document.getElementById('project-url-error');
var techError = document.getElementById('project-technology-error');
var dateError = document.getElementById('project-date-error');


function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}


function clearError(field, errorDiv) {
    field.setAttribute('aria-invalid', 'false');
    field.classList.remove('invalid');
    errorDiv.textContent = '';
}


function showError(field, errorDiv, message) {
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('invalid');
    errorDiv.textContent = message;
}


function validateForm() {
    var isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, nameError, 'Project name is required');
        isValid = false;
    } else {
        clearError(nameInput, nameError);
    }

    if (descInput.value.trim().length < 10) {
        showError(descInput, descError, 'Description must be at least 10 characters');
        isValid = false;
    } else {
        clearError(descInput, descError);
    }

    if (urlInput.value.trim() === '') {
        showError(urlInput, urlError, 'URL is required');
        isValid = false;
    } else if (!isValidUrl(urlInput.value)) {
        showError(urlInput, urlError, 'Please enter a valid URL');
        isValid = false;
    } else {
        clearError(urlInput, urlError);
    }

    if (techSelect.value === '') {
        showError(techSelect, techError, 'Please select a technology');
        isValid = false;
    } else {
        clearError(techSelect, techError);
    }

    if (dateInput.value === '') {
        showError(dateInput, dateError, 'Date is required');
        isValid = false;
    } else {
        clearError(dateInput, dateError);
    }

    return isValid;
}

function formatDate(dateStr) {
    var date = new Date(dateStr + 'T00:00:00');
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


function addRowToTable(name, desc, url, tech, date) {
    var row = document.createElement('tr');

    var thumbCell = document.createElement('td');
    var img = document.createElement('img');
    img.src = 'https://picsum.photos/80/50?random=' + Date.now();
    img.alt = name + ' thumbnail';
    img.loading = 'lazy';
    thumbCell.appendChild(img);

    var nameCell = document.createElement('td');
    nameCell.textContent = name;

    var descCell = document.createElement('td');
    descCell.textContent = desc;

    var urlCell = document.createElement('td');
    var link = document.createElement('a');
    link.href = url;
    link.textContent = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    urlCell.appendChild(link);

    var techCell = document.createElement('td');
    techCell.textContent = tech;

    var dateCell = document.createElement('td');
    dateCell.textContent = formatDate(date);

    row.appendChild(thumbCell);
    row.appendChild(nameCell);
    row.appendChild(descCell);
    row.appendChild(urlCell);
    row.appendChild(techCell);
    row.appendChild(dateCell);

    tbody.appendChild(row);
}

function clearAllErrors() {
    nameError.textContent = '';
    descError.textContent = '';
    urlError.textContent = '';
    techError.textContent = '';
    dateError.textContent = '';
    
    nameInput.setAttribute('aria-invalid', 'false');
    descInput.setAttribute('aria-invalid', 'false');
    urlInput.setAttribute('aria-invalid', 'false');
    techSelect.setAttribute('aria-invalid', 'false');
    dateInput.setAttribute('aria-invalid', 'false');

    nameInput.classList.remove('invalid');
    descInput.classList.remove('invalid');
    urlInput.classList.remove('invalid');
    techSelect.classList.remove('invalid');
    dateInput.classList.remove('invalid');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validateForm()) {
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid && typeof firstInvalid.focus === 'function') {
            firstInvalid.focus();
        }
        return;
    }

    var name = nameInput.value.trim();
    var desc = descInput.value.trim();
    var url = urlInput.value.trim();
    var tech = techSelect.value;
    var date = dateInput.value;

    addRowToTable(name, desc, url, tech, date);

    form.reset();
    clearAllErrors();

    var table = document.getElementById('projects-table');
    table.scrollIntoView({ behavior: 'smooth' });
});

form.addEventListener('reset', function() {
    window.setTimeout(clearAllErrors, 0);
});

nameInput.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        showError(this, nameError, 'Project name is required');
    } else {
        clearError(this, nameError);
    }
});

descInput.addEventListener('blur', function() {
    if (this.value.trim().length < 10) {
        showError(this, descError, 'Description must be at least 10 characters');
    } else {
        clearError(this, descError);
    }
});

urlInput.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        showError(this, urlError, 'URL is required');
    } else if (!isValidUrl(this.value)) {
        showError(this, urlError, 'Please enter a valid URL');
    } else {
        clearError(this, urlError);
    }
});

techSelect.addEventListener('blur', function() {
    if (this.value === '') {
        showError(this, techError, 'Please select a technology');
    } else {
        clearError(this, techError);
    }
});

dateInput.addEventListener('blur', function() {
    if (this.value === '') {
        showError(this, dateError, 'Date is required');
    } else {
        clearError(this, dateError);
    }
});

