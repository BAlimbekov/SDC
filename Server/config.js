module.exports = {
    dev: {
        connectionString: "postgresql://postgres:docker@127.0.0.1:5432/airbnb",
        // const connectionString = "postgresql://postgres:docker@127.0.0.1:5432/airbnb";
        port: 5000,
    },
    production: {
        connectionString: process.env.POSTGRES_CONNECTION_STRING,
        port: process.env.PORT,
    },
};

// module.exports = {
//     dev: {
//         connectionString: "postgresql://postgres:docker@127.0.0.1:5432/airbnb",
//         // const connectionString = "postgresql://postgres:docker@127.0.0.1:5432/airbnb";
//         port: 5000,
//     },
//     production: {
//         connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
//         port: process.env.PORT,
//     },
// };