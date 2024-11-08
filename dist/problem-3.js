"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        let cnt = 0;
        word = word.toLowerCase();
        let demoSentence = sentence.split("");
        let demoWord = "";
        for (const i of demoSentence) {
            if ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z')) {
                demoWord += i;
            }
            else {
                demoWord = demoWord.toLowerCase();
                if (demoWord == word)
                    cnt++;
                demoWord = "";
            }
        }
        return cnt;
    };
    const sentence = 'TypeScript is great. I love TypeScript!';
    const word = 'typescript';
    console.log(countWordOccurrences(sentence, word));
}
