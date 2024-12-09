import transporter from "../../config/nodemailer/nodemailer";
import { ReqRest } from "../../types/types";

const test:ReqRest = (req, res) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            console.log("Server is ready to take our messages");
            res.status(200).send(success);
        }
    });
};

export default test;
