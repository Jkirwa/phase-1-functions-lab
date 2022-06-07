// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location>42){
        return location-42;
    } 

    else {
    return 42-location;
}}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)* 264;
 
}
function distanceTravelledInFeet(start, destination){
    if(destination>start){
        const distance=destination-start;
        return distance*264;
}
else if (start>destination){
    const distance=start-destination;
    return distance*264;
} 
}
function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0
    }
    else if (distance > 400 && distance < 2000){
        return 0.02 * (distance - 400)
    }
    else if (distance >= 2000 && distance < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    }         
   
}

        

            
        

        


      

