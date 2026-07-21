
credentials = {
    username: "admin",
    password: "admin123"

}
console.log(credentials.username);
console.log(credentials.password);
console.log(credentials['username']);
console.log(credentials['password']);
console.log(typeof(credentials));
console.log(typeof(credentials.username));
console.log(typeof(credentials.password));

userdetails = {
    name: "srinu",
    age: 30,
    email: "cnuvas94@gmail.com",
    address: {
        street: "Veerannapet",
        pincode: 509001
    }
}
console.log(userdetails);
console.log(userdetails.name);
console.log(userdetails.address.pincode);
console.log(userdetails['age']);
console.log(userdetails['address']['street']);

userdetails['gender'] = "male";
console.log(userdetails);

delete userdetails.age;
console.log(userdetails);   

userdetails['name'] ="Srinu Kanike";
console.log(userdetails);


