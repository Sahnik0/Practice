function splitEmail(email) {
  const at = email.lastIndexOf('@');
  return {
    local: email.slice(0, at).toLowerCase(),
    domain: email.slice(at + 1).toLowerCase(),
  };
}