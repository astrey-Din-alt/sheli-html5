# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the custom Nginx configuration file to the container
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the HTML5 game files to the container
COPY sheli-html5 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container is launched
CMD ["nginx", "-g", "daemon off;"]
