import {pointsForWord} from "../utils";

describe("pointsForWord", ()=>{
    it("calculates the total points for a word (1 point per vowel, 2 per consonant)", ()=>{
        const word = "test";
        const points= pointsForWord(word);
        expect(points).toBe(7);
    })
})

describe("pointsForWord", ()=>{
    it("handles upercase letters", ()=>{
        const word = "tESt";
        const points= pointsForWord(word);
        expect(points).toBe(7);
    })
})

describe("pointsForWord", ()=>{
    it("handles blank spaces", ()=>{
        const word = "t e s t";
        const points= pointsForWord(word);
        expect(points).toBe(7);
    })
})

describe("pointsForWord", ()=>{
    it("handles non letter characters", ()=>{
        const word = "t3est!";
        const points= pointsForWord(word);
        expect(points).toBe(7);
    })
})

describe("pointsForWord", ()=>{
    it("handles a blank string", ()=>{
        const word = "";
        const points= pointsForWord(word);
        expect(points).toBe(0);
    })
})

describe("pointsForWord", ()=>{
    it("handles non string variable", ()=>{
        const word = 52;
        const points= pointsForWord(word);
        expect(points).toBe(0);
    })
})