
# Pull base image nodejs image.
FROM node:16

#Use bash shell by default
SHELL ["/bin/bash", "-c"]

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app

# Expose ports.
EXPOSE 3003

#Run the app
CMD [ "npm", "start"]
