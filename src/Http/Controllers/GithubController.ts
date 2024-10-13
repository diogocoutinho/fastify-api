import axios from 'axios';
import { FastifyReply, FastifyRequest } from 'fastify';
import * as process from "node:process";

export default class GithubController {
    public static async getSelectedRepos(request: FastifyRequest, reply: FastifyReply) {
        try {
            const GITHUB_API_URL = `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`;
            const response = await axios.get(GITHUB_API_URL);
            const allRepos = response.data;

            const selectedRepoNames = process.env.GITHUB_REPOSITORIES?.split(',') || [];
            const selectedRepos = allRepos.filter((repo: any) => {
                return selectedRepoNames.includes(repo.name);
            }).sort((a: any, b: any) => {
                return a.stargazers_count - b.stargazers_count;
            });

            return reply.send(selectedRepos);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch repositories' });
        }
    }
}