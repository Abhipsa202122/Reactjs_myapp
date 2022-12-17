function multiply(a=10,b,c=30){
    console.log(a*b*c);

}
multiply(12,3,4);
multiply(4,5); //default value of c is 10 
multiply(6,8,2);
multiply(40);//a is replced no value for b and c is defalut value
multiply();//NAN
multiply(1,2,3,4);//the extra parameter will be discarded
