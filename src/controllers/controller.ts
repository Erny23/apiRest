const test = (req:Express.Request, res: { json: (arg0: { status: number; success: boolean; message: string; }) => void; }) => {
    res.json({
        status: 200,
        success: true,
        message: "Hello World"
    });
}

export default {
    test
}
