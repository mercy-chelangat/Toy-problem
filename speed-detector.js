// promt the user to enter the car speed
let speed = 150;

//define the speed limit and the demerit point threshold
let speedLimit = 70;
let demeritPointThreshold = 12;

// calculate the demerit point based on the car speed
let demeritPoints = 0;

if(speed < speedLimit){
    console.log("OK");
} else {
    demeritPoints = Math.floor((speed - speedLimit) / 5);

    if(demeritPoints > demeritPointThreshold) {
        console.log("Licences Suspended");
    } else{
        console.log("Points:" + demeritPoints);
    }
}

