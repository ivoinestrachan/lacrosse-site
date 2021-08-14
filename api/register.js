export default async (req, res) => {
    //
    String.prototype.replaceAll = function (find, replace){
        var regex = new RegExp(find,'g');
        return this.replace(regex, replace)
    }   


    const uri = "mongodb+srv://lol:s9DYzBg5qwtchwgb@cluster0.z67ga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const { MongoClient } = require('mongodb')
    const mongoclient = new MongoClient(uri);
    await mongoclient.connect();
    const db = mongoclient.db("Onelax");
    
    let name = req.query.name;
    let email = req.query.email;
    let age = req.query.age;
    let size = req.query.size;

    if (name.replaceAll(" ", "") === "" || email.replaceAll(" ", "") === "" || age.replaceAll(" ", "") === "" || size.replaceAll(" ", "") === "") return res.status(400).send({status: "failed", reason: "please fill out all of the required fields"});
    if (Number(age).toString().toLowerCase() === "nan") return res.status(400).send({status: "failed", reason: "Age isn't a valid number!"});

    let user = await db.collection("users").findOne({email: email});
    if (!user){
        await db.collection("users").insertOne({
            name: name,
            email: email,
            age: age,
            size: size
        })
        return res.redirect("/thank-you")
    }else{
        await db.collection("users").updateOne({email: email}, {$set: {
            name: name,
            age: age,
            size: size
        }})
        return res.redirect("/updated")
    }
  }
  