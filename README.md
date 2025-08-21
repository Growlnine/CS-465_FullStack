# CS-465_FullStack
CS_465_Full_Stack_Development


## Architecture
In this project, I worked with different approaches to frontend development. Using Express with HTML and JavaScript was straightforward and provided server-rendered pages where each request required a full refresh. This worked well for simple page rendering, but it felt limited in terms of user experience. In contrast, the single-page application (SPA) built with Angular gave a smoother and more dynamic feel since content updated without a full page reload. The SPA separated concerns more cleanly, with the backend acting mainly as an API provider while the frontend handled the user interface and state. The biggest difference between the two approaches is responsiveness: Express-based pages are simpler but less interactive, while SPAs require more setup but deliver a richer, more modern experience.

For the backend, the application used a NoSQL MongoDB database because of its flexibility in handling unstructured data. MongoDB stores data in JSON-like documents, which makes it a natural fit for web applications that pass data as JSON between frontend and backend. It also scales easily and avoids the rigid schemas of SQL databases, making development faster when working with changing requirements.

## Functionality
JSON is different from JavaScript even though they look similar. JavaScript is a programming language, while JSON is a lightweight data format that uses key-value pairs to represent information. In this project, JSON acted as the bridge between frontend and backend — the backend returned data in JSON, and the frontend consumed it to render UI updates. This format kept communication simple and consistent across the stack.

During development, I refactored code several times. For example, I cleaned up redundant functions in my Angular components and reused UI components like forms and navigation bars instead of rewriting them for each page. Refactoring improved readability and reduced bugs, while reusable components made the frontend more efficient and consistent. This also allowed for easier maintenance since updates only needed to be applied once.

## Testing
APIs depend heavily on methods (like GET, POST, PUT, DELETE) and endpoints (the specific routes used to access or modify data). Testing endpoints meant verifying that requests sent the correct data and responses returned in the right format. Adding layers of security, like authentication and authorization, made testing trickier because protected endpoints required valid tokens or sessions to access. I learned to test both unsecured and secured endpoints, ensuring not only functionality but also that unauthorized requests were properly blocked. This gave me a better understanding of how real-world APIs protect data while still being accessible to valid users.

## Reflection

This course gave me hands-on experience with the full stack, from setting up the backend with MongoDB and Express to building an Angular SPA frontend. I developed stronger skills in structuring projects, connecting frontend and backend, and working with REST APIs. I also improved my debugging and refactoring practices, which will help me in larger projects.

Overall, the experience has moved me closer to my professional goals by giving me practical, marketable skills. I now feel more confident in pursuing roles that require full stack development knowledge, and I can demonstrate not only that I know the technologies but also how to connect them into a working, scalable application.
