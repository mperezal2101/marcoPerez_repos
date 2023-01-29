import { registerAs } from "@nestjs/config";
export default registerAs('config', () => {
  return {
    cockroachDB: {
      dbName: 'defaultdb',
      port: 26257,
      password: 'v_6flcJoSWYz180o5qQ3Gg',
      user: 'mperezal',
      host: 'wiggly-amoeba-3191.g8z.cockroachlabs.cloud',
      cluster: 'wiggly-amoeba-3191',
    },
  }
})


