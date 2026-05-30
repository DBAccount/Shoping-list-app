// Cloudflare Worker — Market List GitHub proxy
// Deploy at: https://workers.cloudflare.com
//
// Required secret (set via Cloudflare dashboard → Worker → Settings → Variables):
//   GITHUB_PAT  — your GitHub Personal Access Token (Contents: Read & Write)
//
// Optional env vars (defaults shown):
//   REPO_OWNER  — DBAccount
//   REPO_NAME   — Shoping-list-app
//   DATA_PATH   — data/market-list-data.json

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (!env.GITHUB_PAT) {
      return new Response(JSON.stringify({ error: 'GITHUB_PAT secret not configured in Worker settings' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const REPO_OWNER = env.REPO_OWNER || 'DBAccount';
    const REPO_NAME  = env.REPO_NAME  || 'Shoping-list-app';
    const DATA_PATH  = env.DATA_PATH  || 'data/market-list-data.json';
    const GH_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${DATA_PATH}`;

    const ghHeaders = {
      Authorization: `token ${env.GITHUB_PAT}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'MarketList-Worker/1.0',
    };

    try {
      if (request.method === 'GET') {
        const r = await fetch(GH_URL, { headers: ghHeaders });
        const body = await r.text();
        return new Response(body, {
          status: r.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (request.method === 'PUT') {
        const payload = await request.json();
        const r = await fetch(GH_URL, {
          method: 'PUT',
          headers: ghHeaders,
          body: JSON.stringify(payload),
        });
        const body = await r.text();
        return new Response(body, {
          status: r.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  },
};
