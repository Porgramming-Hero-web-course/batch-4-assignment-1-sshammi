{
    const countWordOccurrences=(sentence:string,word:string):number=>{
        let cnt:number=0;
        word = word.toLowerCase();
        let demoSentence:string[]=sentence.split("");
        let demoWord:string="";
        for(const i of demoSentence){
            if((i>='a' && i<='z')||(i>='A' && i<='Z'))
            {
                demoWord+=i;
            }
            else
            {
                demoWord = demoWord.toLowerCase();
                if(demoWord==word)
                    cnt++;
                demoWord="";
            }
        }
        return cnt;
    }
    const sentence='TypeScript is great. I love TypeScript!';
    const word='typescript';
    console.log(countWordOccurrences(sentence,word));
}