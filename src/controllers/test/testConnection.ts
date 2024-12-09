import { ReqRest } from "../../types/types";

const test:ReqRest = (req, res) => {
    const node = process.env.NODE_ENV || "development";
    res.json({
        status: 200,
        success: true,
        message: "It's working!",
        data: node
    });
};

export default test;
