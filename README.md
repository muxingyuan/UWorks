# UWorks Website

The UWorks website is hosted on the Cloudflare Pages free tier.

## Hosting

- Provider: Cloudflare Pages
- Plan: Free tier
- Source: GitHub repository `muxingyuan/UWorks`
- Production branch: `main`
- Automatic deployment: enabled after each push to `main`
- Cloudflare preview: https://uworks-czh.pages.dev/

## Domain and email status

The existing Wix website, `uworks.ca` domain connection, and Wix business email have not been changed or disconnected.

Before pointing `uworks.ca` to Cloudflare, preserve and verify every email-related DNS record, including MX, SPF, DKIM, DMARC, and any verification records. This prevents interruption to the UWorks business email service during the future website cutover.
