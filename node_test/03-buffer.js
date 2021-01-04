const buff1 = Buffer.alloc(10);
console.log(buff1);

// 数组创建
const buff2 = Buffer.from([1,2,3]);
console.log(buff2);

// 写入
buff1.write('hello');
console.log(buff1);


// 合并 
const buff3 = Buffer.concat([buff1, buff2]);
console.log(buff3.toString());