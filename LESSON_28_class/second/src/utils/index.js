export function createId() {
  return Math.floor(Math.random() * 100000000);
}

export function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  console.log("why");
}


export function getLocalStorage(key){
  return JSON.parse( localStorage.getItem(key)) || null
}

export function removeLocalStorage(key){
    localStorage.removeItem(key)
}