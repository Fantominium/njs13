This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### Where I Left off 16/08/23:
https://next-auth.js.org/getting-started/example


### 11/09/2023 - openssl installed, need to run for next auth key
https://next-auth.js.org/configuration/options#json-web-token-options 
## NOTE: - we want session vars not tokens

### - playuground for google oauth:
https://developers.google.com/oauthplayground/

### - Apple is a faff and needs more time to digest, kiss me ass 
## - github: 
   1 https://github.com/login/oauth/authorize - endpoint - GET (for application)
    Params {
        client_id - string
        redirect_uri - string
        state - string
    }
    2 Give code to POST https://github.com/login/oauth/access_token (for users)
        with the params (all strings ){
            client_id
            client_secret
            code
            redirect_uri
            
        }
    3 On behalf of user: 
        Authorization: Bearer OAUTH-TOKEN
        GET https://api.github.com/user

## - twitch
    1 Register the app here 1st https://dev.twitch.tv/docs/authentication/register-app/
    2 After reg get token - instructions here: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/
    3 Implicit grant flow is the one we use - from here: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow
## - twitter
    NOT WORTH IT
    Horrible dev api, and sluggish, outdated oauth (1.0 by default and requires opt in for oauth 2)

## - discord (pretty standard)
    1 Register app here : https://discord.com/developers/applications
    # NB: No app.json accepted here:
    **In accordance with the relevant RFCs, the token and token revocation URLs will only accept a content type of application/x-www-form-urlencoded. JSON content is not permitted and will return an error.**
    2 <state> value is recommended for transactions with endpoint, not mandatory, but heavily recommended
    3 implicit grant here : https://discord.com/developers/docs/topics/oauth2#implicit-grant
    3.a (optional) https://discord.com/developers/docs/topics/oauth2#client-credentials-grant - more secure
