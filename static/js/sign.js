function onChange() {
    const pword = document.querySelector('input[name=password]');
    const cnfpword = document.querySelector('input[name=confirm]');
    if (cnfpword.value === pword.value) {
      cnfpword.setCustomValidity('');
    } else {
      cnfpword.setCustomValidity('Password did not match');
    }
  }