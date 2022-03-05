
# ---- Base Node ----
FROM node:bullseye-slim AS base
# set working directory
WORKDIR /usr/src/app
# copy project file
COPY package*.json /usr/src/app

# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules
RUN npm install

# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /usr/src/app/prod_node_modules ./node_modules
# copy app sources
# COPY . .
RUN mkdir -p /usr/src/app/commands && \
    mkdir -p /usr/src/app/events && \
    mkdir -p /usr/src/appfiles
COPY commands/ /usr/src/app/commands
COPY events/ /usr/src/app/events
COPY files/ /usr/src/app/files
COPY index.js deploy-commands.js start.sh .

RUN chmod u+x start.sh
ENTRYPOINT ["./start.sh"]