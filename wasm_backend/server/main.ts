import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { get_wise_saying } from "./wasm_backend.js";

let appPort = 4040

const router = new Router();
router.get("/saying", (context) => {
    console.info(context)

  context.response.body = get_wise_saying();
});

const app = new Application();
app.use(
  oakCors({
    origin: /^.+localhost:(1234|3000)$/,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }),
);
app.use(router.routes());

console.info(`CORS-enabled web server listening on port ${appPort}`);
console.info(`Access it at: http://localhost:${appPort}/`);
await app.listen({ port: appPort });