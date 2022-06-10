export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname=" https://github.com/xyTom/cf-page-func-proxy/blob/291f504f9be4a65d2daa39a954a41bd8088561f3/_worker.js#L5";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
