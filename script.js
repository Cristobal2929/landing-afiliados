// Cargar enlace de compra desde config.json
fetch('config.json')
.then(r=>r.json())
.then(data=>{
document.getElementById('buyBtn').href = data.affiliate_link;
});
