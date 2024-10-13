import Fastify from "fastify";
import { HomeRoute } from "@/Http/routes";
import dotenv from 'dotenv';

dotenv.config();

export const app = Fastify({
    logger: true,
});

app.register(HomeRoute);