import {FastifyInstance} from "fastify";
import HomeController from "@/Http/Controllers/HomeController";
import GithubController from "@/Http/Controllers/GithubController";

export async function HomeRoute(fastify: FastifyInstance) {
    fastify.get('/ping', async (request, reply) => {
        return HomeController.ping(request, reply);
    });

    fastify.get('/', async (request, reply) => {
        return HomeController.index(request, reply);
    });

    fastify.get('/sumExceptOne', async (request, reply) => {
        let array = [1,3,5,7,9];
        return HomeController.sumExceptOne(array);
    });

    fastify.get('/convertTime', async (request, reply) => {
        // let time = new Date().toLocaleTimeString('en-US', {hour12: true});
        let time = '12:40:22AM';
        return HomeController.convertTime(time);
    });

    fastify.get('/github/repos', async (request, reply) => {
        return GithubController.getSelectedRepos(request, reply);
    });
}
