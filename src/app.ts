import Fastify from "fastify";
import {HomeRoute} from "@/Http/routes";


export const app = Fastify({
    logger: true,
});

app.register(HomeRoute);