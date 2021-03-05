var sum = 0;
for(let i = 12; i < 126; i++){
    if(i % 2 == 0){
        document.write(`<p>Even: ${i} </p>`);
        sum = sum + i;
    }
}

document.write(`<p>Sum: ${sum}</p>`);