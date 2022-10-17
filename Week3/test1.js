function operasi (n) {
    if(n % 2 == 0 ) {
        console.log(n + " genap")
    } else{
        console.log(n + " ganjil")
    }
    if (n > 1){ 
        return operasi(n -1)
    }
}

operasi(10);