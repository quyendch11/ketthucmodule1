let a = [32,4,3,5,8,9];
let b = prompt("moi nhap so nguyen can tim");
let check ;
let vitri ;
function timsotrongmang (b) {
    for(let i=0 ; i<a.length; i++){
        if (b == a[i]){
             check = true ;
             vitri = i;
        }
    }
    if(check){
        return "so" + b + " nhap co trong mang o vi tri " + vitri;
    }
    else{
        return false;
    }
}
console.log(timsotrongmang(b));