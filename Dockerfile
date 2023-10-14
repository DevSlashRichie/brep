FROM node:18 AS base

# Install dependencies only when needed
FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
#RUN apk add --no-cache libc6-compat
#RUN apk add --no-cache curl
#RUN apk add --no-cache --upgrade bash

WORKDIR /app

# Install dependencies based on the preferred package manager
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

COPY . .

RUN bun install

# Rebuild the source code only when needed
#COPY --from=deps /app/node_modules ./node_modules

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]

# Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app
# 
# ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1
# 
# COPY --from=builder /app/apps/web/public ./public
# 
# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder /app/apps/web/.next ./.next
# #COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./.next/static
# 
# EXPOSE 3000
# 
# ENV PORT 3000
# # set hostname to localhost
# ENV HOSTNAME "0.0.0.0"
# 
# CMD ["node", ".next/standalone/apps/web/server.js"]
