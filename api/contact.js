export default async (req, res) => {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    String.prototype.replaceAll = function (find, replace) {
        var regex = new RegExp(find, "g");
        return this.replace(regex, replace);
    };
    const fetch = require("node-fetch")
    const nodemailer = require("nodemailer");

    // ------------------------> important stuff!
    const email = "testbotemail45@gmail.com";
    const pass = "testbot242";
    // ------------------------> end important stuff!

    if (!req.query.name || !req.query.email || !req.query.message) return res.send("sus stap hacking");
    if (req.query.name.replaceAll(" ", "") === "" || req.query.email.replaceAll(" ", "") === "" || req.query.message.replaceAll(" ", "") === "") return res.send("you must actually put things!");

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: pass
        }
    });
    let template = await fetch("https://onelaxbahamas.vercel.app/emailtemplate.html");
    template = await template.text();
    template = template.replaceAll("form_template_name", req.query.name);
    template = template.replaceAll("form_template_message", req.query.message);

    const mailOptions = {
        from: email,
        to: req.query.email,
        subject: 'Thanks for filling out the the contact form!',
        html: template
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            return res.send("invalid email!");
        }
        else next();
    });


    async function next() {
        console.log("next @45")
        var transporterx = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: pass
            }
        });
        
        const mailOptionsx = {
            from: email,
            to: "joshyzou@gmail.com",
            subject: 'Yooo. We got a contact form thing',
            html: `user email: ${req.query.email}, user name: ${req.query.name}, user message: ${req.query.message}`
        };
        transporterx.sendMail(mailOptionsx, function (err, info) {
            if (err) {
                console.log(err, "@62")
            } else {
                console.log(info)
            }
        });
        return res.send("Form successfully sent!")
    }
};
