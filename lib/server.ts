import app from "./app";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Hello from Node Server');
    console.log(`Example app listening on port ${PORT}!`);
});
