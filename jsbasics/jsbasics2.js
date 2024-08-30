const flag = true
if(!flag)
{
    console.log('condition satisfied')
}
else
{
    console.log(flag)
    console.log('condition not satisfied')
}
let index =0;

index = 0;
do{
    console.log(index)
    index = index+1
}
while(index < 2000);

for(let k=0;k<100;k++)
{
    console.log('-------------------------')
    console.log(k)

}

let required1 = true
index = 0
while (required1)
{
    console.log('***********'+index)
    index = index+1;
    if(index > 1000)
    {
        required1 = false
    }

}
let count =0;
for (m=1;m< 1000;m++)
{
    if((m % 5 == 0) && (m%17 ==0))
    {
        count =count+1;
        console.log('--------------------------------------')
        console.log(m)
        if (count==3)
            break;
    }
}