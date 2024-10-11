import {FastifyReply, FastifyRequest} from 'fastify';

export default class HomeController {
    public static async ping(request: FastifyRequest, reply: FastifyReply) {
        return 'pong\n';
    }

    public static async index(request: FastifyRequest, reply: FastifyReply) {
        return 'Hello World\n';
    }

    public static async sumExceptOne(array: number[]): Promise<{max: number, min: number}> {
        let sum = array.reduce((a, b) => a + b, 0);
        let max = sum - Math.min(...array);
        let min = sum - Math.max(...array);
        return {max, min};
    }

    public static async convertTime(time: string): Promise<string> {
        let [hour, minutes, seconds] = time.split(':');
        let [secondsValue, ampm] = seconds.split(/(?=[A-Z][A-Z])/);
        console.log(hour, minutes, secondsValue, ampm);
        if (ampm === 'PM') {
            if (hour !== '12') {
                hour = String(Number(hour) + 12);
            }
        } else {
            if (hour === '12') {
                hour = '00';
            }
        }
        if (minutes === '00') {
            minutes = '00';
        }
        if (secondsValue === '00') {
            secondsValue = '00';
        }
        return `${hour}:${minutes}:${secondsValue}`;
    }
}

