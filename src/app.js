console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 bnu yapamıyoruz çünkü sabit belirledik

console.log(euroDun)

// array birden fazla dizi için kullanılır [] yararlanılır
// camelCasing değişken tanımlaması
// PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

// döngü elindeki bir veriyi dolaşmaya yarıyor li-li-li aklında kalsın 
// for daki 3 yerine konutKredileri.length de yazarsam o üçünü döndüürür 
console.log("<ul>")
for(let i =0;i<3;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("/<ul>")



console.log(konutKredileri)