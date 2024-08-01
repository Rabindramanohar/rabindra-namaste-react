# Architecture

## monolithic architecture

### Defination:

- Single unit unified software application where all components(user interface, business logic, and data acces) are interconnected and run as single unit.

### Characteristics:

- Single codebase and deployment unit.
- Tightly coupled components.
- Commonly used in smaller applications or initial development stages.

### Advantages:

- Simple to develop and deploy initially.
- Easier to test and debug as everything is in one place.
- Less overhead in terms of infrastructure and DevOps.

### Disadvantages:

- Scalability challenges: Hard to scale individual components.
- Difficult to maintain and update over time due to tightly coupled components.
- Deployment issues: Small changes require redeploying the entire application.
- Risk of failure: A failure in one part can affect the entire system.

## microservices architecture

### Definition:

- A collection of small, independently deployable services, each responsible for a specific functionality within the application.

### Characteristics:

- Each service has its own codebase and can be deployed independently.
- Loosely coupled services communicate via APIs.
- Commonly used in large, complex applications requiring high scalability and flexibility.

### Advantages:

- Scalability: Each service can be scaled independently.
- Flexibility: Services can be developed using different technologies.
- Isolation: Failures in one service do not affect others.
- Easier to manage smaller, focused codebases.

### Disadvantages:

- Increased complexity: More moving parts to manage.
- Distributed system challenges: Network latency, data consistency, and monitoring.
- Higher DevOps overhead: More pipelines, more deployments, and more infrastructure management.

# Methods to fetch data in the frontend and manage the user experience:

### Skeleton Loading

- Skeleton loading involves showing placeholder content that mimics the structure of the actual content while the data is being fetched. This provides a more seamless and visually appealing experience for the user.

- shimmer UI technique can be used above point is defination of this

### Spinner Loading

Spinner loading involves displaying a spinner or loading indicator while the data is being fetched. This method is simpler but may not be as visually engaging as skeleton loading.
