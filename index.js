import express from "express";

const app = express();

app.listen("9000", () => {
    console.log('server is live on port 9000');
})