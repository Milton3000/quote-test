
I'm using a proxy setup instead of directly dealing with CORS or relying on a CORS proxy service. 
When I specify a proxy in my development setup, it acts as a middleman between my frontend app and the server I'm fetching data from. 
This means I don't have to deal with configuring CORS headers on my server or rely on external services like CORS proxies. 
It's simpler and more direct for me, especially during a simple development like this, where I just want to focus on building my app without getting bogged down by CORS-related issues. 
Plus, it mimics the real production environment more closely, where the server's CORS configuration is what ultimately matters :)
