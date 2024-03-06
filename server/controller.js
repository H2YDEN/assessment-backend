let accomplishmentArr = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["If you continually give, you will continually have.", "Don’t worry; prosperity will knock on your door soon.", 
        "All your hard work will soon pay off.", "The greatest achievement in life is to stand up again after falling.", "Well done is better than well said."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAccomplishment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * accomplishmentArr.length);
        let randomAccomplishment = accomplishmentArr[randomIndex];
        console.log("Get Accomplishment:", randomAccomplishment)
        res.status(200).send(randomAccomplishment + " (ID of accomplishment = " + randomIndex + ")");
    },

    postAccomplishment: (req, res) => {
        let { accomplishment } = req.body;
        accomplishmentArr.push(accomplishment);
        console.log("New Accomplishment:", accomplishment);
        res.status(200).send("Accomplishment added successfully!");
    },

    putAccomplishment: (req, res) => {
        let { index, accomplishment } = req.body;
        accomplishmentArr[index] = accomplishment
        console.log("Editted Accomplishment:", accomplishment, index);
        res.status(200).send("Accomplishment editted successfully!");
    },

    deleteAccomplishment: (req, res) => {
        let { index } = req.body;
        console.log("Deleted Accomplishment:", index);
        accomplishmentArr.splice(index, 1);
        res.status(200).send("Accomplishment deleted successfully!");
    }

}