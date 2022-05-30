let a = prompt("moi nhap chuoi de kiem tra");
function timnguyenam (a) {
    let nguyenam = ['a','o','e','u','i'];
    let dem = 0;
    for(let i=0;i<a.length;i++){
        for(let j =0; j< nguyenam.length;j++){
            if(a[i] === nguyenam[j]){
                dem ++;
            }
        }
    }
    if(dem !=0){
        return "so ky tu nguyen am trong chuoi la " + dem ;
    }
   else{
       return false
    }
}
console.log(timnguyenam(a));