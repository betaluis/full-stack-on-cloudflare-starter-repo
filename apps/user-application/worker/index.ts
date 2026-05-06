import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./trpc/router";
import { createContext } from "./trpc/context";
import { initDatabase } from '@repo/data-ops/database'

// Entry point to our request
export default {
    fetch(request, env, ctx) {
        initDatabase(env.DB) // Had to add something in wrangler. Not really sure what it was for, but it tied this to cloudlare somehow
        const url = new URL(request.url);

        if (url.pathname.startsWith("/trpc")) {
            return fetchRequestHandler({
                endpoint: "/trpc",
                req: request,
                router: appRouter,
                createContext: () =>
                    createContext({ req: request, env: env, workerCtx: ctx }),
            });
        }
        return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler<ServiceBindings>;
