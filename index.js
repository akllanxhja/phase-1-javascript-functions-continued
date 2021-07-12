// function saturdayFun(activity="roller-skate") {
//    return (`This Saturday, I want to ${activity}!`);
// }
// saturdayFun();

// function mondayWork(activity="go to the office") {
//     return (`This Monday, I will ${activity}.`);
// }
// mondayWork();

// function wrapAdjective(style="*") {
//     return function(adjective="special") {
//         return `You are ${style}${adjective}${style}!`;
//     }
// }

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

// Below is a 'function declaration'
// function mondayWork(activity = 'go to the office') {
//     return `This Monday, I will ${activity}.`;
// }
// mondayWork();

// This is the same function but is a 'function expression'
let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(style='*') {
    return function(adjective='special') {
        return `You are ${style}${adjective}${style}!`;
    }
}


