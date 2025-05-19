'use strict';

const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'finestFoodOutlet' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING city
 *  2. INTEGER votes
 * API URL https://jsonmock.hackerrank.com/api/food_outlets?city={city}&page={page_no}
 */

async function finestFoodOutlet(city, votes) {
    //page, number of pages, and where we will store the best outlet
    let p = 1;
    let numP = 1;
    let best = null;
    
    //going through all pages
    while(p <= numP){
        const response = await fetch(
            `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${p}`
        );
        
        if(!response.ok) {
            throw new Error(`Bad news: ${response.status}`)
        }
        
        const data = await response.json();
        
        //updating number of pages to be correct
        numP = data.total_pages;
        
        //getting the outlets from each page
        data.data.forEach(outlet => {
            //checking for minimum vote requirement
            if(outlet.user_rating.votes >= votes) {
                //if theres no best, set it, otherwise you check if you update the best outlet to the current outlet if better rating or maximum votes tiebreaker
                if(!best) {
                    best = outlet;
                } else {
                    const currRating = outlet.user_rating.average_rating;
                    const bestRating = best.user_rating.average_rating;
                    
                    if(currRating > bestRating || (currRating == bestRating && outlet.user_rating.votes > best.user_rating.votes)) {
                        best = outlet;
                    }
                }
            }
        });
        
        p++;
    }
    
    return best.name;
    
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const city = readLine();

    const votes = parseInt(readLine().trim(), 10);

    const result = await finestFoodOutlet(city, votes);

    ws.write(result + '\n');

    ws.end();
}
