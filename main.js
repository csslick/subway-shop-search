const shops = document.querySelector('.shops');

shopDB.forEach(function(shop) {
  console.log(shop.title)
  showShops(shop);
})

function showShops(shop) {
  const id = shop.id;
  const title = shop.title;
  const address = shop.address;
  const service = shop.service;
  const tel = shop.tel;
  console.log(service)
  const html = `
      <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${address}</td>
        <td>${service}</td>
        <td>${tel}</td>
      </tr>  
    `
  shops.innerHTML += html;  
}

