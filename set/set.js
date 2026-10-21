//Syntax to define a set

const ROLE_ADDRESSES = new Set(['admin', 'info', 'support', 'sales', 'noreply']);

const role = ROLE_ADDRESSES.has('admin') //returns true/false