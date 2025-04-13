---
title: Self-hosted Sentry Discord Integration
created: 2025-04-13 14:38:26
updated: 2025-04-13 14:42:07
aliases:
  - Self-hosted Sentry Discord Integration
المعرفة: "[[Linux]]"
website: en/notes
share: true
---

الحالة:: #ملاحظة/مؤرشفة  
المراجع:: <https://www.perplexity.ai/search/sentry-selfhosted-discord-clie-BUI3D3FbTBKZ6.RemOz6HQ>

---

To configure the Discord integration for a self-hosted Sentry instance, you need to set up a Discord bot and add its credentials to your Sentry configuration. Here's how you can do it:

1. **Create a Discord Bot**:
    
    - Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
        
    - Under the **General Information** tab, note down the _Application ID_ and _Public Key_.
        
    - Navigate to **OAuth2 > General** to find the _Client Secret_.
        
    - Under the **Bot** section, generate and copy the _Bot Token_.
        
2. **Update Sentry's Configuration**:
    
    - Open your `config.yml` file in your self-hosted Sentry setup.
        
    - Add the following configuration under the Discord section:

```yml
discord.application-id: "<application id>"

discord.public-key: "<public key>"

discord.client-secret: "<client secret>"

discord.bot-token: "<bot token>"
```

- Replace `<application id>`, `<public key>`, `<client secret>`, and `<bot token>` with the values obtained from the Discord Developer Portal[^1][^2].

3. **Set Up Interaction Endpoints**:
    
    - In the Discord Developer Portal, go to **General Information** and set the **Interactions Endpoint URL** to:

`{YOUR_DOMAIN}/extensions/discord/interactions/`

- Save changes. Ensure your Sentry instance is publicly accessible (use tools like Ngrok if testing locally)[^1].

4. **Configure OAuth2 Redirect URI**:
    
    - In **OAuth2 > General**, add the following redirect URI:

`{YOUR_DOMAIN}/extensions/discord/setup/`

- Save changes[^1].

5. **Restart Sentry**:
    
    - Restart your Sentry server for the changes in `config.yml` to take effect.
        
6. **Verify Configuration**:
    
    - Ensure that all credentials are correctly set up and that your server is reachable from the internet. Discord will verify this when you save your Interaction Endpoint URL.

Once these steps are completed, your self-hosted Sentry instance should be integrated with Discord, allowing you to use its features seamlessly[^1][^2].

1 [https://develop.sentry.dev/integrations/discord/](https://develop.sentry.dev/integrations/discord/) ↩

2 [https://github.com/getsentry/self-hosted/blob/master/sentry/config.example.yml](https://github.com/getsentry/self-hosted/blob/master/sentry/config.example.yml) ↩
