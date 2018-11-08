var fido = {
    name: "Fido",
    weight: 40,
    breed: "Mixed",
    loves: ["walks", "fetching balls"]
};

function modify(dog) {
    if (dog.weight > 25) {
        dog.name = "fat";
    }
}

modify(fido);

var prop;
for (prop in fido) {
    console.log("Fido has a " + prop + " property ");
    if (prop == "name") {
        console.log("This is " + fido[prop]);
    }
}