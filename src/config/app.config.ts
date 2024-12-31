export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'env',
    mongoDbUri: process.env.MONGO_DB_URI,
    port: +process.env.port || 3002,
    pokeApiUri: process.env.POKE_API_URI || 'https://pokeapi.co/api/v2/pokemon' ,
    defaultLimit: +process.env.DEFAULT_LIMIT || 5
})