import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    POKE_API_URI: Joi.required(),
    PORT: Joi.number().default(3000),
    MONGO_DB_URI: Joi.required(),
    DEFAULT_LIMIT: Joi.number().default(7)
})