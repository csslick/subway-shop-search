const shops = document.querySelector('.shops');
let html = `
  <tr>
    <th>NO</th>
    <th>매장명</th>
    <th>매장주소</th>
    <th>주요서비스</th>
    <th>연락처</th>
  </tr>  
`

// 매장 출력(내림차순)
shopDB.reverse().forEach(function(shop) {
  // console.log(shop.title)
  showShops(shop);
})

// 총 *개 매장이 있습니다.
const shop_count = document.querySelector('.board_total > .shop_count');
shop_count.innerText = shopDB.length;

function showShops(shop) {
  const id = shop.id;
  const title = shop.title;
  const address = shop.address;
  const service = shop.service;
  const tel = shop.tel;
  // console.log(service)
  html += `
      <tr>
        <td>${id}</td>
        <td><a href='#'>${title}</a></td>
        <td class='address'><a href="#">${address}</a></td>
        <td class='service'>
          <span ${service.morning ? "class='accent'": ""}>아침메뉴</span>
          <span ${service.roundTheClock ? "class='accent'": ""}>24시간</span>
        </td>
        <td>${tel}</td>
      </tr>  
    `
  shops.innerHTML = html;  
}

